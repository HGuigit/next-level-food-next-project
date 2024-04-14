import Link from "next/link";
import Image from "next/image";

import styles from "./meal-item.module.css";

const bucket_url = process.env.AWS_BUCKET_URL

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          <Image src={`${bucket_url}${image}`} alt={title} fill />
        </div>
        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          <Link href={`/meals/${slug}`}>Ver Detalhes</Link>
        </div>
      </div>
    </article>
  );
}
