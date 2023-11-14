import { Icon } from "..";
import styles from "./ContactMe.module.css";

export default function ContactMe() {
  return (
    <section id="contact-me" className={styles.contactMe}>
      <h2 className={styles.heading}>Contact me 📧</h2>
      <p className={styles.description}>
        Connect with me and let's create something extraordinary together.
      </p>
      <form
        action="https://formsubmit.co/4bccf8a6f9ed9d61fe7eca9875844bbf"
        method="POST"
        className={styles.form}
      >
        <label className={styles.label}>
          <input
            className={styles.input}
            required
            pattern="^(?!\s*$).+"
            type="text"
            placeholder="Name"
            name="name"
          />
          <span className={styles.icon}>
            <Icon icon="user" />
          </span>
        </label>
        <label className={styles.label}>
          <input
            className={styles.input}
            pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
            type="email"
            placeholder="Email"
            name="email"
          />
          <span className={styles.icon}>
            <Icon icon="email" />
          </span>
        </label>
        <label className={styles.label}>
          <textarea
            rows={3}
            required
            className={styles.input}
            placeholder="Message"
            name="message"
          />
          <span className={styles.icon}>
            <Icon icon="message" />
          </span>
        </label>
        <button className={styles.send} type="submit">
          Send
          <Icon icon="send" />
        </button>
      </form>
    </section>
  );
}
