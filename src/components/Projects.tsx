
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Traveler's Connection App",
    description: "A social app for travelers to connect, share stories, and explore destinations. Built during internship at Bee Coders.",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1000",
    tags: ['Flutter', 'SpringBoot', 'MySQL', 'Vscode'],
    link: '#',
  },
  {
    title: "HAD Startup Platform",
    description: "A website for a startup specializing in digital development and graphic design. Developed during a hackathon.",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=1000",
    tags: ['Angular', 'NodeJs', 'MySQL', 'Vscode'],
    link: '#',
  },
  {
    title: "Student Management Application",
    description: "A desktop application for managing students and teachers with useful queries.",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1000",
    tags: ['Netbeans', 'Java', 'MySQL'],
    link: '#',
  },
  {
    title: "YouTOP Video Platform",
    description: "An innovative video-sharing platform allowing user engagement.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1000",
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
  },
  {
    title: "TIK TAK TO Game",
    description: "An interactive Tic-Tac-Toe game with engaging user interface.",
    image: "https://images.unsplash.com/photo-1616680213669-134d4ea32622?q=80&w=1000",
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
  },
  {
    title: "Portfolio Website",
    description: "A 3D interactive portfolio website showcasing my skills and projects.",
    image: "https://images.unsplash.com/photo-1618609255910-c670df13dff0?q=80&w=1000",
    tags: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A collection of my work across web, mobile, and desktop applications.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-8 justify-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
