import Header from '../components/Posts/Header'
import Posts from '../components/Posts/Posts'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <iframe src="https://anchor.fm/gutenbergfreaks/embed" height="102px" width="400px" frameBorder="0" scrolling="no"></iframe>
        <Posts />
      {/* <ul>
        <li><Link href="/todos"><a>Todos</a></Link></li>
        <li><Link href="/posts"><a>Blog</a></Link></li>
        <li><Link href="/meetups"><a>Meetups</a></Link></li>
      </ul> */}
      </main>
    </>
  )
}
