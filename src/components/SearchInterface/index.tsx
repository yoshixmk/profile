'use client'

import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import { useLocale } from '@/hooks'

interface PagefindResult {
    id: string
    url: string
    title: string
    excerpt: string
    content: string
    language: string
    meta: {
        word_count: number
        filters: Record<string, string>
    }
}

interface PagefindInstance {
    search: (query: string, options?: { language?: string; limit?: number; excerptLength?: number }) => Promise<{
        results: Array<{
            id: string
            data: () => Promise<PagefindResult>
        }>
    }>
    filters: () => Promise<Record<string, string[]>>
    init: () => Promise<void>
}

declare global {
    interface Window {
        pagefind?: PagefindInstance
    }
}

export function SearchInterface() {
    const [isLoading, setIsLoading] = useState(true)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState<PagefindResult[]>([])
    const [isSearching, setIsSearching] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const { currentLocale } = useLocale()

    useEffect(() => {
        // Initialize Pagefind
        const initializePagefind = async () => {
            try {
                if (!window.pagefind) {
                    // Load Pagefind script
                    const script = document.createElement('script')
                    script.src = '/_pagefind/pagefind.js'
                    script.onload = async () => {
                        if (window.pagefind) {
                            await window.pagefind.init()
                            setIsLoading(false)
                        }
                    }
                    script.onerror = () => {
                        console.error('Failed to load Pagefind')
                        setIsLoading(false)
                    }
                    document.head.appendChild(script)
                } else {
                    await window.pagefind.init()
                    setIsLoading(false)
                }
            } catch (error) {
                console.error('Error initializing Pagefind:', error)
                setIsLoading(false)
            }
        }

        initializePagefind()
    }, [])

    const performSearch = async (query: string) => {
        if (!window.pagefind || !query.trim()) {
            setSearchResults([])
            return
        }

        setIsSearching(true)
        try {
            // Perform search without language restriction to get all results
            const allResults = await window.pagefind.search(query, {
                limit: 20,
                excerptLength: 150
            })

            // Get detailed data for each result
            const detailedResults = await Promise.all(
                allResults.results.map(async (result) => {
                    const data = await result.data()
                    return data
                })
            )

            // Sort results: prioritize current language, then by relevance
            const sortedResults = detailedResults.sort((a, b) => {
                // Prioritize current language
                if (a.language === currentLocale && b.language !== currentLocale) return -1
                if (b.language === currentLocale && a.language !== currentLocale) return 1

                // Then sort by word count (relevance proxy)
                return b.meta.word_count - a.meta.word_count
            })

            // Limit to top 10 results for better UX
            setSearchResults(sortedResults.slice(0, 10))
        } catch (error) {
            console.error('Search error:', error)
            setSearchResults([])
        } finally {
            setIsSearching(false)
        }
    }

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value
        setSearchQuery(query)

        // Debounce search
        const timeoutId = setTimeout(() => {
            performSearch(query)
        }, 300)

        return () => clearTimeout(timeoutId)
    }

    const openSearch = () => {
        if (!isLoading) {
            setIsSearchOpen(true)
        }
    }

    const closeSearch = () => {
        setIsSearchOpen(false)
        setSearchQuery('')
        setSearchResults([])
        setSelectedIndex(-1)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!isSearchOpen) return

        switch (e.key) {
            case 'Escape':
                closeSearch()
                break
            case 'ArrowDown':
                e.preventDefault()
                setSelectedIndex(prev =>
                    prev < searchResults.length - 1 ? prev + 1 : prev
                )
                break
            case 'ArrowUp':
                e.preventDefault()
                setSelectedIndex(prev => prev > -1 ? prev - 1 : -1)
                break
            case 'Enter':
                e.preventDefault()
                if (selectedIndex >= 0 && selectedIndex < searchResults.length) {
                    const selectedResult = searchResults[selectedIndex]
                    window.location.href = selectedResult.url
                    closeSearch()
                }
                break
        }
    }

    const highlightText = (text: string, query: string) => {
        if (!query.trim()) return text

        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
        const parts = text.split(regex)

        return parts.map((part, index) =>
            regex.test(part) ? (
                <mark key={index} className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">
                    {part}
                </mark>
            ) : part
        )
    }

    const getLanguageLabel = (lang: string) => {
        return lang === 'ja' ? '日本語' : 'English'
    }

    return (
        <>
            {/* Search Trigger Button */}
            <button
                type="button"
                onClick={openSearch}
                disabled={isLoading}
                className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${isLoading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                    }`}
                aria-label="Open search"
            >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">
                    {isLoading ? 'Loading search...' : 'Search'}
                </span>
            </button>

            {/* Search Modal */}
            {isSearchOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-20"
                    onKeyDown={handleKeyDown}
                >
                    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
                        {/* Search Input */}
                        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    placeholder={`Search in ${getLanguageLabel(currentLocale)} and other languages...`}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    autoFocus
                                />
                                <button
                                    onClick={closeSearch}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>

                        {/* Search Results */}
                        <div className="max-h-96 overflow-y-auto">
                            {isSearching && (
                                <div className="p-4 text-center text-gray-500">
                                    Searching...
                                </div>
                            )}

                            {!isSearching && searchQuery && searchResults.length === 0 && (
                                <div className="p-4 text-center text-gray-500">
                                    No results found for "{searchQuery}"
                                </div>
                            )}

                            {!isSearching && searchResults.length > 0 && (
                                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {searchResults.map((result, index) => (
                                        <div
                                            key={result.id || index}
                                            className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-800 ${selectedIndex === index ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500' : ''
                                                }`}
                                        >
                                            <a
                                                href={result.url}
                                                onClick={closeSearch}
                                                className="block group"
                                            >
                                                <div className="flex items-start justify-between gap-2 mb-2">
                                                    <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400 group-hover:underline">
                                                        {highlightText(result.title, searchQuery)}
                                                    </h3>
                                                    <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-400 flex-shrink-0">
                                                        {getLanguageLabel(result.language)}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                                                    {highlightText(result.excerpt, searchQuery)}
                                                </p>
                                                <div className="mt-2 text-xs text-gray-500">
                                                    {result.url} • {result.meta.word_count} words
                                                </div>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {!searchQuery && (
                                <div className="p-4 text-center text-gray-500">
                                    <p>Start typing to search across all content...</p>
                                    <p className="text-xs mt-2">
                                        Results will prioritize {getLanguageLabel(currentLocale)} content
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}