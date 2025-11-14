
import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  jobit,
  movies,
  expense
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: web,
  },
  
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Full Stack Development",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
 
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  {
    name: "git",
    icon: git,
  },
  
];



const projects = [
  {
    name: "Expense Tracker",
    description:
      "Track income & expenses with a secure, responsive app. Built with React, Node.js & MongoDB. Features JWT auth, analytics, file upload & Excel import/export.",
    tags: [
      {
        name: "MERNStack",
        color: "blue-text-gradient",
      },
      {
        name: "FinanceApp",
        color: "green-text-gradient",
      },
      {
        name: "ReactJS",
        color: "pink-text-gradient",
      },
    ],
    image: expense,
    source_code_link: "https://github.com/ThemanishchauhanX2004/Expense-Tracker",
    demo_link: "https://expense-tracker-2-4584.onrender.com",
  },
  {
    name: "Movie App",
    description:
      "Discover trending movies & TV shows via TMDB API. Built with React & Tailwind CSS, featuring interactive UI, carousels & reusable components.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "MovieApp",
        color: "green-text-gradient",
      },
      {
        name: "APIDevelopment",
        color: "pink-text-gradient",
      },
    ],
    image: movies,
    source_code_link: "https://github.com/ThemanishchauhanX2004/Movie-App",
    demo_link: "https://movieapp-f43e.onrender.com",
  },
  {
    name: "E-Commerce Platform",
    description:
      "A full-stack e-commerce app featuring real-time stock tracking, secure checkout, user authentication, and an advanced admin panel. Tech: React, Node.js, MongoDB, JWT.",
    tags: [
      {
        name: "ECommerce",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "FullStack",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ThemanishchauhanX2004/E-COM",
    demo_link: "https://e-commerce-2-tsla.onrender.com",
  },
];

export { services, technologies , projects };
