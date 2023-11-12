import Icon from "../Icon";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="#" className={styles.logo}>
        <Icon icon="logo" />
      </a>
      <button className={styles.menu}>
        <Icon icon="menu" />
      </button>
    </nav>
  );
}
