import { Project } from "..";
import { projects } from "../../constants";
import styles from "./MyProjects.module.css";

export default function MyProjects() {
  return (
    <section id="my-projects" className={styles.myProjects}>
      <h2 className={styles.heading}>My projects 🏃‍♂️</h2>
      <p className={styles.description}>
        Here are some projects I have worked on:
      </p>
      <ul className={styles.projects}>
        {projects.map(project => (
          <li key={project.name}>
            <Project {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
