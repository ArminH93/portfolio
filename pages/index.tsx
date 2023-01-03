import Head from 'next/head'
import Image from 'next/image'
import profile from '../public/profile.jpg'
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

          <h1
            className={inter.className}
            // Make gradient text minimalistic and readable in dark and light mode
            style={{
              background:
                'linear-gradient(45deg, #8fd3f4 30%, #FF8E53 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '3rem',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Armin Halilovic

          </h1>
          {/* <Image
            src={profile}
            height={144}
            width={144}
            alt="Armin Halilovic"
            className={styles.profile}
          >
          </Image> */}
        </div>

        <div className={styles.grid}>

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
            href="/contact"
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
