import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav className={styles.nav}>
    
    <Image
                src="/logo.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={200}
                height={50}
                priority
              />
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/">Accueil </Link>
        </li>
        <li className={styles.li}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.li}>
          <Link href="/contact">Contact </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;