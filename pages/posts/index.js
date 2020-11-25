import Header from '../../components/Posts/Header'
import Posts from '../../components/Posts/Posts'
import styles from '../../styles/Home.module.scss'
export default function PostIndexPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Posts />
      </main>
    </>
  )
}
