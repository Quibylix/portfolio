import { Icon } from "..";
import styles from "./Project.module.css";

type ProjectProps = {
  imageUrl: string;
  name: string;
  description: string;
  technologies: string[];
  projectUrl: string;
  codeUrl: string;
};

export default function Project({
  imageUrl,
  name,
  description,
  technologies,
  projectUrl,
  codeUrl,
}: ProjectProps) {
  return (
    <div>
      <img className={styles.projectImage} src={imageUrl} alt="To-do App" />
      <h3 className={styles.projectName}>{name}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <ul className={styles.technologies}>
        {technologies.map(technology => (
          <li key={technology} className={styles.technology}>
            {technology}
          </li>
        ))}
      </ul>
      <div className={styles.buttons}>
        <a className={styles.seeProject} href={projectUrl}>
          See project
          <span className={styles.buttonIcon}>
            <Icon icon="web" />
          </span>
        </a>
        <a className={styles.seeCode} href={codeUrl}>
          See code
          <span className={styles.buttonIcon}>
            <Icon icon="github" />
          </span>
        </a>
      </div>
    </div>
  );
}
