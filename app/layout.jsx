import '@/styles/globals.css'

import { Inter } from 'next/font/google'

import { Navbar } from '@/components/navbar'
import { siteConfig } from '@/config/site'

import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Providers>
          <div className="relative flex h-screen flex-col">
            <Navbar />
            <main className="container mx-auto max-w-7xl grow px-6 pt-16">{children}</main>
            <footer className="flex w-full items-center justify-center py-3">
              <span className="text-default-600">Copyright (C) あれこれそんな会社</span>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  )
}
