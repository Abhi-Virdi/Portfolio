import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  telus,
  download,
  tripguide,
  threejs,
  link,
  carrent,
  sparks,
  tech,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Reactjs Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer Trainee",
    company_name: "Telus International",
    icon: telus,
    iconBg: "#383E56",
    date: "April 2024 - October2024",
    points: [
      "Developed: cross-browser compatible web interfaces using HTML5, CSS3, JavaScript, and Canvas.",
      "Maintained:responsive UIs with smooth CSS animations and transitions aligned with creative storyboards.",
      "Integrated: jQuery and AJAX for dynamic ad components and UI interactivity.",
      "Implemented: accessibility and WCAG standards, boosting UX and engagement.",
      "Exported: assets from Figma and collaborated on animated ad campaigns and multimedia interfaces",
      "Used:MySQL and MongoDB for backend data handling",
      "Managed: workflow in Git and collaborated remotely via Agile sprints and code reviews.",
    ],
  },
  {
    title: "React Developer Trainee",
    company_name: "Technocolab Software",
    icon: tech,
    iconBg: "#E6DEDD",
    date: "May 2022 - September 2022",
    points: [
      "Built modular and reusable frontend components in React.js and JavaScript.",
      "Delivered:responsive and adaptive pages optimized for different devices and browser",
      "Used: Apache server for testing and deployment, ensuring compatibility and performance.",
      "Collaborated: with designers using Figma handoff, ensuring design-to-code accuracy.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Sparks Foundation",
    icon: sparks,
    iconBg: "#383E56",
    date: "Oct 2021 - Dec 2021",
    points: [
      " Developed: interactive UI components and animations using HTML, CSS, and JavaScript.",
      "Implemented: AJAX calls and handled backend data with MySQL and JSON.",
      "Created: automation scripts and improved developer productivity.",
      "Collaboration and Agile Practices: Mentioning participation in Agile Scrum ceremonies emphasizes teamwork and Agile experience,"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Amazone Clone",
    description:
      "Web-based platform that allows users to search, buy, and sell their products from various providers, providing a convenient and efficient solution for getting anything under one hood.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: download,
    source_code_link: "https://github.com/Abhi-Virdi/Amazon-Project",
  },
  {
    name: "Rentify",
    description:
      "Developed an interactive interface which allows users to search the hotels according to their preferred destination, date and number of people.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "NetConnect",
    description:
      "Developed a job hunting and networking platform using Next.js, JavaScript, Firebase, and CSS, connections between individuals for career opportunities and professional events. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: link,
    source_code_link: "https://github.com/Abhi-Virdi/Linkedln-clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
