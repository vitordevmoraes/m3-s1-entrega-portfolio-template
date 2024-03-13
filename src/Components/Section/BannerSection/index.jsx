import BannerImg from "../../../assets/banner-img.png";

import styles from "./styles.module.css";

export const BannerSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containerInfo}>
        <div className={styles.containerText}>
          <h6>VITORMORAES</h6>
          <h1>Bem vindo ao meu portfólio</h1>

          <p>
            Minha paixão é traduzir ideias em linhas de código, transformando
            conceitos abstratos em funcionalidades tangíveis.
          </p>
          <button className={styles.button}>Saiba mais</button>
        </div>
        <img src={BannerImg} alt="" />
      </div>
    </section>
  );
};