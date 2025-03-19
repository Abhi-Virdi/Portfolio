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
      "Designed:and maintained React.js applications, ensuring cross-browser compatibility and accessibility",
      "Implemented:Redux for state management, improving application scalability and maintainability",
      "Integrated: RESTful APIs and GraphQL for dynamic data handling and user authentication",
      " Managed: database interactions with PostgreSQL and MongoDB, optimizing queries for performance",
      "Collaborated: in an Agile environment, contributing to CI/CD pipelines and DevOps practices",
    ],
  },
  {
    title: "React Developer Trainee",
    company_name: "Technocolab Software",
    icon: tech,
    iconBg: "#E6DEDD",
    date: "May 2022 - September 2022",
    points: [
      "Designed modular and reusable front-end components using React.js, enhancing user experience with UI/UX optimizations",
      "Implemented:RESTful APIs and optimized front-end performance with modern tools like Webpack and Babel",
      "Developed: UI/UX for an e-commerce platform, improving user engagement and accessibility compliance",
      "Collaborated with backend teams for seamless platform services integration, ensuring scalable architecture",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Sparks Foundation",
    icon: sparks,
    iconBg: "#383E56",
    date: "Oct 2021 - Dec 2021",
    points: [
      " Engineered: dynamic UI components with React.js and JavaScript, enhancing user engagement through intuitive UX design",
      "Worked: on backend APIs and database integration using SQL and JSON.",
      "Productivity Boost: Highlighted creating a JavaScript automation script that improved productivity, demonstrating problem solving and innovation",
      "Collaboration and Agile Practices: Mentioning participation in Agile Scrum ceremonies emphasizes teamwork and agile expirence ",
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
