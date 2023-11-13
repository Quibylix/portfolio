import styles from "./MyProjects.module.css";

export default function MyProjects() {
  return (
    <section className={styles.myProjects}>
      <h2 className={styles.heading}>My projects 🏃‍♂️</h2>
      <p className={styles.description}>
        Here are some projects I have worked on:
      </p>
      <ul className={styles.projects}>
        <li>
          <img
            className={styles.projectImage}
            src="https://picsum.photos/200/300"
            alt="To-do App"
          />
          <h3 className={styles.projectName}>To-do App</h3>
          <p className={styles.projectDescription}>
            Manage your tasks without problems and increase your productivity
          </p>
          <ul className={styles.technologies}>
            <li className={styles.technology}>Javascript</li>
            <li className={styles.technology}>HTML</li>
            <li className={styles.technology}>CSS</li>
            <li className={styles.technology}>Node.js</li>
          </ul>
          <div className={styles.buttons}>
            <a className={styles.seeProject} href="#">
              See project
            </a>
            <a className={styles.seeCode} href="#">
              See code
            </a>
          </div>
        </li>
        <li>
          <img
            className={styles.projectImage}
            src="https://picsum.photos/200/300"
            alt="To-do App"
          />
          <h3 className={styles.projectName}>To-do App</h3>
          <p className={styles.projectDescription}>
            Manage your tasks without problems and increase your productivity
          </p>
          <ul className={styles.technologies}>
            <li className={styles.technology}>Javascript</li>
            <li className={styles.technology}>HTML</li>
            <li className={styles.technology}>CSS</li>
            <li className={styles.technology}>Node.js</li>
          </ul>
          <div className={styles.buttons}>
            <a className={styles.seeProject} href="#">
              See project
            </a>
            <a className={styles.seeCode} href="#">
              See code
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
}
