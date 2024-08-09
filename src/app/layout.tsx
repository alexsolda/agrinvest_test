import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Header from './components/Header'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['200', '600']
})

export const metadata: Metadata = {
  title: 'Teste | Agrinvest',
  description:
    'O teste tem por objetivo testar alguns fundamentos básicos referentes a lógica de programação, Design, React e Next.JS.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body
        className={`${nunito.variable} font-nunito min-h-screen bg-custom-radial animate-pulseBG transition-all`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
