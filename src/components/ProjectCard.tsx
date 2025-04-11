
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { AspectRatio } from "./ui/aspect-ratio";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  techIcons: { [key: string]: JSX.Element };
  link: string;
  github?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  techIcons,
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
      className="group flex flex-col bg-card rounded-xl overflow-hidden shadow-lg hover-glow" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with fixed aspect ratio */}
      <div className="relative w-full overflow-hidden">
        <AspectRatio ratio={16/9}>
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center"
            loading="lazy"
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          />
        </AspectRatio>
      </div>

      {/* Content Container below the image */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-1">
          {title}
        </h3>

        {/* Project Description */}
        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {tags.map((tag, i) => (
            <motion.span
              key={i}
              className="px-2.5 py-1 text-xs font-medium rounded-full 
                      bg-primary/10 text-primary border border-primary/20
                      flex items-center gap-1.5"
              initial={{ scale: 1 }}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.2, delay: i * 0.03 }}
            >
              {techIcons[tag] && (
                <span className="text-base">
                  {techIcons[tag]}
                </span>
              )}
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 mt-2">
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
                      border border-primary/30 hover:border-primary/60
                      text-primary backdrop-blur-sm shadow-md
                      transition-all duration-300 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Code
              <Github size={14} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
