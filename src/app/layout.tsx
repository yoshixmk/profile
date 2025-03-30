import React from 'react'
import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'プロフィールサイト',
  description: '植木善弘のプロフィールサイト',
}

type Props = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (<>
    {children}
  </>)
}
