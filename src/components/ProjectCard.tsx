
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
  index
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="glass-card rounded-xl overflow-hidden w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)]"
    >
      <div className="h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-primary/20 text-xs rounded-full px-2 py-1 text-primary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline text-sm flex items-center justify-center gap-2"
        >
          View Project <ExternalLink size={16} />
        </a>
      </div>
    </motion.div>
  );
}
