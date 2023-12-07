import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HomePage from '@/components/HomePage'
import LatestWork from '@/components/LatestWork'
import Skills from '@/components/Skills'
import ContactUs from '@/components/ContactUs'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Anil Mallick</title>

      </Head>
      <section className="mt-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 navigation-sidebar">
              <NavBar />
            </div>
            <div className="col-lg-9 col-sm-12">
              <HomePage />
              <LatestWork />
              <Skills />
              <ContactUs />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}



{/* <section className="mt-2">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 navigation-sidebar fixed-top ">
        <NavBar />
      </div>
      <div className="col-lg-9 col-sm-12 offset-sm-3 ">
        <HomePage />
        <LatestWork />
        <Skills />
        <ContactUs />
      </div>
    </div>
  </div>
</section> */}
