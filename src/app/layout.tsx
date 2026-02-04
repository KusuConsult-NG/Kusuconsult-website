import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'KusuConsult | Digital Innovation & Solutions',
  description: 'Transforming businesses with cutting-edge technology, custom software, and strategic consultancy. Welcome to the future.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-[#030014] text-white overflow-y-scroll overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
