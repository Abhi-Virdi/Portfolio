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
    title: "Software Engineer",
    company_name: "TELUS Digital",
    icon: telus,
    iconBg: "#383E56",
    date: "April 2024 - November 2024",
    points: [
      "Learn: to Monitored application and infrastructure logs to detect anomalies; collaborated on incident response reviews and reported findings using internal ticketing tools",
      "Built: secure and responsive UIs using React.js and Canvas API; followed accessibility (WCAG 2.1) and security best practices.",
      "Automated: deployments with GitHub Actions and participated in secure CI/CD pipeline design.",
      "Worked: in Agile teams, participated in sprint ceremonies, incident reviews, and maintained technical documentation"
    ],
  },
  {
    title: "React Developer Trainee",
    company_name: "Technocolab Software",
    icon: tech,
    iconBg: "#E6DEDD",
    date: "May 2022 - September 2022",
    points: [
      " Created features with React.js and Node.js; followed principles of secure coding.",
      "Integrated: and maintained web services on Apache; documented API endpoints and logs for traceability.",
      "Created : dynamic UI components from Figma and deployed using Apache",
      "Collaborated: across Agile teams, participated in sprint ceremonies, and contributed to feature planning and delivery"
    ],
  },
  {
    title: "Software Developer",
    company_name: "Sparks Foundation",
    icon: sparks,
    iconBg: "#383E56",
    date: "Oct 2021 - Dec 2021",
    points: [
      " Developed: web applications using Node.js/Express.js in MVC architecture with OOP principles.",
      "Supported: code refactoring efforts to improve maintainability and resilience.",
      "Worked: in Agile environment to enhance application performance and maintain scalability",       
      "participated: in code reviews, unit testing, and threat modeling exer cises."
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
