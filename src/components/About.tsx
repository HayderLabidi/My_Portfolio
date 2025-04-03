
import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript/TypeScript', level: 90 },
  { name: 'React/Angular', level: 88 },
  { name: 'Node.js/Express', level: 85 },
  { name: 'Flutter/Mobile', level: 80 },
  { name: 'MySQL/MongoDB', level: 82 },
  { name: 'Java/Python', level: 75 },
  { name: 'PHP/Symfony', level: 78 },
  { name: 'UI/UX Design', level: 70 },
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
            Full-stack developer specializing in web, mobile, and desktop application development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">My Background</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm an experienced full-stack developer specializing in back-end and front-end application development,
                systems management, and mobile, web, and desktop applications.
              </p>
              <p>
                Currently studying at the Higher Institute of Technological Studies of Sidi Bouzid in Web and Multimedia Development,
                I've complemented my education with focused training in Mobile Development at 9antra.tn-The Bridge
                and Web Front-End Development at Opus Lab.
              </p>
              <p>
                My professional experience spans mobile app development with Flutter and SpringBoot, web development with Angular and Node.js,
                and various other technologies. I'm passionate about creating innovative solutions and building engaging user experiences.
              </p>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">Languages</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Arabic</p>
                <p className="text-muted-foreground">Native</p>
              </div>
              <div>
                <p className="font-medium">English</p>
                <p className="text-muted-foreground">Advanced</p>
              </div>
              <div>
                <p className="font-medium">French</p>
                <p className="text-muted-foreground">Intermediate</p>
              </div>
              <div>
                <p className="font-medium">German</p>
                <p className="text-muted-foreground">Beginner</p>
              </div>
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

            <h3 className="text-2xl font-bold mb-4 mt-8">Education</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium">Higher Institute of Technological Studies of Sidi Bouzid</p>
                <p className="text-sm text-muted-foreground">Web and Multimedia Development • Sept 2022 - Present</p>
              </div>
              <div>
                <p className="font-medium">9antra.tn-The Bridge</p>
                <p className="text-sm text-muted-foreground">Mobile Development Training • July 2024 - August 2024</p>
              </div>
              <div>
                <p className="font-medium">Opus Lab</p>
                <p className="text-sm text-muted-foreground">Web Front-End Development Training • July 2023 - August 2023</p>
              </div>
              <div>
                <p className="font-medium">9 Avril High School, Sidi Bouzid</p>
                <p className="text-sm text-muted-foreground">Technical Baccalaureate • Sept 2020 - June 2021</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
