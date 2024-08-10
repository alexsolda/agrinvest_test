import { AppProps } from 'next/app'
import '../app/globals.css'
import { Providers } from '@/app/providers'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default MyApp
