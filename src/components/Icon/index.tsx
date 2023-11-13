import ArrowDownIcon from "./ArrowDownIcon";
import CSSIcon from "./CSSIcon";
import GithubIcon from "./GithubIcon";
import HTMLIcon from "./HTMLIcon";
import JavascriptIcon from "./JavascriptIcon";
import LogoIcon from "./LogoIcon";
import MenuIcon from "./MenuIcon";
import NodeJSIcon from "./NodeJSIcon";
import ReactIcon from "./ReactIcon";
import WebIcon from "./WebIcon";

type IconProps = {
  icon:
    | "logo"
    | "menu"
    | "arrowDown"
    | "web"
    | "github"
    | "javascript"
    | "html"
    | "css"
    | "nodeJS"
    | "react";
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
    case "javascript":
      return <JavascriptIcon />;
    case "html":
      return <HTMLIcon />;
    case "css":
      return <CSSIcon />;
    case "nodeJS":
      return <NodeJSIcon />;
    case "react":
      return <ReactIcon />;
  }
}
