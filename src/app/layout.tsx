import { ReactNode } from 'react'
import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Plus_Jakarta_Sans } from 'next/font/google'
import '@/styles/globals.css'

const jakarta = Plus_Jakarta_Sans({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Luan Faria - Web Developer',
  description:
    'Experienced FullStack Software Engineer. I help business crafting smart digital solutions',
}

interface RootLayoutProps {
  children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable}`}>{children}</body>
    </html>
  )
}
