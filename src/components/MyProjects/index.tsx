import { Project } from "..";
import styles from "./MyProjects.module.css";

export default function MyProjects() {
  return (
    <section id="my-projects" className={styles.myProjects}>
      <h2 className={styles.heading}>My projects 🏃‍♂️</h2>
      <p className={styles.description}>
        Here are some projects I have worked on:
      </p>
      <ul className={styles.projects}>
        <li>
          <Project
            name="To-do App"
            description="Manage your tasks without problems and increase your productivity."
            imageUrl="https://picsum.photos/200/300"
            technologies={["javascript", "html", "css", "nodeJS"]}
            projectUrl="#"
            codeUrl="#"
          />
        </li>
        <li>
          <Project
            name="To-do App"
            description="Manage your tasks without problems and increase your productivity."
            imageUrl="https://picsum.photos/200/300"
            technologies={["javascript", "html", "css", "nodeJS"]}
            projectUrl="#"
            codeUrl="#"
          />
        </li>
      </ul>
    </section>
  );
}
