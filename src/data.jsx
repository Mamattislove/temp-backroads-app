import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const navlinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  { id: 1, value: "saving money", icon: "fas fa-wallet fa-fw" },
  { id: 2, value: "endless hiking", icon: "fas fa-tree fa-fw" },
  { id: 3, value: "amazing comfort", icon: "fas fa-socks fa-fw" },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "August 26th, 2023",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis",
    location: "China",
    day: 6,
    price: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "October 1th, 2023",
    title: "Best Of Java",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Indonesia",
    day: 11,
    price: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "September 15th, 2023",
    title: "Explore Hong Kong",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Hong Kong",
    day: 8,
    price: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "December 5th, 2023",
    title: "Kenya Highlights",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Kenya",
    day: 20,
    price: 3300,
  },
];
