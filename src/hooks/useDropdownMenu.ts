import { useEffect, useRef, useState } from "react";

export default function useDropdownMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animateMenu, setAnimateMenu] = useState<"open" | "close" | "">("");
  const menuButton = useRef<HTMLButtonElement>(null);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    setAnimateMenu(isMenuOpen ? "close" : "open");
  }

  useEffect(() => {
    if (!isMenuOpen) return;

    function closeMenu(e: MouseEvent) {
      // If the menu button is clicked, then the window event closes the menu
      // and the menu button event opens it again, so we need to prevent that
      // from happening.
      if (menuButton.current?.contains(e.target as Node)) return;

      setIsMenuOpen(!isMenuOpen);
      setAnimateMenu(isMenuOpen ? "close" : "open");
    }

    window.addEventListener("click", closeMenu, true);

    return () => {
      window.removeEventListener("click", closeMenu, true);
    };
  }, [isMenuOpen]);

  return { isMenuOpen, toggleMenu, menuButton, animateMenu };
}
