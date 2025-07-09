"use client";
import { motion } from "motion/react";
import { Modal, ModalTrigger, ModalBody, ModalContent } from "@/components/ui/animated-modal";
import { FloatingDock } from "@/components/ui/floating-dock";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconPhone,
  IconMapPin,
  IconSend,
  IconDownload,
  IconCalendar,
  IconClock,

  IconMessage
} from "@tabler/icons-react";

export function ContactSection() {
  const contactMethods = [
    {
      icon: <IconMail className="h-8 w-8" />,
      title: "Email",
      description: "Drop me a line anytime",
      value: "rahulravi0574@gmail.com",
      href: "mailto:rahulravi0574@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <IconPhone className="h-8 w-8 flex items-center justify-center" />,
      title: "Phone",
      description: "Let's have a quick call",
      value: "+91 74483 18387",
      href: "tel:+917448318387",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <IconMapPin className="h-8 w-8" />,
      title: "Location",
      description: "Based in India",
      value: "Available for remote work",
      href: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <IconCalendar className="h-8 w-8" />,
      title: "Schedule",
      description: "Book a meeting",
      value: "Available Mon-Fri",
      href: "#",
      color: "from-orange-500 to-red-500"
    }
  ];

  const socialLinks = [
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-300" />,
      href: "https://github.com/RahulRavikumar0574",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-300" />,
      href: "https://www.linkedin.com/in/rahul-ravikumar-677102290",
    },
    {
      title: "Email",
      icon: <IconMail className="h-full w-full text-neutral-300" />,
      href: "mailto:rahulravi0574@gmail.com",
    },
    {
      title: "Resume",
      icon: <IconDownload className="h-full w-full text-neutral-300" />,
      href: "/resume.pdf",
    },
    {
      title: "Phone",
      icon: <IconPhone className="h-full w-full text-neutral-300" />,
      href: "tel:+919566397838",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 max-w-7xl mx-auto">
      {/* Header */}
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
          <IconMessage className="h-5 w-5 text-blue-400" />
          <span className="text-sm text-gray-300">Get In Touch</span>
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Ready to collaborate? Let&apos;s discuss your next project or just say hello!
        </p>
      </motion.div>

      {/* Contact Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {contactMethods.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="flex flex-col items-center text-center"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center mb-4 text-white`}>
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                  <p className="text-blue-400 font-medium text-sm">{method.value}</p>
                </CardItem>

                {method.href !== "#" && (
                  <CardItem
                    translateZ="60"
                    className="mt-4"
                  >
                    <a
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="w-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 hover:from-blue-500/30 hover:to-purple-600/30 text-blue-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-blue-500/20 block text-center"
                    >
                      Contact
                    </a>
                  </CardItem>
                )}
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>

      {/* Main Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <IconSend className="h-6 w-6 text-blue-400" />
              Send a Message
            </h3>

            <form 
              className="space-y-6"
              action="https://formspree.io/f/mpwrgnjp" 
              method="POST"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Project Discussion"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <IconSend className="h-5 w-5" />
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Contact Info & Availability */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Availability Card */}
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="text-xl font-bold text-white">Available for Work</h3>
            </div>
            <p className="text-gray-300 mb-4">
              I&apos;m currently available for freelance projects and full-time opportunities.
            </p>
            <div className="flex items-center gap-2 text-green-400">
              <IconClock className="h-4 w-4" />
              <span className="text-sm">Usually responds within 24 hours</span>
            </div>
          </div>

          {/* Quick Contact Options */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Quick Contact</h3>

            <Modal>
              <ModalTrigger className="w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-blue-500/20 flex items-center justify-center gap-2">
                <IconCalendar className="h-5 w-5" />
                Schedule a Call
              </ModalTrigger>
              <ModalBody>
                <ModalContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <IconCalendar className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Schedule a Call</h3>
                      <p className="text-gray-400">Let&apos;s discuss your project in detail</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg transition-colors">
                        15 min call
                      </button>
                      <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg transition-colors">
                        30 min call
                      </button>
                      <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg transition-colors">
                        45 min call
                      </button>
                      <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg transition-colors">
                        1 hour call
                      </button>
                    </div>

                    <div className="text-center">
                      <p className="text-gray-400 text-sm mb-4">Available Monday - Friday, 9 AM - 6 PM IST</p>
                      <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                        Book Now
                      </button>
                    </div>
                  </div>
                </ModalContent>
              </ModalBody>
            </Modal>

            <a
              href="mailto:rahulravi0574@gmail.com"
              className="w-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-purple-500/20 flex items-center justify-center gap-2"
            >
              <IconMail className="h-5 w-5" />
              Send Email
            </a>

            <a
              href="https://www.linkedin.com/in/rahul-ravikumar-677102290"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-blue-600/20 flex items-center justify-center gap-2"
            >
              <IconBrandLinkedin className="h-5 w-5" />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Dock */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex justify-center mb-16"
      >
        <FloatingDock
          items={socialLinks}
          desktopClassName="flex"
          mobileClassName="flex"
        />
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center border-t border-gray-800 pt-8"
      >
        <h3 className="text-2xl font-bold text-white mb-4">
          Rahul Ravikumar – FullStack Web Developer
        </h3>
        <p className="text-gray-400 mb-4">
          Building the future, one line of code at a time
        </p>
        <p className="text-gray-500 text-sm">
          © 2024 Rahul Ravikumar. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
}
