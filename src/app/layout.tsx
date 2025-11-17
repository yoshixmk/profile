import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'プロフィールサイト',
  description: '植木善弘のプロフィールサイト',
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <>
      {children}
    </>
  )
}
