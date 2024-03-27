import Link from 'next/link';
import styles from './page.module.css';
import ImageSlideshow from '@/components/slideshow/image-slideshow';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={styles.hero}>
            <h1>Comida de próximo nível para você</h1>
            <p>Teste e compartilhe comida de todo o lugar do mundo.</p>
          </div>
          <div className={styles.cta}>
            <Link href={"/community"}>Entre na comunidade</Link>
            <Link href={"/meals"}>Explore refeições.</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h2>Como funciona?</h2>
          <p>
            Next Level Food é uma plataforma para os gourmets compartilharem
            seus favoritos receitas com o mundo. É um lugar para descobrir novos
            pratos, e para se conectar com outros amantes da comida.
          </p>
          <p>
            Next Level Food é um lugar para descobrir novos pratos e se conectar
            com outros amantes da comida.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Porque Next Level?</h2>
          <p>
            NextLevel Food é uma plataforma para os gourmets compartilharem suas
            receitas favoritas com o mundo e realmente subirem seus paladares de nível.
            É um lugar para descobrir novos pratos e se conectar com outros amantes da gastronomia.
          </p>
          <p>
            Next Leval Food não é só um lugar para descobrir novos pratos é uma comunidade completa!
          </p>
        </section>
      </main>
    </>
  );
}
