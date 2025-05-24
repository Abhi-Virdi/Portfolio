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
  inventory,
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
    title: "Frontend Developer",
    company_name: "TELUS Digital",
    icon: telus,
    iconBg: "#383E56",
    date: "April 2024 - January 2025",
    points: [
      "Built:accessible, responsive UI components using React, TypeScript, and Tailwind CSS for a large-scale SaaS platform",
      " Enhanced: frontend performance using Lighthouse audits and WCAG standards",
      " Participated: in QA testing using Cypress and Jest in a TDD environment",
      " Integrated: frontend with microservices and optimized API usage for scalable architecture",
      " Participated: in Agile ceremonies and collaborated with DevOps on CI/CD deployment pipelines",
    ],
  },
  {
    title: "React Developer Trainee",
    company_name: "Technocolab Software",
    icon: tech,
    iconBg: "#E6DEDD",
    date: "May 2022 - September 2022",
    points: [
      " Design and integrated RESTful APIs with React and Node.js, ensuring seamless client-server interaction",
      "Contributed: to system design meetings to evaluate architecture decisions and software scalability",
      "Worked: on secure access controls using JWT and middleware logic",
      "Wrote: unit tests for frontend and backend modules using Jest and Postman",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Sparks Foundation",
    icon: sparks,
    iconBg: "#383E56",
    date: "Oct 2021 - Dec 2021",
    points: [
      " Built: interactive UI components using React, achieved over 90% test coverage using TDD",
      " Contributed:in UX analysis and QA cycles for product improvement",
      " Implemented: secure frontend components and assisted in DevOps deployment script",
      "participated: in code reviews, unit testing, and threat modeling exer cises.",
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
    name: "Inventory Management System:",
    description:
      " Built a role-based secure portal using .NET MVC and C#, with authentication via JWT. Deployed on AWS EC2 with S3 for encrypted file storage and Lambda for automated backups. Implemented access control and audit logging mechanisms for admin actions.",
    tags: [
      {
        name: ".NET",
        color: "blue-text-gradient",
      },
      {
        name: "MVC",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
    ],
    image: inventory,
    source_code_link: " ",
  },
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
      "Created a responsive, filterable map UI with React.js and Tailwind CSS.Followed WCAG 2.1 compliance and SEO best practices",
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
      " Developed a social networking frontend using React, Firebase, and animation libraries. Implemented real time data sync and responsive, mobile-first UI.",
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
