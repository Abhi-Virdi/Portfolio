
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
      title: "Frontend Developer",
      company_name: "Telus International",
      icon: telus,
      iconBg: "#383E56",
      date: "April 2024 - Currently",
      points: [
        "Developed multiple JavaScript APIs to fetch data and implemented new UI features for a music app, enhancing user interaction and app functionality..",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implemented RESTful APIs : to facilitate seamless data exchange between the front end and back end, ensuring efficient data retrieval and enhancing user experience with responsive, dynamic content",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Developer",
      company_name: "Technocolab Software",
      icon: tech,
      iconBg: "#E6DEDD",
      date: "May 2022 - September 2022",
      points: [
        "Learn to Optimized the front-end performance and reduced page load time by 25% by coding components in React",
        "Set up a static website, configured custom domains, and managed bucket policies",
        "Designed and managed relational databases : using SQL, executing complex queries to retrieve and manipulate data.",
        "Write the test cases for the developed code for code coverage",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Sparks Foundation",
      icon: sparks,
      iconBg: "#383E56",
      date: "Oct 2021 - Dec 2021",
      points: [
        "Worked, on a web application project, Improved UI performance by identifying bottlenecks, leveraging Technologies like Context API and React Hooks and object-oriented design principles",
        "Delivered an average of 80% bug-free code",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Created a JavaScript script : to automate dynamic data fetching and state management, leveraging React.js principles to enhance component interaction",
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
  