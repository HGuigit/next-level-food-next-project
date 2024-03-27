import Link from "next/link";
import styles from './page.module.css'
import MealsGrid from "@/components/meals/meals-grid";

export default function MealsPage() {
    return (
      <>
            <header className={styles.header}>
                <h1>
                    Refeições deliciosas, criadas
                    <span className={styles.highlight}> por você.</span>
                </h1>
                <p>
                    Escolha sua receita favorita e cozinhe você mesmo. É rápido, fácil e gostoso.
                </p>
                <p className={styles.cta}>
                    <Link href={"/meals/share"}>
                        Compartilhe sua receita favorita.
                    </Link>
                </p>
            </header>
            <main className={styles.main}>
                <MealsGrid meals={[]} />
            </main>
      </>
    );
}