import {
  faBlog,
  faBookOpenReader,
  faCircleInfo,
  faHome,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavbarNavigationDataProps {
  navigateTo: string,
  text: string
  icon: JSX.Element
}

export const navbarNavigationData: Array<NavbarNavigationDataProps> = [
  {
    navigateTo: "/",
    text: "Home",
    icon: <FontAwesomeIcon icon={faHome} />
  },
  {
    navigateTo: "/menu",
    text: "Our Menu",
    icon: <FontAwesomeIcon icon={faBookOpenReader} />,
  },
  {
    navigateTo: "/blog",
    text: "Blog",
    icon: <FontAwesomeIcon icon={faBlog} />,
  },
  {
    navigateTo: "/about",
    text: "About Us",
    icon: <FontAwesomeIcon icon={faCircleInfo} />,
  },
  {
    navigateTo: "/contact",
    text: "Contact",
    icon: <FontAwesomeIcon icon={faPhone} />,
  },
];
