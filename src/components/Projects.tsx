
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Traveler's Connection App",
    description: "A social app for travelers to connect, share stories, and explore destinations. Built during internship at Bee Coders.",
    image: "public/project/travel.png", // Update with your actual image name
    tags: ['Flutter', 'SpringBoot', 'MySQL', 'Vscode'],
    link: 'https://blacklistedtraders.netlify.app/',
  },
  {
    title: "HAD Startup Platform",
    description: "A website for a startup specializing in digital development and graphic design. Developed during a hackathon.",
    image: "/projects/had-startup.png", // Update with your actual image name
    tags: ['Angular', 'NodeJs', 'MySQL', 'Vscode'],
    link: 'https://couvoiturage-hayder-jacer.netlify.app/',
  },
  {
    title: "Student Management Application",
    description: "A desktop application for managing students and teachers with useful queries.",
    image: "/projects/student-management.png", // Update with your actual image name
    tags: ['Netbeans', 'Java', 'MySQL'],
    link: 'https://hayderlabidi.github.io/JUMANJI/project.html',
  },
  {
    title: "YouTOP Video Platform",
    description: "An innovative video-sharing platform allowing user engagement.",
    image: "/projects/youtop.png", // Update with your actual image name
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://hayderlabidi.github.io/My.second.page/Art.html',
  },
  {
    title: "TIK TAK TO Game",
    description: "An interactive Tic-Tac-Toe game with engaging user interface.",
    image: "/projects/tictactoe.png", // Update with your actual image name
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://hayderlabidi.github.io/TIC-TAC-TO/',
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
