import { useState } from "react";
import { classes } from "../../utils";
import Icon from "../Icon";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className={styles.navbar}>
      <a href="#" className={styles.logo}>
        <Icon icon="logo" />
      </a>
      <button onClick={toggleMenu} className={styles.menu}>
        <Icon icon="menu" />
      </button>
      <ul
        className={classes(styles.dropdown, {
          [styles.dropdownOpen]: isMenuOpen,
        })}
      >
        <li>
          <a className={styles.link} href="#">
            Home
          </a>
        </li>
        <li>
          <a className={styles.link} href="#about-me">
            About me
          </a>
        </li>
        <li>
          <a className={styles.link} href="#my-projects">
            My projects
          </a>
        </li>
        <li>
          <a className={styles.link} href="#contact-me">
            Contact me
          </a>
        </li>
      </ul>
    </nav>
  );
}
