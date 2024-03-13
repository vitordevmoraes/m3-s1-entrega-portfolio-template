import GithubImg from "../../assets/github-icon.png";
import LinkedinImg from "../../assets/linkedin-icon.png";
import WhatsImg from "../../assets/whatsapp-icon.png";
import styles from "./styles.module.css";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <h1>Contatos</h1>
          <div className={styles.icon}>
            <img src={GithubImg} alt="" />
            <img src={LinkedinImg} alt="" />
            <img src={WhatsImg} alt="" />
          </div>
        </div>
        <p className={styles.info}>
          Todos os direitos reservados - Vitor Moraes
        </p>
      </div>
    </footer>
  );
};