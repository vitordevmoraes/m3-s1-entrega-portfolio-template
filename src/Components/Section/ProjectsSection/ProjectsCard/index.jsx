import styles from "./styles.module.css";
import ProjectsImg from "../../../../assets/git-icon.png";
export const ProjectsCard = ({ Item }) => {
  return (
    <li className={styles.card}>
      <div className={styles.container}>
        <p className={styles.info1}>{Item.name}</p>
        <p className={styles.info2}>{Item.description}</p>
        <a href="Saiba mais">Saiba mais</a>
      </div>
      <img src={ProjectsImg} alt="" />
    </li>
  );
};
