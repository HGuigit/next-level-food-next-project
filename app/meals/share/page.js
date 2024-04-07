import ImagePicker from "@/components/meals/image-picker";
import styles from "./page.module.css";
import { shareMeal } from "@/lib/actions";

export default function ShareMealPage() {

  return (
    <>
      <header className={styles.header}>
        <h1>
          Compartilhe sua <span className={styles.highlight}>comida favorita</span>
        </h1>
        <p>Ou qualquer outra comida que você gostaria de compartilhar!</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={shareMeal}> 
         {/* normalmente a action é um path para submit do form, mas aqui é uma function (server function) ! */}
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Seu nome</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Seu email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Titulo</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Resumo Breve</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instruções de preparo</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Sua imagem" name={"image"} />
          <p className={styles.actions}>
            <button type="submit">Compartilhar comida</button>
          </p>
        </form>
      </main>
    </>
  );
}
