import type { Metadata } from 'next'
import { Anton, Roboto } from 'next/font/google'
import './globals.css'

const anton = Anton({
  weight: ['400'],
  variable: '--font-anton',
  subsets: ['latin'],
})

const roboto = Roboto({
  weight: ['400', '100', '300', '500', '700', '900'],
  variable: '--font-roboto',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Luan Faria Developer',
  description: 'Experienced FullStack Software Engineer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${roboto.variable}`}>{children}</body>
    </html>
  )
}
