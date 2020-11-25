import Link from 'next/link';
import styles from '../../styles/Post.module.scss'

function PostLink({ id, date, title: { rendered } }) {
  return (
    <Link href={`/posts/${id}`}><a className={styles.card}>
      <div className={styles.title}>{rendered}</div>
      <div className={styles.date}>{date}</div>
    </a></Link>
  )
}

export default PostLink;
