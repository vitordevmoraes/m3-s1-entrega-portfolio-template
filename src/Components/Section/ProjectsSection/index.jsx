import { ProjectsCard } from "./ProjectsCard/index.jsx";
import { projects } from "../../../data/projects.js";
import styles from "./styles.module.css";
export const ProjectsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.info}>Projetos</h1>
        <ul className={styles.list}>
          {projects.map((projectsItem) => (
            <ProjectsCard Item={projectsItem} />
          ))}
        </ul>
      </div>
    </section>
  );
};
