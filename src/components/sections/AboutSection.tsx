"use client";
import { motion } from "motion/react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      period: "January 2024 – Present",
      description: "Worked on various projects as a freelancer, delivering full-stack solutions for clients.",
    },
    {
      title: "Application Development Intern",
      company: "Tech Company",
      period: "June 2024 – December 2024",
      description: "Developed and maintained applications, focusing on improving user experience and functionality.",
    },
    {
      title: "FullStack Developer Intern",
      company: "AI Labs",
      period: "December 2024 – Present",
      description: "Contributed to building scalable web applications with a focus on both front-end and back-end development.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 max-w-7xl mx-auto">
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

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <p className="text-blue-400">{exp.company}</p>
              </div>
              <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
            </div>
            <p className="text-gray-300 leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-4">Advanced Tool to Excel</h3>
        <p className="text-gray-400 text-lg">Seamless Development with AI-Powered Tools</p>
      </motion.div>
    </section>
  );
}
