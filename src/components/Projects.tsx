
import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaAngular, 
  FaJava, 
  FaLaravel,
  FaBootstrap,
  FaGithub,
  FaUnity
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiMysql, 
  SiFirebase, 
  SiRedux, 
  SiThreedotjs,
  SiFramer,
  SiTailwindcss,
  SiTypescript,
  SiVsco,
  SiFlutter,
  SiSpring,
  SiXml,
  SiSharp
} from 'react-icons/si';

// Tech icon mapping
const techIcons: { [key: string]: JSX.Element } = {
  'React': <FaReact className="text-[#61DAFB]" />,
  'Three.js': <SiThreedotjs className="text-white" />,
  'Framer Motion': <SiFramer className="text-[#BB4B96]" />,
  'Tailwind CSS': <SiTailwindcss className="text-[#38B2AC]" />,
  'Node.js': <FaNodeJs className="text-[#339933]" />,
  'MongoDB': <SiMongodb className="text-[#47A248]" />,
  'Express': <SiExpress className="text-white" />,
  'HTML': <FaHtml5 className="text-[#E34F26]" />,
  'CSS': <FaCss3Alt className="text-[#1572B6]" />,
  'JavaScript': <FaJs className="text-[#F7DF1E]" />,
  'Laravel': <FaLaravel className="text-[#FF2D20]" />,
  'MySQL': <SiMysql className="text-[#4479A1]" />,
  'Bootstrap': <FaBootstrap className="text-[#7952B3]" />,
  'Angular': <FaAngular className="text-[#DD0031]" />,
  'Firebase': <SiFirebase className="text-[#FFCA28]" />,
  'Redux': <SiRedux className="text-[#764ABC]" />,
  'Java': <FaJava className="text-[#007396]" />,
  'TypeScript': <SiTypescript className="text-[#3178C6]" />,
  'Vscode': <SiVsco className="text-[#007ACC]" />,
  'Flutter': <SiFlutter className="text-[#02569B]" />,
  'Spring Boot': <SiSpring className="text-[#6DB33F]" />,
  'XML': <SiXml className="text-[#F16529]" />,
  'C#': <SiSharp className="text-[#239120]" />,
  'Unity': <FaUnity className="text-[#000000]" />
};

