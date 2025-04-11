
import { 
  Globe, 
  Code, 
  FileCode, 
  Database, 
  Server, 
  Layers, 
  Cpu, 
  Layout, 
  Smartphone, 
  Cloud,
  Square,
  TrendingUp,
  Briefcase,
  Users,
  Zap
} from "lucide-react";

interface IconMap {
  [key: string]: React.ComponentType<any>;
}

// Map technology names to icons
const iconMap: IconMap = {
  // Frontend
  React: FileCode,
  Angular: FileCode,
  Vue: FileCode,
  JavaScript: Code,
  TypeScript: Code,
  HTML: Layout,
  CSS: Layout,
  Bootstrap: Layout,
  "Tailwind CSS": Layout,
  
  // Backend
  Node: Server,
  "Node.js": Server,
  NodeJs: Server,
  Express: Server,
  Laravel: Server,
  PHP: Server,
  Java: Server,
  Python: Server,
  
  // Database
  MongoDB: Database,
  MySQL: Database,
  Firebase: Database,
  
  // Mobile
  Android: Smartphone,
  iOS: Smartphone,
  Flutter: Smartphone,
  "React Native": Smartphone,
  
  // DevOps & Cloud
  AWS: Cloud,
  Azure: Cloud,
  Docker: Cloud,
  Kubernetes: Cloud,
  
  // Tools & Others
  Git: Code,
  GitHub: Code,
  GitLab: Code,
  Redux: Layers,
  Vscode: Code,
  Netbeans: Code,
  "Three.js": Cpu,
  Three: Cpu,
  "Framer Motion": TrendingUp
};

export function getTechIcon(tech: string): React.ComponentType<any> {
  // Convert tech name to lowercase for case-insensitive matching
  const techLower = tech.toLowerCase();
  
  // Find a match in our iconMap (case-insensitive)
  const matchingKey = Object.keys(iconMap).find(
    key => key.toLowerCase() === techLower
  );
  
  // Return the matching icon or a default icon
  return matchingKey ? iconMap[matchingKey] : Globe;
}
