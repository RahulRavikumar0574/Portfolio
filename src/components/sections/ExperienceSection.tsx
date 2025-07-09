"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { IconBriefcase, IconCalendar, IconBuilding, IconTrendingUp } from "@tabler/icons-react";

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLengths = [
    useTransform(scrollYProgress, [0, 0.8], [0, 1]),
    useTransform(scrollYProgress, [0.1, 0.9], [0, 1]),
    useTransform(scrollYProgress, [0.2, 1], [0, 1]),
    useTransform(scrollYProgress, [0.3, 1], [0, 1]),
    useTransform(scrollYProgress, [0.4, 1], [0, 1]),
  ];

  const experiences = [
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      period: "January 2024 – Present",
      description: "Worked on various projects as a freelancer, delivering full-stack solutions for clients. Built responsive web applications, e-commerce platforms, and custom business solutions.",
      skills: ["React", "Node.js", "MongoDB", "AWS"],
      icon: "💼",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Application Development Intern",
      company: "Tech Company",
      period: "June 2024 – December 2024",
      description: "Developed and maintained applications, focusing on improving user experience and functionality. Collaborated with senior developers on large-scale projects.",
      skills: ["JavaScript", "Python", "PostgreSQL"],
      icon: "🚀",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "FullStack Developer Intern",
      company: "SynecXAI Labs",
      period: "December 2024 – Present",
      description: "Contributed to building scalable web applications with a focus on both front-end and back-end development. Worked on AI-powered features and machine learning integrations.",
      skills: ["Next.js", "TypeScript", "FastAPI", "TensorFlow"],
      icon: "🤖",
      color: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <section ref={ref} id="experience" className="relative py-20 px-4 max-w-7xl mx-auto">
      <GoogleGeminiEffect
        pathLengths={pathLengths}
        className="absolute inset-0 pointer-events-none"
      />
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            My Experience
          </h2>
          <p className="text-gray-400 text-lg">
            Freelancing | Internships | FullStack Development
          </p>
        </motion.div>

        {/* Single clean experience card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[350px] h-auto rounded-xl p-6 border">
                  {/* Card Header */}
                  <CardItem
                    translateZ="50"
                    className="flex items-center gap-3 mb-4"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center text-2xl`}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-600 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                  </CardItem>

                  {/* Period */}
                  <CardItem
                    translateZ="60"
                    className="flex items-center gap-2 mb-4"
                  >
                    <IconCalendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-400">{exp.period}</span>
                  </CardItem>

                  {/* Description */}
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 leading-relaxed mb-4"
                  >
                    {exp.description}
                  </CardItem>

                  {/* Skills */}
                  <CardItem
                    translateZ="70"
                    className="flex flex-wrap gap-2"
                  >
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </CardItem>

                  {/* Hover Effect */}
                  
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Projects Completed", value: "25+", icon: IconBriefcase },
            { label: "Years Experience", value: "2+", icon: IconCalendar },
            { label: "Technologies", value: "15+", icon: IconTrendingUp },
            { label: "Happy Clients", value: "10+", icon: IconBuilding },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Advanced Tools to Excel</h3>
          <p className="text-gray-400 text-lg">Seamless Development with AI-Powered Tools</p>
        </motion.div>
      </div>
    </section>
  );
}