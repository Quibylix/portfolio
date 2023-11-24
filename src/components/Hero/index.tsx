import { Icon } from "..";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <img
        className={styles.me}
        src="https://gravatar.com/avatar/00000000000000000000000000000000?size=200"
        alt="Me"
      />
      <div>
        <h1>
          <span className={styles.hi}>Hi 👋, I'm</span>
          <span className={styles.name}>Fredi Barraza</span>
          <span className={styles.role}>Web Developer 💻</span>
        </h1>
        <a href="#my-projects" className={styles.seeMyWork}>
          See my work
          <span className={styles.arrow}>
            <Icon icon="arrowDown" />
          </span>
        </a>
      </div>
    </div>
  );
}