const projects = [
  {
    title: "Web Projects",
    items: [
      {
        title: "Portfolio Website",
        description: "A modern portfolio website built with React and Three.js, featuring 3D animations, interactive elements, and a responsive design.",
        image: "/project/portfolio.png",
        tags: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
        link: '#',
        featured: true,
        github: 'https://github.com/HayderLabidi/My_Portfolio.git'
      },
      {
        title: "Blacklisted Traders Academy",
        description: "An educational platform for traders offering courses, market analysis, and real-time trading insights. Features user authentication and interactive learning modules.",
        image: "/project/blacklisted.png",
        tags: ['React', 'Node.js', 'MongoDB', 'Express'],
        link: 'https://blacklistedtraders.netlify.app/',
        featured: true,
        github: 'https://github.com/HayderLabidi/blacklisted-academy.git'
      },
      {
        title: "Jumanji Adventure Game",
        description: "An immersive web-based adventure game inspired by Jumanji, featuring interactive gameplay, custom animations, and sound effects.",
        image: "/project/jumanji.png",
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://hayderlabidi.github.io/JUMANJI/project.html',
        featured: true,
        github: 'https://github.com/HayderLabidi/JUMANJI.git'
      },
      {
        title: "Library Management System",
        description: "A full-stack library management solution with features for book tracking, user management, lending system, and automated notifications.",
        image: "/project/laravel_library2.png",
        tags: ['Laravel', 'MySQL', 'Bootstrap'],
        link: 'https://github.com/HayderLabidi/libraray_managment.git',
        featured: true,
        github: 'https://github.com/HayderLabidi/libraray_managment.git'
      },
      {
        title: "Ride Share Platform",
        description: "A full-stack carpooling application with real-time tracking, booking system, and secure payment integration. Supports both drivers and passengers.",
        image: "/project/rideshare.png",
        tags: ['React', 'Node.js', 'Express', 'MongoDB'],
        link: 'https://couvoiturage-hayder-jacer.netlify.app/',
        featured: true,
        github: 'https://github.com/HayderLabidi/traveler-hub-platform.git'
      },
      {
        title: "YouTOP",
        description: "A YouTube-inspired video platform with features like user authentication, video upload, commenting system, and personalized recommendations.",
        image: "/project/yotop.png",
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://hayderlabidi.github.io/My.second.page/Art.html',
        featured: true,
        github: 'https://github.com/HayderLabidi/My.second.page.git'
      },
      {
        title: "Tic Tac Toe Game",
        description: "A modern take on the classic game featuring AI opponent, multiplayer mode, and win tracking system.",
        image: "/project/tic_tac_to.png",
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://hayderlabidi.github.io/TIC-TAC-TO/',
        featured: true,
        github: 'https://github.com/HayderLabidi/TIC-TAC-TO.git'
      },
      {
        title: "Calculator App",
        description: "An advanced calculator application with scientific functions, history tracking, and theme customization options.",
        image: "/project/calculator.png",
        tags: ['JavaScript', 'HTML', 'CSS'],
        link: 'https://hayderlabidi.github.io/Hayder_Calculator/claculator.html',
        featured: true,
        github: 'https://github.com/HayderLabidi/Hayder_Calculator.git'
      },
      {
        title: "Digital Agency Platform",
        description: "A professional platform for a digital agency specializing in web and mobile app development, UI/UX design, and branding solutions. Features project showcases, service offerings, client collaboration tools, and an interactive design process workflow. Built with Angular and integrated with a robust backend system.",
        image: "/project/HUD.png",
        tags: ['Angular', 'MySQL', 'Bootstrap'],
        link: 'https://github.com/HayderLabidi/MDW22.git',
        featured: true,
        github: 'https://github.com/HayderLabidi/MDW22.git'
      }
    ]
  },
  {
    title: "Mobile Applications",
    items: [
      {
        title: "Travel Explorer App",
        description: "A comprehensive travel application built with Flutter and Spring Boot, featuring destination discovery, trip planning, real-time updates, and offline support. Implements clean architecture with REST API integration.",
        image: "/project/travel.png",
        tags: ['Flutter', 'Spring Boot', 'MySQL'],
        link: 'https://github.com/HayderLabidi/Travel_app.git',
        featured: true,
        github: 'https://github.com/HayderLabidi/Travel_app.git'
      },
      {
        title: "Real-time Chat App",
        description: "A native Android messaging application with real-time communication, file sharing, and user presence indicators. Built using Java and XML for the UI, with Firebase backend integration.",
        image: "/project/chatapp.png",
        tags: ['Java', 'XML', 'Firebase'],
        link: 'https://github.com/HayderLabidi/Chat_app.git',
        featured: true,
        github: 'https://github.com/HayderLabidi/Chat_app.git'
      }
    ]
  },
  {
    title: "Desktop Applications & Games",
    items: [
      {
        title: "Island Adventure Game",
        description: "An immersive 3D adventure game developed with Unity and C#. Features dynamic environment interaction, custom character controllers, and physics-based puzzles. Implements advanced Unity features including particle systems, post-processing effects, and custom shaders.",
        image: "/project/island.png",
        tags: ['Unity', 'C#'],
        link: 'https://github.com/HayderLabidi/ile.git',
        featured: true,
        github: 'https://github.com/HayderLabidi/ile.git'
      },
      {
        title: "Student Management System",
        description: "A comprehensive desktop application for educational institutions with features for student enrollment, grade management, and attendance tracking. Built using Java with a modern UI and MySQL database integration.",
        image: "/project/student-management.png",
        tags: ['Java', 'MySQL'],
        link: 'https://github.com/HayderLabidi/student-management.git',
        featured: true,
        github: 'https://github.com/HayderLabidi/student-management.git'
      }
    ]
  }
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">My Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated selection of my work across various technologies and platforms.
            Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {projects.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-20">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-primary"
            >
              {section.title}
            </motion.h3>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {section.items.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  techIcons={techIcons}
                  link={project.link}
                  github={project.github}
                  index={index}
                />
              ))}
            </div>
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/HayderLabidi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            View More on GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
