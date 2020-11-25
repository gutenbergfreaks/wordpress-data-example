import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.scss'

export default function Header() {
  return (
    <>
      <Head>
        <title>GutenbergFreaks</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className={styles.header}>
        <h1>GutenbergFreaks</h1>
        <nav className={styles.nav}>
          <ul>
            <li><Link href={`/`}>
              <a>HOME</a>
            </Link></li>
            <li><Link href={`/posts`}>
              <a>BLOG</a>
            </Link></li>
            <li><Link href={`https://anchor.fm/gutenbergfreaks/`}>
              <a>PODCAST</a>
            </Link></li>
            <li><Link href={`https://www.youtube.com/channel/UCwVwn-uaKOpLOlg_fB-ddUA`}>
              <a>YOUTUBE</a>
            </Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
