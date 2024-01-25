// import '@/styles/globals.css'
import MovetoTop from '@/components/MovetoTop'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <MovetoTop />
    </>
  )

}
