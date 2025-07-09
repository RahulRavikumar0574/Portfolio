"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { PinContainer } from "@/components/ui/3d-pin";
import { Modal, ModalTrigger, ModalBody, ModalContent } from "@/components/ui/animated-modal";
import { IconExternalLink, IconBrandGithub, IconRocket, IconCode, IconEye } from "@tabler/icons-react";

export function ProjectsSection() {
  // Projects for Hero Parallax
  const heroProjects = [
    {
      title: "AI Project",
      link: "https://github.com/RahulRavikumar0574",
      thumbnail: "/ai-project.svg",
    },
    {
      title: "Notes & Quiz App",
      link: "https://github.com/RahulRavikumar0574",
      thumbnail: "/notes-quiz-app.svg",
    },
    {
      title: "Game Encyclopedia",
      link: "https://github.com/RahulRavikumar0574",
      thumbnail: "/game-encyclopedia.svg",
    },
    {
      title: "BrainSphere",
      link: "https://github.com/RahulRavikumar0574",
      thumbnail: "/brainsphere.svg",
    },
    {
      title: "Task Dashboard",
      link: "https://github.com/RahulRavikumar0574",
      thumbnail: "/task-dashboard.svg",
    },
    {
      title: "Docsynecx",
      link: "https://github.com/RahulRavikumar0574",
      thumbnail: "/docsynecx.svg",
    },
    {
      title: "AetherStay",
      link: "https://github.com/RahulRavikumar0574",
      thumbnail: "/aetherstay.svg",
    },
    {
      title: "Game Encyclopedia 2",
      link: "https://github.com/RahulRavikumar0574",
      thumbnail: "/game-encyclopedia.svg",
    },
    {
      title: "BrainSphere 2",
      link: "https://github.com/RahulRavikumar0574",
      thumbnail: "/brainsphere.svg",
    },
    {
      title: "Task Dashboard 2",
      link: "https://github.com/RahulRavikumar0574",
      thumbnail: "/task-dashboard.svg",
    },
    {
      title: "Docsynecx 2",
      link: "https://github.com/RahulRavikumar0574",
      thumbnail: "/docsynecx.svg",
    },
    {
      title: "AetherStay 2",
      link: "https://github.com/RahulRavikumar0574",
      thumbnail: "/aetherstay.svg",
    },
    {
      title: "AI Project 2",
      link: "https://github.com/RahulRavikumar0574",
      thumbnail: "/ai-project.svg",
    },
    {
      title: "Notes & Quiz App 2",
      link: "https://github.com/RahulRavikumar0574",
      thumbnail: "/notes-quiz-app.svg",
    },
    {
      title: "Game Encyclopedia 3",
      link: "https://github.com/RahulRavikumar0574",
      thumbnail: "/game-encyclopedia.svg",
    },
    {
      title: "BrainSphere 3",
      link: "https://github.com/RahulRavikumar0574",
      thumbnail: "/brainsphere.svg",
    },
    {
      title: "Task Dashboard 3",
      link: "https://github.com/RahulRavikumar0574",
      thumbnail: "/task-dashboard.svg",
    },
    {
      title: "Docsynecx 3",
      link: "https://github.com/RahulRavikumar0574",
      thumbnail: "/docsynecx.svg",
    },
    {
      title: "AetherStay 3",
      link: "https://github.com/RahulRavikumar0574",
      thumbnail: "/aetherstay.svg",
    },
    {
      title: "Game Encyclopedia 4",
      link: "https://github.com/RahulRavikumar0574",
      thumbnail: "/game-encyclopedia.svg",
    },
    {
      title: "BrainSphere 4",
      link: "https://github.com/RahulRavikumar0574",
      thumbnail: "/brainsphere.svg",
    },
    {
      title: "Task Dashboard 4",
      link: "https://github.com/RahulRavikumar0574",
      thumbnail: "/task-dashboard.svg",
    },
  ];

  // Featured projects with detailed information
  const featuredProjects = [
    {
      title: "BrainSphere (3D Brain Visualization)",
      description: "An interactive 3D brain visualization tool that maps actions to brain regions. Built with Next.js, Three.js, and PostgreSQL for advanced scientific and educational use.",
      image: "/brainsphere.svg",
      link: "https://github.com/RahulRavikumar0574/baldsphere",
      demoLink: "#",
      tech: ["Next.js", "Three.js", "PostgreSQL"],
      features: ["3D Visualization", "Brain Mapping", "Interactive UI"],
      category: "Full Stack"
    },
    {
      title: "Notes & Quiz App",
      description: "Create notes and take quizzes to test your knowledge!",
      image: "/notes-quiz-app.svg",
      link: "https://github.com/RahulRavikumar0574/notes-quiz-app",
      demoLink: "#",
      tech: ["React", "Node.js", "MongoDB"],
      features: ["Notes", "Quizzes", "User Auth"],
      category: "Web App"
    },
    {
      title: "Game Encyclopedia",
      description: "Discover the fascinating world of game design, mechanics, and development.",
      image: "/game-encyclopedia.svg",
      link: "https://github.com/RahulRavikumar0574/game-encyclopedia",
      demoLink: "#",
      tech: ["Next.js", "TypeScript", "TailwindCSS"],
      features: ["Glossary", "Genres", "Mechanics"],
      category: "Web App"
    },
    {
      title: "Task Dashboard",
      description: "Stay organized and boost your productivity with a simple task dashboard.",
      image: "/task-dashboard.svg",
      link: "https://github.com/RahulRavikumar0574/task-dashboard",
      demoLink: "#",
      tech: ["React", "CSS"],
      features: ["Task List", "Productivity", "UI"],
      category: "Web App"
    },
    {
      title: "Docsynecx",
      description: "The complete AI platform for documents.",
      image: "/docsynecx.svg",
      link: "https://github.com/RahulRavikumar0574/docsynecx",
      demoLink: "#",
      tech: ["AI", "Document Processing", "Web"],
      features: ["OCR", "Document AI", "Workflow"],
      category: "AI/ML"
    },
    {
      title: "AetherStay",
      description: "A modern hotel booking and billing app.",
      image: "/aetherstay.svg",
      link: "https://github.com/RahulRavikumar0574/Hotel_Management",
      demoLink: "#",
      tech: ["HTML", "CSS", "Node.js", "Express", "MongoDB"],
      features: ["Booking", "Billing", "Admin Dashboard"],
      category: "Web App"
    },
    {
      title: "AI Project",
      description: "Riya can be your All-in-One Assistant, from answering questions to engaging in casual conversations.",
      image: "/ai-project.svg",
      link: "https://github.com/RahulRavikumar0574/ai-project",
      demoLink: "#",
      tech: ["AI", "Chatbot", "Web"],
      features: ["Conversational AI", "Multi-Modal", "Assistant"],
      category: "AI/ML"
    },
  ];

  return (
    <section id="projects" className="py-20">
      {/* Hero Parallax Section */}
      <div className="mb-20">
        <HeroParallax products={heroProjects} />
      </div>

      {/* Featured Projects Section */}
      <div className="px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-full px-6 py-2 mb-6"
          >
            <IconRocket className="h-5 w-5 text-blue-400" />
            <span className="text-sm text-gray-300">Featured Projects</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Building Next-Gen<br />Innovations
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing cutting-edge projects that push the boundaries of technology
          </p>
        </motion.div>

        {/* 3D Pin Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PinContainer title={project.title} href={project.link} disableLink={true}>
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[25rem]">
                  {/* Project Image */}
                  <div className="w-full h-40 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={300}
                      height={160}
                      className="w-full h-full object-cover"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>

                  {/* Category Badge */}
                  <div className="mb-2">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-xs font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 text-sm line-clamp-3">
                      {project.description}
                    </span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mt-3 mb-3">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded-md text-xs">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <Modal>
                      <ModalTrigger className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-3 py-2 rounded-md text-xs font-medium transition-colors flex items-center justify-center gap-1">
                        <IconEye className="h-3 w-3" />
                        Details
                      </ModalTrigger>
                      <ModalBody>
                        <ModalContent>
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                                {project.category}
                              </span>
                            </div>

                            <Image
                              src={project.image}
                              alt={project.title}
                              width={500}
                              height={300}
                              className="w-full h-64 object-cover rounded-lg"
                              style={{ width: 'auto', height: 'auto' }}
                            />

                            <p className="text-gray-300 leading-relaxed">
                              {project.description}
                            </p>

                            <div>
                              <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                              <div className="grid grid-cols-2 gap-2">
                                {project.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                                    <span className="text-gray-300 text-sm">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-md text-sm"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="flex gap-4">
                              <button
                                onClick={() => window.open(project.link, '_blank')}
                                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                              >
                                <IconBrandGithub className="h-4 w-4" />
                                View Code
                              </button>
                              <button
                                onClick={() => window.open(project.demoLink, '_blank')}
                                className="flex-1 border border-gray-600 hover:border-gray-500 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                              >
                                <IconExternalLink className="h-4 w-4" />
                                Live Demo
                              </button>
                            </div>
                          </div>
                        </ModalContent>
                      </ModalBody>
                    </Modal>
                  </div>
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            <IconCode className="h-5 w-5" />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
