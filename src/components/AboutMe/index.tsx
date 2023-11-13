import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <section id="about-me" className={styles.aboutMe}>
      <h2 className={styles.heading}>About Me 👨</h2>
      <p className={styles.content}>
        Passionate web programmer from the vibrant landscapes of El Salvador.
        From crafting elegant solutions to tackling complex challenges, I bring
        a unique blend of creativity and technical expertise to every project.
      </p>
      <p className={styles.content}>
        Let's turn ideas into reality through the power of code!
      </p>
      <p className={styles.content}>
        Beyond coding, you'll find me exploring new technologies, staying
        updated on industry trends, and practicing running during my free time.
      </p>
    </section>
  );
}
