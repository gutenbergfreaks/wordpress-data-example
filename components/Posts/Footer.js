import Link from 'next/link'
import styles from '../../styles/Home.module.scss'

export default function Header() {
    return (
        <footer className={styles.footer}>
            <p>Proudly powered by WordPress, Shifter, Next.js, Netlify.</p>
        </footer>
    );
}
