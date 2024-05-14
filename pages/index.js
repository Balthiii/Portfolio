import styles from "@/styles/Contentindex.module.css";
import Head from 'next/head';
import Link  from 'next/link';
import Navbar from '../components/navbar'
import Image from "next/image";
export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ma nouvelle page</title>
        <meta name="description" content="Ceci est mon Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <h1 className={styles.title}>
          Hi!<br />
          I'm <span className={styles.name}>Balthazar </span><br />
          Web Developer
        </h1>
        <Link href="/contact">
    <button className={styles.contactButton}>Contact</button>
</Link>
        <Image className={styles.profileImage}
                src="/pp.jpg"
                alt="Balthazar Logo"
                width={300}
                height={150}
                priority
              />

      </main>
    </div>
  );
}