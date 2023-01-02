import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
          <h1 className={inter.className}>Armin Halilovic</h1>
        </div>

        <div className={styles.grid}>
          <Link
            href="/cv"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              CV <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Hier finden Sie mein CV.
            </p>
          </Link>

          <Link
            href="/blog"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Blog <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Hier finden Sie meinen Blog, Autosave.
            </p>
          </Link>

          <Link
            // add my email
            href="/cv"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Kontakt <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Hier können Sie mich kontaktieren.
            </p>
          </Link>

        </div>
      </main>
    </>
  )
}
