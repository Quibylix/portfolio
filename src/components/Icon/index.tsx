import ArrowDownIcon from "./ArrowDownIcon";
import CSSIcon from "./CSSIcon";
import ContactIcon from "./ContactIcon";
import EmailIcon from "./EmailIcon";
import GithubIcon from "./GithubIcon";
import HTMLIcon from "./HTMLIcon";
import HomeIcon from "./HomeIcon";
import InfoIcon from "./InfoIcon";
import JavascriptIcon from "./JavascriptIcon";
import LogoIcon from "./LogoIcon";
import MenuIcon from "./MenuIcon";
import MessageIcon from "./MessageIcon";
import NodeJSIcon from "./NodeJSIcon";
import ProjectIcon from "./ProjectIcon";
import ReactIcon from "./ReactIcon";
import SendIcon from "./SendIcon";
import UserIcon from "./UserIcon";
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
    | "react"
    | "user"
    | "email"
    | "message"
    | "send"
    | "home"
    | "info"
    | "project"
    | "contact";
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
    case "user":
      return <UserIcon />;
    case "email":
      return <EmailIcon />;
    case "message":
      return <MessageIcon />;
    case "send":
      return <SendIcon />;
    case "home":
      return <HomeIcon />;
    case "info":
      return <InfoIcon />;
    case "project":
      return <ProjectIcon />;
    case "contact":
      return <ContactIcon />;
  }
}
