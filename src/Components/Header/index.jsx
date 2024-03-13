import styles from "./styles.module.css";
import PortfolioImg from "../../assets/portfolio.png";
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={PortfolioImg} alt="" />
        <nav className={styles.nav}>
          <a href="Sobre">Sobre</a>
          <a href="Stack">Stack</a>
          <a href="Projetos">Projetos</a>
        </nav>

        <button className={styles.button}>Contato</button>
      </div>
    </header>
  );
};
