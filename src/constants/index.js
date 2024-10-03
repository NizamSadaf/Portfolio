import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";

export const HERO_CONTENT = `I am a dedicated full stack developer with a passion for building robust and scalable web applications. With 3 years of experience, I've developed strong expertise in front-end technologies like React and Next.js, and back-end technologies such as Node.js, MySQL, PostgreSQL, and MongoDB. My aim is to utilize these skills to create innovative solutions that enhance business growth and deliver outstanding user experiences.`;

export const ABOUT_TEXT = `I am an enthusiastic full stack developer with a passion for crafting intuitive and high-performing web applications. Over the past 3 years, I’ve immersed myself in a diverse tech stack, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB, to create seamless user experiences. My journey began with a fascination for the mechanics behind digital interfaces, which has transformed into a dedicated career of innovation and problem-solving. I thrive in collaborative environments, where I can combine my technical skills with creative thinking to tackle challenges and deliver exceptional results. Outside of development, I enjoy staying active, diving into the latest tech trends, and contributing to open-source projects, all while continually expanding my horizons in the world of technolog`;

export const EXPERIENCES = [
  {
    year: "2022 - 2024",
    role: "Senior Full Stack Developer",
    company: "QUadque.",
    description: `Led a team in building and maintaining web applications using JavaScript, React, and Node.js. Developed RESTful APIs and integrated MongoDB for data management. Worked closely with stakeholders to gather requirements and ensure project timelines were met. Delivered high-quality applications in line with business objectives.`,
    technologies: ["Node.js", "React.js", "Next.js", "mongoDB","Express,js"],
  },
  {
    year: "2021 - 2022",
    role: "UI/UX Designer",
    company: "ITEC",
    description: "As a UI/UX designer, I created website designs using Figma and translated them into fully functional user interfaces with HTML, Tailwind CSS, and React, ensuring a seamless and intuitive user experience",
    technologies: ["HTML", "Tailwind CSS", "React.js", "Figma"],
  },
];

export const PROJECTS = [
  {
    title: "Medicare",
    image: project1,
    link:"https://nizam-doctor-appointment-app.netlify.app/",
    description:
      "I developed a fully functional doctor appointment website where patients can book appointments, view doctors' availability, and access detailed doctor profiles",
    technologies: ["HTML", "Tailwind CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Travel Booking",
    image: project2,
    link:"https://nizam-travel-booking.netlify.app/home",
    description:
      "a travel booking application where users can book their destinations, leave reviews, and explore various locations",
    technologies: ["HTML", "Tailwind CSS", "Node.js", "Vercel","Mongo DB"],
  },
];

export const CONTACT = {
  address: "Rehtorinpellonkatu 4 A, 20500 Turku, Finland",
  phoneNo: "+358 44 935 2304 ",
  email: "nizamsadaf1460@gmail.com",
};
