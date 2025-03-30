import React from 'react'
import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'プロファイルサイト',
  description: '個人プロファイルサイト',
}

type Props = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (<>
    {children}
  </>)
}
