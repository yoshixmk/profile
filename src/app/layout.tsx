import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Profile',
  description: 'Full-stack Web Engineer & Android Engineer',
  metadataBase: new URL('https://yoshixmk.github.io/profile'),
  icons: './img/favicon.svg',
  openGraph: {
    title: 'Profile',
    description: 'Full-stack Web Engineer & Android Engineer',
    url: 'https://yoshixmk.github.io/profile',
    siteName: 'Profile',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Profile',
    description: 'Full-stack Web Engineer & Android Engineer',
    site: '@yoshixmk',
    creator: '@yoshixmk',
  },
  alternates: {
    canonical: 'https://github.com/yoshixmk/profile',
  },
  robots: {
    index: true,
    follow: true,
  },
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return children
}
