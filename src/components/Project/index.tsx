import { Icon } from "..";
import { availableTechnologies } from "../../constants";
import styles from "./Project.module.css";

type ProjectProps = {
  imageUrl: string;
  name: string;
  description: string;
  technologies: (keyof typeof availableTechnologies)[];
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
  const technologiesInfo = technologies.map(
    technology => availableTechnologies[technology]
  );

  return (
    <div>
      <img className={styles.projectImage} src={imageUrl} alt="To-do App" />
      <h3 className={styles.projectName}>{name}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <ul className={styles.technologies}>
        {technologiesInfo.map(technology => (
          <li key={technology.name} className={styles.technology}>
            <span className={styles.icon}>
              <Icon icon={technology.iconName} />
            </span>
            {technology.name}
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
