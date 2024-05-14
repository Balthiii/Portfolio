import styles from "@/styles/Contentabout.module.css";
import Head from 'next/head';
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
      <Image
        src="/banniere.png"
        alt="banniére à propos de nous"
        width={1600}
        height={225}
        />
      <main className={styles.main}>
    <h1 className={styles.title}>
        À propos de nous </h1>
        <p className={styles.text}> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
        dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, 
        varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, 
        non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a,
         enim. </p>
      </main>
<div className={styles.container2}>
<h1 className={styles.title2}>
        Notre mission </h1>
        <p className={styles.text2}> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, 
        dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, 
        varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, 
        non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a,
         enim. </p>
    </div>
      </div>
    );

}