/* eslint-env jest */
import '@testing-library/jest-dom'

// Mock next/navigation
const mockRouter = {
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  refresh: jest.fn(),
}

const mockParams = {
  lang: 'en',
}

const mockSearchParams = new URLSearchParams()
const mockPathname = '/'

jest.mock('next/navigation', () => ({
  useRouter: () => mockRouter,
  useParams: () => mockParams,
  useSearchParams: () => mockSearchParams,
  usePathname: () => mockPathname,
}))

// Mock next-themes
jest.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: jest.fn(),
    resolvedTheme: 'light',
  }),
  ThemeProvider: ({ children }) => children,
}))
