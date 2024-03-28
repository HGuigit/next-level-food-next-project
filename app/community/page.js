import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import styles from "./page.module.css";

export default function CommunityPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Uma paixão compartilhada:{" "}
          <span className={styles.highlight}>Comida</span>
        </h1>
        <p>
          Junte-se à nossa comunidade e compartilhe suas receitas favoritas!
        </p>
      </header>
      <main className={styles.main}>
        <h2>Benefícios da Comunidade</h2>

        <ul className={styles.perks}>
          <li>
            <Image src={mealIcon} alt="Uma refeição deliciosa" />
            <p>Compartilhe e descubra receitas</p>
          </li>
          <li>
            <Image src={communityIcon} alt="Um grupo de pessoas cozinhando" />
            <p>Encontre novos amigos e pessoas com interesses semelhantes</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="Um grupo de pessoas em um evento de culinária"
            />
            <p>Participe de eventos exclusivos</p>
          </li>
        </ul>
      </main>
    </>
  );
}
