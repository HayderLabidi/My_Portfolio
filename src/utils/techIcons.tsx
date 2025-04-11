
import { 
  Globe, 
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

// Custom SVG components for popular technologies
const ReactLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <g fill="#61DAFB">
      <circle cx="12" cy="12" r="2.139" />
      <path d="M12,18.092c-3.332,0-6.474-0.716-8.836-1.946c-2.226-1.16-3.45-2.711-3.45-4.146 s1.224-2.986,3.45-4.146c2.362-1.23,5.504-1.946,8.836-1.946s6.474,0.716,8.836,1.946c2.226,1.16,3.45,2.711,3.45,4.146 s-1.224,2.986-3.45,4.146C18.474,17.376,15.332,18.092,12,18.092z M12,7.908c-2.995,0-5.804,0.649-7.894,1.758 C2.472,10.612,1.714,11.718,1.714,12s0.758,1.388,2.392,2.334c2.089,1.109,4.899,1.758,7.894,1.758s5.804-0.649,7.894-1.758 C21.528,13.388,22.286,12.282,22.286,12s-0.758-1.388-2.392-2.334C17.804,8.557,14.995,7.908,12,7.908z" />
      <path d="M5.45,21.087c-0.297,0-0.597-0.042-0.9-0.126c-1.358-0.382-2.411-1.598-2.96-3.142 c-0.58-1.637-0.568-3.564,0.032-5.45c0.636-1.995,1.906-4.003,3.648-5.762C7.009,4.861,9.02,3.583,11.012,2.937 c1.871-0.605,3.782-0.626,5.392-0.057c1.528,0.541,2.732,1.581,3.109,2.921c0.4,1.426-0.071,3.028-1.325,4.511 c-0.587,0.692-0.589,0.692-1.061,0.098c-0.471-0.593-0.455-0.639,0.092-1.286c0.508-0.6,1.081-1.451,0.882-2.173 c-0.204-0.744-1.061-1.475-2.23-1.893c-1.244-0.448-2.766-0.458-4.288,0.045c-1.725,0.57-3.5,1.713-5.046,3.275 c-1.549,1.566-2.669,3.346-3.231,5.113c-0.466,1.462-0.501,2.932-0.098,4.139c0.33,0.991,0.927,1.645,1.681,1.853 c0.729,0.2,1.595-0.03,2.451-0.651c0.391-0.284,0.674-0.146,0.936,0.194c0.262,0.34,0.29,0.544-0.114,0.838 C7.396,20.644,6.396,21.087,5.45,21.087z M18.55,21.087c-0.946,0-1.946-0.442-2.832-1.183c-0.404-0.294-0.376-0.499-0.114-0.838 c0.262-0.34,0.545-0.479,0.936-0.194c0.857,0.622,1.722,0.851,2.451,0.651c0.754-0.208,1.351-0.863,1.681-1.853 c0.403-1.208,0.368-2.677-0.098-4.139c-0.561-1.767-1.682-3.547-3.231-5.113c-1.546-1.562-3.322-2.705-5.046-3.275 c-1.521-0.503-3.044-0.493-4.288-0.045c-1.169,0.418-2.026,1.149-2.23,1.893c-0.199,0.722,0.374,1.573,0.882,2.173 c0.547,0.646,0.563,0.692,0.092,1.286c-0.471,0.594-0.474,0.593-1.061-0.098c-1.254-1.483-1.725-3.085-1.325-4.511 c0.377-1.34,1.58-2.379,3.109-2.921c1.61-0.569,3.521-0.548,5.392,0.057c1.992,0.646,4.003,1.923,5.742,3.67 c1.742,1.759,3.013,3.767,3.648,5.762c0.6,1.886,0.611,3.813,0.032,5.45c-0.549,1.545-1.601,2.76-2.96,3.142 C19.148,21.046,18.848,21.087,18.55,21.087z" />
    </g>
  </svg>
);

const VueLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fill="#41B883" d="M19.197,3.406h4.803L12,22.594L0,3.406h9.197L12,7.722L14.719,3.406H19.197z M2.4,5.406L12,21.195 L21.6,5.406h-2.803L12,15.195L5.203,5.406H2.4z" />
    </g>
  </svg>
);

const AngularLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fill="#DD0031" d="M12,2.5l8.84,3.15l-1.34,11.7L12,21.5l-7.5-4.15L3.16,5.65L12,2.5z M12,4.5L5.66,6.84l1.05,9.27 l5.29,2.92l5.29-2.92l1.05-9.27L12,4.5z M12,5.93l4.17,9.3h-1.48l-0.92-2.3L12,12.93h-1.75L9.3,15.23H7.8L12,5.93z M11.99,8.6 l-1.31,2.63h2.62L11.99,8.6z" />
    </g>
  </svg>
);

const NodeJSLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fill="#339933" d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M14.059,13.517 c-3.83,0-4.632-1.76-4.632-3.236c0-0.141,0.114-0.253,0.255-0.253h1.136c0.127,0,0.233,0.092,0.253,0.213 c0.172,1.161,0.684,1.747,2.988,1.747c1.838,0,2.621-0.415,2.621-1.39c0-0.562-0.221-0.979-3.076-1.258 c-2.387-0.238-3.863-0.764-3.863-2.677c0-1.764,1.482-2.815,3.962-2.815c2.788,0,4.167,0.969,4.341,3.049 c0.006,0.072-0.018,0.141-0.062,0.194c-0.044,0.051-0.109,0.083-0.174,0.083h-1.139c-0.119,0-0.225-0.083-0.249-0.198 c-0.278-1.234-0.954-1.629-2.717-1.629c-2,0-2.232,0.696-2.232,1.218c0,0.632,0.274,0.815,2.981,1.171 c2.68,0.354,3.956,0.854,3.956,2.75C18.319,12.429,16.7,13.517,14.059,13.517z" />
    </g>
  </svg>
);

const TypeScriptLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fill="#3178C6" d="M3,3v18h18V3H3z M13.698,14.96c0.621,0.211,1.362,0.211,1.982,0c0.621-0.211,1.087-0.692,1.087-1.277 v-0.169h-1.431v0.169c0,0.042-0.021,0.085-0.084,0.127c-0.063,0.042-0.147,0.042-0.231,0.042c-0.084,0-0.168,0-0.231-0.042 c-0.064-0.042-0.084-0.084-0.084-0.127V9.919h2.06V8.642h-2.06V7.112H12.61v1.53H11.5v1.277h1.11v3.698 C12.61,14.267,13.077,14.749,13.698,14.96z M10.112,12.161c-0.212-0.339-0.593-0.509-0.932-0.509 c-0.021,0-0.063,0-0.106,0.021v1.7c0.042,0,0.085,0.021,0.127,0.021c0.127,0,0.254-0.042,0.381-0.106 c0.127-0.063,0.254-0.19,0.339-0.317c0.084-0.148,0.126-0.317,0.126-0.487C9.939,12.35,9.897,12.223,10.112,12.161z M9.053,10.807c0.508,0,0.974,0.148,1.362,0.444c0.381,0.296,0.656,0.699,0.825,1.17c0.169,0.466,0.254,0.974,0.254,1.489 c0,0.656-0.127,1.235-0.402,1.743c-0.254,0.509-0.634,0.911-1.108,1.192c-0.444,0.296-0.974,0.423-1.574,0.444l-1.955,0.021 V7.112h2.598V10.807z" />
    </g>
  </svg>
);

const JavaScriptLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fill="#F7DF1E" d="M3,3v18h18V3H3z M13.776,17.154c-0.407,0.677-1.18,1.125-2.033,1.125 c-1.097,0-1.939-0.648-1.939-1.727c0-1.048,0.677-1.727,1.794-1.727c0.229,0,0.508,0.036,0.755,0.097v-1.99 c-1.615-0.052-3.047,0.407-3.047,2.892c0,1.966,1.241,2.942,2.844,2.942c1.23,0,2.16-0.603,2.686-1.538L13.776,17.154z M18.224,17.154c-0.407,0.677-1.18,1.125-2.033,1.125c-1.097,0-1.939-0.648-1.939-1.727c0-1.048,0.677-1.727,1.794-1.727 c0.229,0,0.508,0.036,0.755,0.097v-1.99c-1.615-0.052-3.047,0.407-3.047,2.892c0,1.966,1.241,2.942,2.844,2.942 c1.23,0,2.16-0.603,2.686-1.538L18.224,17.154z" />
    </g>
  </svg>
);

const HTMLLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fill="#E34F26" d="M3.023,2l1.634,18.376L11.99,22l7.358-1.624L21,2H3.023z M17.136,7.398H8.578l0.176,1.949h8.206 l-0.498,5.658l-4.458,1.252l-4.478-1.227l-0.308-3.451h2.19l0.154,1.776l2.443,0.656l0.015-0.004l2.444-0.662l0.255-2.811H6.087 L5.59,4.55h12.83L17.136,7.398z" />
    </g>
  </svg>
);

const CSSLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fill="#1572B6" d="M3.023,2l1.634,18.376L11.99,22l7.358-1.624L21,2H3.023z M17.936,5.998l-0.146,2.346l-0.064,1.102 l-0.159,2.738l-0.2,2.865l-0.083,1.359l-4.287,1.191l-0.006,0.002l-4.32-1.205l-0.293-3.298h2.113l0.149,1.67l2.351,0.635 l2.35-0.635l0.324-3.448H7.063L6.915,8.574l-0.146-1.584h10.462L17.936,5.998z M6.227,3.184h11.54l-0.201,2.209H6.606 L6.227,3.184z" />
    </g>
  </svg>
);

const TailwindLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fill="#06B6D4" d="M12.001,6.39c-1.237,0-2.14,0.61-2.74,1.825c-0.36,0.728-0.5,1.643-0.36,2.745 c-1.099-1.167-2.356-1.612-3.814-1.341c-1.457,0.271-2.512,1.341-3.165,3.21c-0.424,1.211-0.526,2.55-0.306,4.013 c-1.931-1.832-2.731-3.919-2.4-6.26C19.791,6.39,14.147,0,12.001,6.39z M21.127,10.587c-0.254,0-0.72,0.305-1.398,0.915 c-0.678,0.61-1.237,1.527-1.677,2.745c-0.441,1.22-0.61,2.184-0.509,2.897c0.102,0.713,0.339,1.305,0.712,1.781 c0.373,0.474,0.805,0.882,1.296,1.22c0.491,0.339,0.924,0.585,1.296,0.745C21.889,22.14,22.075,22,22.075,22 c-2.035-1.457-2.859-3.334-2.478-5.642C19.672,14.938,19.62,13.24,21.127,10.587z" />
    </g>
  </svg>
);

const MongoDBLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fill="#47A248" d="M12,2C9.805,2,7.734,2.691,6.086,3.945c-1.647,1.254-2.828,3.016-3.328,5.004 c-0.5,1.989-0.234,4.086,0.754,5.895c0.988,1.809,2.629,3.199,4.617,3.897h0c0.073,0.026,0.152,0.067,0.219,0.121 c0.067,0.055,0.122,0.121,0.156,0.2l0.688,2.894c0.013,0.056,0.047,0.105,0.091,0.136c0.044,0.033,0.099,0.051,0.154,0.051 h1.125c0.055,0,0.11-0.018,0.154-0.051c0.044-0.031,0.078-0.08,0.091-0.136l0.688-2.894c0.035-0.079,0.09-0.146,0.156-0.2 c0.067-0.054,0.146-0.095,0.219-0.121h0c1.988-0.698,3.629-2.088,4.617-3.897c0.988-1.809,1.254-3.906,0.754-5.895 S15.56,5.199,13.913,3.945C12.266,2.691,10.195,2,12,2z M11.95,18.898c-0.139-0.049-0.27-0.13-0.386-0.231 c-0.115-0.101-0.213-0.22-0.292-0.352c-0.078-0.132-0.136-0.275-0.173-0.421c-0.037-0.147-0.054-0.296-0.05-0.444v-0.75 c0-0.414,0.157-0.772,0.439-1.043l-1.125-6.75c-0.02-0.068-0.046-0.135-0.051-0.206c-0.021-0.381,0.099-0.769,0.361-1.084 c0.268-0.321,0.655-0.559,1.089-0.638c0.049-0.009,0.109,0.005,0.153,0.038c0.043,0.033,0.073,0.084,0.073,0.144V18.898z" />
    </g>
  </svg>
);

const FramerMotionLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fill="#0055FF" d="M12 12.816l-7.532-4.35V3.768l7.532 4.349V12.816zM4.468 14.465V9.417l3.535 2.043-3.535 3.005zM12 12.816v4.699L4.468 13.16l7.532-4.35V12.816zM12 12.816l7.532-4.35V3.768l-7.532 4.349V12.816zM19.532 14.465V9.417l-3.535 2.043 3.535 3.005zM12 12.816v4.699l7.532-4.355-7.532-4.35V12.816z" />
    </g>
  </svg>
);

const ThreeJSLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fill="#000000" d="M12,2l9.3,5.4v9.1L12,22l-9.3-5.4V7.5L12,2 M12,7L5.7,10.5v6.9L12,21l6.3-3.6v-6.9L12,7z" />
    </g>
  </svg>
);

// Map technology names to SVG logos or Lucide icons with specific colors
const iconMap: IconMap = {
  // Frontend with custom SVG logos
  React: { 
    icon: ReactLogo, 
    color: "#61DAFB" // React blue
  },
  Angular: { 
    icon: AngularLogo, 
    color: "#DD0031" // Angular red
  },
  Vue: { 
    icon: VueLogo, 
    color: "#41B883" // Vue green
  },
  JavaScript: { 
    icon: JavaScriptLogo, 
    color: "#F7DF1E" // JavaScript yellow
  },
  TypeScript: { 
    icon: TypeScriptLogo, 
    color: "#3178C6" // TypeScript blue
  },
  HTML: { 
    icon: HTMLLogo, 
    color: "#E34F26" // HTML orange
  },
  CSS: { 
    icon: CSSLogo, 
    color: "#1572B6" // CSS blue
  },
  "Tailwind CSS": { 
    icon: TailwindLogo, 
    color: "#06B6D4" // Tailwind teal
  },
  
  // Backend with SVG logos
  Node: { 
    icon: NodeJSLogo, 
    color: "#339933" // Node green
  },
  "Node.js": { 
    icon: NodeJSLogo, 
    color: "#339933" // Node green
  },
  NodeJs: { 
    icon: NodeJSLogo, 
    color: "#339933" // Node green
  },
  
  // Database with SVG logos
  MongoDB: { 
    icon: MongoDBLogo, 
    color: "#47A248" // MongoDB green
  },
  
  // Special frameworks/libraries
  "Three.js": { 
    icon: ThreeJSLogo, 
    color: "#000000" // Three.js black
  },
  Three: { 
    icon: ThreeJSLogo, 
    color: "#000000" // Three.js black
  },
  "Framer Motion": { 
    icon: FramerMotionLogo, 
    color: "#0055FF" // Framer blue
  },
  
  // Fallback to Lucide icons for other technologies
  Bootstrap: { 
    icon: Layout, 
    color: "#7952B3" // Bootstrap purple
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
  MySQL: { 
    icon: Database, 
    color: "#4479A1" // MySQL blue
  },
  Firebase: { 
    icon: Database, 
    color: "#FFCA28" // Firebase yellow
  },
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
  Git: { 
    icon: FileCode, 
    color: "#F05032" // Git orange
  },
  GitHub: { 
    icon: FileCode, 
    color: "#181717" // GitHub black
  },
  GitLab: { 
    icon: FileCode, 
    color: "#FC6D26" // GitLab orange
  },
  Redux: { 
    icon: Layers, 
    color: "#764ABC" // Redux purple
  },
  Vscode: { 
    icon: FileCode, 
    color: "#007ACC" // VS Code blue
  },
  Netbeans: { 
    icon: FileCode, 
    color: "#1B6AC6" // NetBeans blue
  }
};

// Function that returns both the icon and color
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
