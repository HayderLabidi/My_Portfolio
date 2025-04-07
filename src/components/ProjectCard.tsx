
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
  github,
  index
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="group relative w-full aspect-[4/3]" // Fixed aspect ratio
    >
      <div className="absolute inset-0 rounded-xl overflow-hidden bg-card">
        {/* Background Image Container */}
        <div className="relative w-full h-full">
          {/* Image with consistent sizing */}
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-8px]">
          {/* Project Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-1">
            {title}
          </h3>

          {/* Project Description */}
          <p className="text-gray-200 text-sm mb-4 line-clamp-2 leading-relaxed">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 text-xs font-medium rounded-full 
                         bg-primary/20 text-primary-foreground 
                         border border-primary/20 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                       bg-primary text-white hover:bg-primary/90
                       transition-all duration-300 text-sm"
            >
              Live Demo
              <ExternalLink size={14} />
            </a>
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                         border border-white/20 hover:border-white/40
                         text-white backdrop-blur-sm
                         transition-all duration-300 text-sm"
              >
                Code
                <Github size={14} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Glass Effect Border */}
      <div className="absolute inset-0 rounded-xl border border-white/10 pointer-events-none
                    backdrop-blur-sm opacity-0 group-hover:opacity-100
                    transition-opacity duration-300" />
    </motion.div>
  );
}
