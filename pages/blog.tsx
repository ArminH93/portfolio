import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Blog() {
  return (
    <>
      <Head>
        <title>Porftolio</title>
        <meta name="description" content="Mein Online Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1 className={inter.className}>My Blog</h1>
          <h2 className={inter.className}>
            <Link href='/'>
              Go back home
            </Link>

          </h2>
        </div>
      </main>
    </>
  )
}