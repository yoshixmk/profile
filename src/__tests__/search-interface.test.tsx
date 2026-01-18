/**
 * Unit Tests for Search Interface Component
 * Feature: nextjs-nextra-profile-website, Task 7.1: Integrate Pagefind search system
 * Validates: Requirements 6.1, 6.5
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SearchInterface } from '@/components/SearchInterface'

// Mock the useLocale hook
jest.mock('@/hooks', () => ({
    useLocale: () => ({
        currentLocale: 'en',
    }),
}))

describe('SearchInterface Component', () => {
    beforeEach(() => {
        // Reset any global state
        delete (window as any).pagefind
    })

    it('should render search trigger button with loading state initially', () => {
        render(<SearchInterface />)

        // Should show loading state initially
        expect(screen.getByText('Loading search...')).toBeInTheDocument()
        expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('should render search trigger button as disabled when loading', () => {
        render(<SearchInterface />)

        const button = screen.getByRole('button')
        expect(button).toBeDisabled()
        expect(button).toHaveClass('cursor-not-allowed')
    })

    it('should contain search icon in the button', () => {
        render(<SearchInterface />)

        // The SearchIcon should be rendered (we can't easily test the icon itself, but we can test the button structure)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })

    it('should have proper accessibility attributes', () => {
        render(<SearchInterface />)

        const button = screen.getByRole('button')
        expect(button).toHaveAttribute('type', 'button')
    })
})