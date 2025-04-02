
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 90 },
  { name: 'Three.js', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'GLSL Shaders', level: 75 },
  { name: 'WebGL', level: 70 },
  { name: 'Node.js', level: 85 },
  { name: 'UI/UX Design', level: 80 },
  { name: 'Framer Motion', level: 90 },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Creative developer with a passion for building beautiful and interactive web experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">My Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate 3D web developer with 5 years of experience crafting interactive digital experiences. 
                My journey began with traditional web development, but I quickly fell in love with the immersive 
                possibilities of WebGL and Three.js.
              </p>
              <p>
                I specialize in creating visually stunning and performant 3D websites that push the boundaries 
                of what's possible in the browser. My approach combines technical expertise with creative vision 
                to build memorable user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me experimenting with new visual techniques, contributing to 
                open-source projects, or speaking at tech conferences about the future of web graphics.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">My Skills</h3>
            
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
