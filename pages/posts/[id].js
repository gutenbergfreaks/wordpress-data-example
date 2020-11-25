import Head from 'next/head'
import Header from '../../components/Posts/Header'
import Article from '../../components/Posts/Article'
import styles from '../../styles/Home.module.scss'
import { useRouter } from 'next/router';
import { useSelect } from '@wordpress/data';
export default function PostPage() {

  const router = useRouter()
  const { id } = router.query;

  const post = useSelect((select) => {
    const { getPost } = select('my-store/posts');
    if (id) {
      return getPost(id);
    }

    return null;

  }, [id]);

  return (
    <>
      <Header />
      <Head>
        <title>{post?.title.rendered} GutenbergFreaks</title>
      </Head>
      <main className={styles.main}>
        <Article id={id} />
      </main>
    </>
  )
}
