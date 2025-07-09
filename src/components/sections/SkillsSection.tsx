"use client";
import { motion } from "motion/react";
import { CardDemo } from "@/components/ui/cards";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { IconCode, IconDatabase, IconBrandReact, IconBrandNodejs } from "@tabler/icons-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <IconBrandReact className="h-8 w-8" />,
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
      color: "from-blue-400 to-cyan-400",
      description: "Building responsive and interactive user interfaces"
    },
    {
      title: "Backend Development",
      icon: <IconBrandNodejs className="h-8 w-8" />,
      skills: ["Node.js", "Express.js", "Python", "Django", "FastAPI", "REST APIs"],
      color: "from-green-400 to-emerald-400",
      description: "Creating robust server-side applications and APIs"
    },
    {
      title: "Database & DevOps",
      icon: <IconDatabase className="h-8 w-8" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Git","Oracle"],
      color: "from-purple-400 to-pink-400",
      description: "Managing data and deployment infrastructure"
    },
    {
      title: "Programming Languages",
      icon: <IconCode className="h-8 w-8" />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
      color: "from-orange-400 to-red-400",
      description: "Proficient in multiple programming paradigms"
    }
  ];

  const tools = [
    { name: "React.js", level: 95, icon: "⚛️" },
    { name: "TypeScript", level: 90, icon: "🔷" },
    { name: "Next.js", level: 88, icon: "▲" },
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Python", level: 82, icon: "🐍" },
    { name: "MongoDB", level: 80, icon: "🍃" },
    { name: "PostgreSQL", level: 78, icon: "🐘" },
    { name: "SQLite", level: 75, icon: "🐳" },
    { name: "AWS", level: 70, icon: "☁️" },
  ];

  return (
    <section id="skills" className="relative py-20 px-4 max-w-7xl mx-auto overflow-hidden">
      {/* Background Beams */}
      <BackgroundBeams className="absolute inset-0 z-0" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-full px-6 py-2 mb-6"
        >
          <IconCode className="h-5 w-5 text-blue-400" />
          <span className="text-sm text-gray-300">Technical Expertise</span>
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          The Stack Forge
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Mastering cutting-edge technologies to build exceptional digital experiences
        </p>
      </motion.div>

      {/* Animated Cards Demo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 mb-20"
      >
        <CardDemo />
      </motion.div>

      {/* Skill Categories with 3D Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[400px] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="flex items-center gap-3 mb-4"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-600 dark:text-white">
                    {category.title}
                  </h3>
                </CardItem>

                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm dark:text-neutral-300 mb-4"
                >
                  {category.description}
                </CardItem>

                <CardItem
                  translateZ="70"
                  className="flex flex-wrap gap-2"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      className={`px-3 py-1 bg-gradient-to-r ${category.color} bg-opacity-20 text-white rounded-full text-xs font-medium border border-white/20`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>

      {/* Skill Levels with Progress Bars */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
      >
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Proficiency Levels</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{tool.icon}</span>
                  <span className="text-white font-medium">{tool.name}</span>
                </div>
                <span className="text-blue-400 text-sm font-bold">{tool.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tool.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
