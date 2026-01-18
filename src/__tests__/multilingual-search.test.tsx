/**
 * Integration Tests for Multilingual Search Functionality
 * Feature: nextjs-nextra-profile-website, Task 7.2: Implement multilingual search
 * Validates: Requirements 6.2, 6.3, 6.4
 */

import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SearchInterface } from '@/components/SearchInterface'

// Mock the useLocale hook
const mockUseLocale = jest.fn()
jest.mock('@/hooks', () => ({
    useLocale: () => mockUseLocale(),
}))

// Mock Pagefind
const mockPagefindSearch = jest.fn()
const mockPagefindInit = jest.fn()

const mockPagefind = {
    search: mockPagefindSearch,
    init: mockPagefindInit,
    filters: jest.fn().mockResolvedValue({}),
}

describe('Multilingual Search Integration', () => {
    beforeEach(() => {
        // Reset mocks
        jest.clearAllMocks()
        mockUseLocale.mockReturnValue({ currentLocale: 'en' })

        // Mock window.pagefind
        Object.defineProperty(window, 'pagefind', {
            value: mockPagefind,
            writable: true,
        })

        // Mock successful initialization
        mockPagefindInit.mockResolvedValue(undefined)
    })

    afterEach(() => {
        delete (window as any).pagefind
    })

    it('should prioritize current language results', async () => {
        // Set Japanese as current locale
        mockUseLocale.mockReturnValue({ currentLocale: 'ja' })

        const mockResults = {
            results: [
                {
                    id: 'en-1',
                    data: () => Promise.resolve({
                        id: 'en-1',
                        url: '/en/blog/test',
                        title: 'English Article',
                        excerpt: 'English content',
                        content: 'English content...',
                        language: 'en',
                        meta: { word_count: 300, filters: {} }
                    })
                },
                {
                    id: 'ja-1',
                    data: () => Promise.resolve({
                        id: 'ja-1',
                        url: '/ja/blog/test',
                        title: '日本語記事',
                        excerpt: '日本語コンテンツ',
                        content: '日本語コンテンツ...',
                        language: 'ja',
                        meta: { word_count: 200, filters: {} }
                    })
                }
            ]
        }

        mockPagefindSearch.mockResolvedValue(mockResults)

        render(<SearchInterface />)

        // Wait for initialization
        await waitFor(() => {
            expect(screen.getByText('Search')).toBeInTheDocument()
        })

        // Open search and search
        fireEvent.click(screen.getByRole('button'))

        await waitFor(() => {
            expect(screen.getByPlaceholderText(/Search in 日本語/)).toBeInTheDocument()
        })

        const searchInput = screen.getByPlaceholderText(/Search in 日本語/)
        fireEvent.change(searchInput, { target: { value: 'test' } })

        // Wait for results and verify Japanese result appears first
        await waitFor(() => {
            const results = screen.getAllByRole('link')
            expect(results[0]).toHaveTextContent('日本語記事')
        })
    })

    it('should highlight search terms in results', async () => {
        const mockResults = {
            results: [
                {
                    id: 'test-1',
                    data: () => Promise.resolve({
                        id: 'test-1',
                        url: '/en/blog/typescript',
                        title: 'TypeScript Guide',
                        excerpt: 'Learn TypeScript programming language',
                        content: 'TypeScript is a typed superset...',
                        language: 'en',
                        meta: { word_count: 400, filters: {} }
                    })
                }
            ]
        }

        mockPagefindSearch.mockResolvedValue(mockResults)

        render(<SearchInterface />)

        await waitFor(() => {
            expect(screen.getByText('Search')).toBeInTheDocument()
        })

        fireEvent.click(screen.getByRole('button'))

        await waitFor(() => {
            expect(screen.getByPlaceholderText(/Search in English/)).toBeInTheDocument()
        })

        const searchInput = screen.getByPlaceholderText(/Search in English/)
        fireEvent.change(searchInput, { target: { value: 'TypeScript' } })

        // Wait for results and verify highlighting
        await waitFor(() => {
            const highlightedElements = screen.getAllByText('TypeScript')
            // Should have highlighted text in both title and excerpt
            expect(highlightedElements.length).toBeGreaterThan(1)
        })
    })

    it('should handle search errors gracefully', async () => {
        // Mock search error
        mockPagefindSearch.mockRejectedValue(new Error('Search failed'))

        render(<SearchInterface />)

        await waitFor(() => {
            expect(screen.getByText('Search')).toBeInTheDocument()
        })

        fireEvent.click(screen.getByRole('button'))

        await waitFor(() => {
            expect(screen.getByPlaceholderText(/Search in English/)).toBeInTheDocument()
        })

        const searchInput = screen.getByPlaceholderText(/Search in English/)
        fireEvent.change(searchInput, { target: { value: 'test query' } })

        // Should not crash and should show no results
        await waitFor(() => {
            expect(screen.getByText('No results found for "test query"')).toBeInTheDocument()
        })
    })

    it('should show comprehensive content coverage message', async () => {
        render(<SearchInterface />)

        await waitFor(() => {
            expect(screen.getByText('Search')).toBeInTheDocument()
        })

        fireEvent.click(screen.getByRole('button'))

        await waitFor(() => {
            expect(screen.getByText('Start typing to search across all content...')).toBeInTheDocument()
            expect(screen.getByText('Results will prioritize English content')).toBeInTheDocument()
        })
    })
})