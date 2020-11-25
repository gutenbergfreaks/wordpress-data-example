import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.scss'

export default function Header() {
  return (
    <>
      <Head>
        <title>GutenbergFreaks</title>
      </Head>
      <header className={styles.header}>
        <h1>GutenbergFreaks</h1>
        <nav className={styles.nav}>
          <ul>
            <li><Link href={`/`}>
              <a>HOME</a>
            </Link></li>
            <li><Link href={`/posts`}>
              <a>Blog</a>
            </Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
