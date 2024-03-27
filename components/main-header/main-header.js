import Link from "next/link"
import Image from "next/image"

import logoImg from "@/assets/logo.png"
import styles from './main-header.module.css'
import MainHeaderBackground from "./main-header-background";


export default function MainHeader() {

    return (
        <>
      <MainHeaderBackground />
        <header className={styles.header}>
          <Link className={styles.logo} href="/">
            <Image src={logoImg} alt="Um prato com comida" priority />
            Next Level Food
          </Link>
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link href={"/meals"}>Pesquisar Refeições</Link>
              </li>
              <li>
                <Link href={"/community"}>Foodies Comunidade</Link>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
}