import {
  faBreadSlice,
  faBurger,
  faCandyCane,
  faMartiniGlassCitrus,
  faMugHot,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const categoriesData = [
  {
    name: "Burgers",
    icon: <FontAwesomeIcon icon={faBurger} />,
    imageLink: "/burger.jpeg",
  },
  {
    name: "Coffees",
    icon: <FontAwesomeIcon icon={faMugHot} />,
    imageLink: "/coffee.png",
  },
  {
    name: "Sandwiches",
    icon: <FontAwesomeIcon icon={faBreadSlice} />,
    imageLink: "/sandwich.jpeg",
  },
  {
    name: "Pizzas",
    icon: <FontAwesomeIcon icon={faPizzaSlice} />,
    imageLink: "/pizza.jpg",
  },
  {
    name: "Juices",
    icon: <FontAwesomeIcon icon={faMartiniGlassCitrus} />,
    imageLink: "/juice.jpeg",
  },
  {
    name: "Dessets",
    icon: <FontAwesomeIcon icon={faCandyCane} />,
    imageLink: "/dessert.jpeg",
  },
];
