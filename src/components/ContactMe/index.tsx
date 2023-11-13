import { Icon } from "..";
import styles from "./ContactMe.module.css";

export default function ContactMe() {
  return (
    <section className={styles.contactMe}>
      <h2 className={styles.heading}>Contact me 📧</h2>
      <p className={styles.description}>
        Connect with me and let's create something extraordinary together.
      </p>
      <form className={styles.form}>
        <label className={styles.label}>
          <span className={styles.icon}>
            <Icon icon="user" />
          </span>
          <input
            className={styles.input}
            type="text"
            placeholder="Name"
            name="name"
          />
        </label>
        <label className={styles.label}>
          <span className={styles.icon}>
            <Icon icon="email" />
          </span>
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            name="email"
          />
        </label>
        <label className={styles.label}>
          <span className={styles.icon}>
            <Icon icon="message" />
          </span>
          <textarea rows={3} className={styles.input} placeholder="Message" />
        </label>
        <button className={styles.send} type="submit">
          Send
          <Icon icon="send" />
        </button>
      </form>
    </section>
  );
}
