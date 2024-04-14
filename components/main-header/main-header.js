import Link from "next/link"
import Image from "next/image"

import logoImg from "@/assets/logo.png"
import styles from './main-header.module.css'
import MainHeaderBackground from "./main-header-background";
import NavLink from "../nav-link/nav-link";


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
                <NavLink href={"/meals"}>Pesquisar Refeições </NavLink>
              </li>
              <li>
                <NavLink href={"/community"}>Comunidade </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
}