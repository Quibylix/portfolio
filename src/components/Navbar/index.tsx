import { useEffect, useRef, useState } from "react";
import { classes } from "../../utils";
import Icon from "../Icon";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    if (!isMenuOpen) return;

    function closeMenu(e: MouseEvent) {
      // If the menu button is clicked, then the window event closes the menu
      // and the menu button event opens it again, so we need to prevent that
      // from happening.
      if (menuButton.current?.contains(e.target as Node)) return;

      setIsMenuOpen(false);
    }

    window.addEventListener("click", closeMenu, true);

    return () => {
      window.removeEventListener("click", closeMenu, true);
    };
  }, [isMenuOpen]);

  return (
    <nav className={styles.navbar}>
      <a href="#" className={styles.logo}>
        <Icon icon="logo" />
      </a>
      <button ref={menuButton} onClick={toggleMenu} className={styles.menu}>
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
