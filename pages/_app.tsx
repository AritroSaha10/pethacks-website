import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import { LazyMotion, AnimatePresence, domAnimation } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  return (
    <LazyMotion features={domAnimation} strict>
      {/* <TopBanner showBanner={false} /> */}
      <AnimatePresence mode="wait">
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </LazyMotion>
  )
}

export default MyApp
