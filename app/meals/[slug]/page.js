import Image from 'next/image';
import styles from './page.module.css'
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';

export default async function MealsSlugPage(props) {
  const meal = await getMeal(props.params.slug);

  if (!meal) {
    notFound();
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image fill src={meal.image} />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal?.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>
              {meal.summary}
          </p>
        </div>
      </header>
      <main>
        <p className={styles.instructions} >
          <pre className={styles.instructionsText}>{meal.instructions}</pre>
        </p>
      </main>
    </>
  );
}
