import Header from '../components/Posts/Header'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
      <ul>
        {/* <li><Link href="/todos"><a>Todos</a></Link></li> */}
        <li><Link href="/posts"><a>Blog</a></Link></li>
        <li><Link href="/meetups"><a>Meetups</a></Link></li>
      </ul>
      </main>
    </>
  )
}
