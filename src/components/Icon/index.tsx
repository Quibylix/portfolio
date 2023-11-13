import ArrowDownIcon from "./ArrowDownIcon";
import GithubIcon from "./GithubIcon";
import LogoIcon from "./LogoIcon";
import MenuIcon from "./MenuIcon";
import WebIcon from "./WebIcon";

type IconProps = {
  icon: "logo" | "menu" | "arrowDown" | "web" | "github";
};

export default function Icon({ icon }: IconProps) {
  switch (icon) {
    case "logo":
      return <LogoIcon />;
    case "menu":
      return <MenuIcon />;
    case "arrowDown":
      return <ArrowDownIcon />;
    case "web":
      return <WebIcon />;
    case "github":
      return <GithubIcon />;
  }
}
