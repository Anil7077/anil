import MovetoTop from '@/components/MovetoTop'

export default function App({ Component, pageProps }) {

  return (
    <>
      <Component {...pageProps} />
      <MovetoTop />
    </>
  )
}
