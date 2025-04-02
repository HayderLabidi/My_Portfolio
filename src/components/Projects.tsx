
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A 3D portfolio website built with React Three Fiber and Framer Motion',
    image: 'https://images.unsplash.com/photo-1618609255910-c670df13dff0?q=80&w=1000',
    tags: ['React', 'Three.js', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with complete cart and checkout functionality',
    image: 'https://images.unsplash.com/photo-1523228461265-1758e97d9e6f?q=80&w=1000',
    tags: ['React', 'Redux', 'Stripe'],
    link: '#',
  },
  {
    title: '3D Product Visualizer',
    description: 'Interactive 3D product visualizer with customization options',
    image: 'https://images.unsplash.com/photo-1581094377592-94971fca4ec8?q=80&w=1000',
    tags: ['Three.js', 'GSAP', 'WebGL'],
    link: '#',
  },
  {
    title: 'Weather App',
    description: 'Real-time weather application with beautiful visualizations',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000',
    tags: ['React', 'API', 'Chart.js'],
    link: '#',
  },
  {
    title: 'Mobile Game',
    description: 'A casual mobile game built with React Native and Expo',
    image: 'https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?q=80&w=1000',
    tags: ['React Native', 'Expo', 'Game Dev'],
    link: '#',
  },
  {
    title: 'Dashboard UI',
    description: 'An analytics dashboard with interactive data visualization',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1000',
    tags: ['React', 'D3.js', 'Tailwind CSS'],
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
            A collection of my recent work. Each project represents a unique challenge and solution.
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
