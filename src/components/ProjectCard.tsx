
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { AspectRatio } from "./ui/aspect-ratio";

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
      className="group relative w-full rounded-xl overflow-hidden shadow-lg" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container with fixed aspect ratio */}
      <div className="relative w-full h-full">
        {/* AspectRatio helps maintain consistent card sizes */}
        <AspectRatio ratio={4/3} className="bg-card">
          {/* Background Image Container */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Image with improved sizing */}
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center"
              loading="lazy"
              initial={{ scale: 1 }}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
            />
            {/* Enhanced Gradient Overlay for better text contrast */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30"
              animate={{ 
                opacity: isHovered ? 0.95 : 0.9
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Content Container with improved typography */}
          <motion.div
            className="absolute inset-0 p-6 flex flex-col justify-end z-10"
            initial={{ y: 0 }}
            animate={{ y: isHovered ? -8 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Project Title with improved contrast and size */}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-1 text-shadow-sm">
              {title}
            </h3>

            {/* Project Description with better readability */}
            <p className="text-gray-100 text-sm md:text-base mb-4 line-clamp-2 leading-relaxed font-medium">
              {description}
            </p>

            {/* Tags with improved visibility */}
            <motion.div 
              className="flex flex-wrap gap-2 mb-4"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: isHovered ? 1 : 0.8 }}
            >
              {tags.map((tag, i) => (
                <motion.span
                  key={i}
                  className="px-2.5 py-0.5 text-xs font-medium rounded-full 
                           bg-primary/30 text-white border border-primary/30 
                           backdrop-blur-sm shadow-sm"
                  initial={{ scale: 1 }}
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.2, delay: i * 0.03 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Action Buttons with improved visibility */}
            <div className="flex items-center gap-2">
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                         bg-primary text-white hover:bg-primary/90
                         transition-all duration-300 text-sm font-medium shadow-md"
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
                           border border-white/30 hover:border-white/60
                           text-white backdrop-blur-sm shadow-md
                           transition-all duration-300 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Code
                  <Github size={14} />
                </motion.a>
              )}
            </div>
          </motion.div>
        </AspectRatio>
      </div>

      {/* Enhanced Glass Effect Border */}
      <motion.div 
        className="absolute inset-0 rounded-xl border border-white/20 pointer-events-none backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
