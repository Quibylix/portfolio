import { useDropdownMenu } from "../../hooks";
import { classes } from "../../utils";
import Icon from "../Icon";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { isMenuOpen, toggleMenu, menuButton, animateMenu } = useDropdownMenu();

  const dropdownMenuClass = classes(styles.dropdown, {
    [styles.dropdownOpen]: isMenuOpen,
    [styles.dropdownClosing]: animateMenu === "close",
    [styles.dropdownOpening]: animateMenu === "open",
  });

  return (
    <nav className={styles.navbar}>
      <a href="#" className={styles.logo}>
        <Icon icon="logo" />
      </a>
      <button ref={menuButton} onClick={toggleMenu} className={styles.menu}>
        <Icon icon="menu" />
      </button>
      <ul className={dropdownMenuClass}>
        <li>
          <a className={styles.link} href="#">
            Home
            <Icon icon="home" />
          </a>
        </li>
        <li>
          <a className={styles.link} href="#about-me">
            About me
            <Icon icon="info" />
          </a>
        </li>
        <li>
          <a className={styles.link} href="#my-projects">
            My projects
            <Icon icon="project" />
          </a>
        </li>
        <li>
          <a className={styles.link} href="#contact-me">
            Contact me
            <Icon icon="contact" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
