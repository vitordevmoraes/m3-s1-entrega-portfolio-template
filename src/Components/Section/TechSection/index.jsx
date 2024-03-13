import { technologies } from "../../../data/technologies.js";
import { TechCard } from "./TechCard/indexCard.jsx";
import styles from "./styles.module.css";
export const TechSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Tecnologias</h1>
        <ul className={styles.list}>
          {technologies.map((techItem) => (
            <TechCard Item={techItem} />
          ))}
        </ul>
      </div>
    </section>
  );
};
