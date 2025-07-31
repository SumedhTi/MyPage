import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import {
  AdvancedScroll,
  NumberCounter,
} from "@/components/animations/advanced-scroll";
import { ScrambleText } from "@/components/animations/scramble-text";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90, color: "bg-blue-500" },
      { name: "Vue.js", level: 85, color: "bg-green-500" },
      { name: "Html/Css", level: 85, color: "bg-blue-600" },
      { name: "Tailwind CSS", level: 60, color: "bg-cyan-500" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Express/Node.js", level: 90, color: "bg-green-600" },
      { name: "Java", level: 70, color: "bg-yellow-500" },
      { name: "MySQL", level: 90, color: "bg-blue-700" },
      { name: "MongoDB", level: 85, color: "bg-green-700" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 85, color: "bg-orange-500" },
      { name: "Docker", level: 60, color: "bg-blue-400" },
      { name: "Figma", level: 50, color: "bg-purple-500" },
      { name: "MsTeams", level: 60, color: "bg-yellow-600" },
    ],
  },
];

const technologies = [
  "C",
  "C++",
  "Java",
  "HTML5",
  "JavaScript",
  "Google Cloud",
  "Python",
  "Electron.js",
  "Express.js",
  "Flask",
  "JWT",
  "MUI",
  "NodeJS",
  "OpenCV",
  "React",
  "Vite",
  "MongoDB",
  "MySQL",
  "SQLite",
  "Postgres",
  "Git",
  "Docker",
];

const otherSkills = ["Swimming", "Cycling", "Photography", "Football", "Hockey"];

export function Skills() {
  return (
    <Section id="skills" className="relative overflow-hidden">
      <div className="text-center mb-16">
        <AdvancedScroll animation="flip">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My{" "}
            <ScrambleText
              text="Skills"
              trigger={true}
              className="bg-gradient-primary bg-clip-text text-transparent text-glow"
            />
          </h2>
        </AdvancedScroll>
        <AdvancedScroll animation="fadeUp" delay={0.2}>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I
            use to bring ideas to life.
          </p>
        </AdvancedScroll>
      </div>

      {/* Skills Categories */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {skillCategories.map((category, index) => (
          <AdvancedScroll key={index} animation="fadeLeft" delay={index * 0.1}>
            <motion.div
              className="h-full"
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Card className="glass-card p-6 neon-border hover-glow tilt-card h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-xl font-semibold mb-6 text-primary relative">
                  {category.title}
                </h3>
                <div className="space-y-6 relative">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="space-y-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          <NumberCounter
                            end={skill.level}
                            suffix="%"
                            duration={1.5}
                          />
                        </span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-muted/20 rounded-full h-3" />
                        <motion.div
                          className="absolute top-0 left-0 h-3 rounded-full bg-gradient-primary shadow-glow"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.5,
                            delay: skillIndex * 0.2,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </AdvancedScroll>
        ))}
      </div>

      {/* Technology Cloud */}
      <AdvancedScroll animation="scale" delay={0.5}>
        <div className="text-center mb-14">
          <h3 className="text-2xl font-semibold mb-8 text-glow">
            Technologies I have Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                className="glass-card px-4 py-2 rounded-full text-sm neon-border cursor-pointer hover-lift"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 20px hsl(var(--primary) / 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </AdvancedScroll>

      <AdvancedScroll animation="scale" delay={0.5}>
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-glow">
            Other Skills Than Tech
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {otherSkills.map((tech, index) => (
              <motion.span
                key={index}
                className="glass-card px-4 py-2 rounded-full text-sm neon-border cursor-pointer hover-lift"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 20px hsl(var(--primary) / 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </AdvancedScroll>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-primary/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
            }}
          />
        ))}
      </div>
    </Section>
  );
}
