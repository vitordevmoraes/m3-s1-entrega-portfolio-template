import styles from "./styles.module.css";
export const TechCard = ({ Item }) => {
  return (
    <li className={styles.card}>
      <p className={styles.info}>{Item.name}</p>
      <img src={Item.img} alt="" />
    </li>
  );
};
