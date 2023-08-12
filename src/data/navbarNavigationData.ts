import {
  faBlog,
  faBookOpenReader,
  faCircleInfo,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export const navbarNavigationData = [
  {
    navigateTo: "/menu",
    text: "Our Menu",
    icon: faBookOpenReader,
  },
  {
    navigateTo: "/blog",
    text: "Blog",
    icon: faBlog,
  },
  {
    navigateTo: "/about",
    text: "About Us",
    icon: faCircleInfo,
  },
  {
    navigateTo: "/contact",
    text: "Contact",
    icon: faPhone,
  },
];
