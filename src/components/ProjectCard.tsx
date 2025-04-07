
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative w-full aspect-[4/3]" // Fixed aspect ratio
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 rounded-xl overflow-hidden bg-card">
        {/* Background Image Container */}
        <div className="relative w-full h-full">
          {/* Image with consistent sizing */}
          <motion.img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          />
          {/* Gradient Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"
            animate={{ 
              opacity: isHovered ? 0.95 : 0.85
            }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content Container */}
        <motion.div
          className="absolute inset-0 p-6 flex flex-col justify-end"
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -8 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Project Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-1">
            {title}
          </h3>

          {/* Project Description */}
          <p className="text-gray-200 text-sm mb-4 line-clamp-2 leading-relaxed">
            {description}
          </p>

          {/* Tags */}
          <motion.div 
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0.8 }}
          >
            {tags.map((tag, i) => (
              <motion.span
                key={i}
                className="px-2.5 py-0.5 text-xs font-medium rounded-full 
                         bg-primary/20 text-primary-foreground 
                         border border-primary/20 backdrop-blur-sm"
                initial={{ scale: 1 }}
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.2, delay: i * 0.03 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                       bg-primary text-white hover:bg-primary/90
                       transition-all duration-300 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo
              <ExternalLink size={14} />
            </motion.a>
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                         border border-white/20 hover:border-white/40
                         text-white backdrop-blur-sm
                         transition-all duration-300 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Code
                <Github size={14} />
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Glass Effect Border */}
      <motion.div 
        className="absolute inset-0 rounded-xl border border-white/10 pointer-events-none backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
