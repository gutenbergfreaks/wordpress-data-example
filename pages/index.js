import Header from '../components/Posts/Header'
import Footer from '../components/Posts/Footer'
import Posts from '../components/Posts/Posts'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <p>gutenbergfreaks.jpは「Gutenbergをネタにした止めどないお喋り」をする <a href="https://twitter.com/search?q=%23Gutenberg%E3%82%92%E8%AA%AD%E3%82%80%E4%BC%9A&src=typed_query">#Gutenbergを読む会</a> のサイトです。</p>
        <Posts />
      {/* <ul>
        <li><Link href="/todos"><a>Todos</a></Link></li>
        <li><Link href="/posts"><a>Blog</a></Link></li>
        <li><Link href="/meetups"><a>Meetups</a></Link></li>
      </ul> */}
      </main>
      <Footer />
    </>
  )
}
