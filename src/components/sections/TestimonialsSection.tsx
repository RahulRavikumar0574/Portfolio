"use client";
import { motion } from "motion/react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { IconQuote, IconExternalLink } from "@tabler/icons-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Rahul's work on BaldSphere - the interactive 3D brain visualization tool - was groundbreaking. Their expertise with Next.js, Three.js, and PostgreSQL created an innovative platform that maps actions to brain regions with stunning visual clarity.",
      name: "Sarah Chen",
      designation: "Tech Lead, AI Labs",
      src: "/placeholder.svg"
    },
    {
      quote: "The QuiznNotes platform Rahul developed for us exceeded all expectations. The seamless integration between frontend and backend, along with the intuitive user interface, made learning and note-taking truly engaging.",
      name: "Michael Rodriguez",
      designation: "Project Manager, Tech Innovations Inc",
      src: "/placeholder.svg"
    },
    {
      quote: "Rahul's Hotel Management system transformed our operations. The modern booking and billing app built with Node.js, Express, and MongoDB streamlined our entire process, making smart stays truly simplified.",
      name: "Emily Johnson",
      designation: "CEO, StartupXYZ",
      src: "/placeholder.svg"
    },
    {
      quote: "Working with Rahul on our Brain Tumor Detection project was exceptional. Their ability to handle complex medical imaging data and create accurate detection algorithms demonstrated both technical skill and domain expertise.",
      name: "David Kim",
      designation: "Creative Director, Digital Agency Pro",
      src: "/placeholder.svg"
    },
    {
      quote: "The fullstack applications Rahul delivered consistently showcase their versatility. From e-commerce platforms to AI-powered task managers, their solutions are always robust, scalable, and user-friendly.",
      name: "Lisa Wang",
      designation: "CTO, FinTech Solutions",
      src: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        {/* Console Log Effect */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-gray-900 rounded-lg px-6 py-3 mb-8 border border-gray-700"
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="ml-4">
              <span className="text-green-400 font-mono">console</span>
              <span className="text-white mx-1">.</span>
              <span className="text-blue-400 font-mono">log</span>
              <span className="text-white mx-1">(</span>
              <span className="text-yellow-400 font-mono">&quot;Client Impact&quot;</span>
              <span className="text-white">)</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-full px-6 py-2 mb-6"
        >
          <IconQuote className="h-5 w-5 text-blue-400" />
          <span className="text-sm text-gray-300">Client Testimonials</span>
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          What Clients Say
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Real feedback from amazing clients I&apos;ve had the pleasure to work with
        </p>
      </motion.div>

      {/* Animated Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Work Together?
          </h3>
          <p className="text-gray-400 mb-6">
            Join these amazing clients and let&apos;s build something incredible together
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            <IconExternalLink className="h-5 w-5" />
            Start Your Project
          </a>
        </div>
      </motion.div>
    </section>
  );
}
