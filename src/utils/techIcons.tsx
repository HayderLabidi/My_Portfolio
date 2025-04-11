
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
import React from 'react';

interface IconMap {
  [key: string]: {
    icon: React.ComponentType<any>;
    color: string;
  };
}

// Map technology names to icons with specific colors
const iconMap: IconMap = {
  // Frontend
  React: { 
    icon: FileCode, 
    color: "#61DAFB" // React blue
  },
  Angular: { 
    icon: FileCode, 
    color: "#DD0031" // Angular red
  },
  Vue: { 
    icon: FileCode, 
    color: "#41B883" // Vue green
  },
  JavaScript: { 
    icon: Code, 
    color: "#F7DF1E" // JavaScript yellow
  },
  TypeScript: { 
    icon: Code, 
    color: "#3178C6" // TypeScript blue
  },
  HTML: { 
    icon: Layout, 
    color: "#E34F26" // HTML orange
  },
  CSS: { 
    icon: Layout, 
    color: "#1572B6" // CSS blue
  },
  Bootstrap: { 
    icon: Layout, 
    color: "#7952B3" // Bootstrap purple
  },
  "Tailwind CSS": { 
    icon: Layout, 
    color: "#06B6D4" // Tailwind teal
  },
  
  // Backend
  Node: { 
    icon: Server, 
    color: "#339933" // Node green
  },
  "Node.js": { 
    icon: Server, 
    color: "#339933" // Node green
  },
  NodeJs: { 
    icon: Server, 
    color: "#339933" // Node green
  },
  Express: { 
    icon: Server, 
    color: "#000000" // Express black
  },
  Laravel: { 
    icon: Server, 
    color: "#FF2D20" // Laravel red
  },
  PHP: { 
    icon: Server, 
    color: "#777BB4" // PHP purple
  },
  Java: { 
    icon: Server, 
    color: "#007396" // Java blue
  },
  Python: { 
    icon: Server, 
    color: "#3776AB" // Python blue
  },
  
  // Database
  MongoDB: { 
    icon: Database, 
    color: "#47A248" // MongoDB green
  },
  MySQL: { 
    icon: Database, 
    color: "#4479A1" // MySQL blue
  },
  Firebase: { 
    icon: Database, 
    color: "#FFCA28" // Firebase yellow
  },
  
  // Mobile
  Android: { 
    icon: Smartphone, 
    color: "#3DDC84" // Android green
  },
  iOS: { 
    icon: Smartphone, 
    color: "#000000" // iOS black
  },
  Flutter: { 
    icon: Smartphone, 
    color: "#02569B" // Flutter blue
  },
  "React Native": { 
    icon: Smartphone, 
    color: "#61DAFB" // React Native blue
  },
  
  // DevOps & Cloud
  AWS: { 
    icon: Cloud, 
    color: "#FF9900" // AWS orange
  },
  Azure: { 
    icon: Cloud, 
    color: "#0078D4" // Azure blue
  },
  Docker: { 
    icon: Cloud, 
    color: "#2496ED" // Docker blue
  },
  Kubernetes: { 
    icon: Cloud, 
    color: "#326CE5" // Kubernetes blue
  },
  
  // Tools & Others
  Git: { 
    icon: Code, 
    color: "#F05032" // Git orange
  },
  GitHub: { 
    icon: Code, 
    color: "#181717" // GitHub black
  },
  GitLab: { 
    icon: Code, 
    color: "#FC6D26" // GitLab orange
  },
  Redux: { 
    icon: Layers, 
    color: "#764ABC" // Redux purple
  },
  Vscode: { 
    icon: Code, 
    color: "#007ACC" // VS Code blue
  },
  Netbeans: { 
    icon: Code, 
    color: "#1B6AC6" // NetBeans blue
  },
  "Three.js": { 
    icon: Cpu, 
    color: "#000000" // Three.js black
  },
  Three: { 
    icon: Cpu, 
    color: "#000000" // Three.js black
  },
  "Framer Motion": { 
    icon: TrendingUp, 
    color: "#0055FF" // Framer blue
  }
};

// New function that returns both the icon and color
export function getTechIcon(tech: string): {
  Icon: React.ComponentType<any>;
  color: string;
} {
  // Convert tech name to lowercase for case-insensitive matching
  const techLower = tech.toLowerCase();
  
  // Find a match in our iconMap (case-insensitive)
  const matchingKey = Object.keys(iconMap).find(
    key => key.toLowerCase() === techLower
  );
  
  // Return the matching icon and color or defaults
  if (matchingKey) {
    return {
      Icon: iconMap[matchingKey].icon,
      color: iconMap[matchingKey].color
    };
  }
  
  // Default fallback
  return {
    Icon: Globe,
    color: "#64748b" // Slate/neutral color for unknown tech
  };
}
