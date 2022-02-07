import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/dist/client/router';

export default function ProfilePage() {
    const router = useRouter();

return (
    <div className={styles.container}>
        <Head>
            <title>Domain Realm</title>
            <meta name="description" content="Web development session" />
            <link rel="icon" href="/pylampLogo.png" />
        </Head>

        <h1>profilePage</h1>
    </div>
)
}
