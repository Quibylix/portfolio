import ArrowDownIcon from "./ArrowDownIcon";
import LogoIcon from "./LogoIcon";
import MenuIcon from "./MenuIcon";

type IconProps = {
  icon: "logo" | "menu" | "arrowDown";
};

export default function Icon({ icon }: IconProps) {
  switch (icon) {
    case "logo":
      return <LogoIcon />;
    case "menu":
      return <MenuIcon />;
    case "arrowDown":
      return <ArrowDownIcon />;
  }
}
