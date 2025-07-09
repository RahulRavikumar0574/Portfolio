"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import ProfileCard from "@/components/ui/ProfileCard";
import {
  IconMail,
  IconRocket,
  IconStar
} from "@tabler/icons-react";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={ref} id="home" className="min-h-screen pt-20 pb-20 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Removed LampContainer as absolute background */}
      {/* Hero content above LampContainer */}
      <div className="flex flex-col items-center justify-center w-full relative z-10">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-full px-6 py-2 mb-3"
        >
          <IconStar className="h-4 w-4 text-yellow-400" />
          <span className="text-sm text-gray-300">Available for Freelance Work</span>
          <IconStar className="h-4 w-4 text-yellow-400" />
        </motion.div>
        {/* Main Heading with Enhanced Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-1 bg-clip-text text-3xl font-medium tracking-tight text-transparent md:text-5xl"
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto]"
          >
            Rahul Ravikumar
          </motion.span>
        </motion.h1>
        {/* Subtitle with Typewriter Effect */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-neutral-300 mt-2 max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
            className="inline-block overflow-hidden whitespace-nowrap"
          >
            Full Stack Developer & Software Engineer
          </motion.span>
        </motion.p>
        {/* Enhanced Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-base text-neutral-400 mt-3 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate about creating{" "}
          <span className="text-blue-400 font-semibold">innovative solutions</span> and building{" "}
          <span className="text-purple-400 font-semibold">scalable applications</span> with modern technologies.
          Let&apos;s build something{" "}
          <span className="text-pink-400 font-semibold">amazing</span> together.
        </motion.p>
        <ProfileCard
          name="Rahul Ravikumar"
          title="Full Stack Developer"
          handle="@rahulravi0574"
          status="Available for Work"
          contactText="Get In Touch"
          avatarUrl="/Rahul.jpg"
          iconUrl="/placeholder.svg"
          grainUrl="/placeholder.svg"
          miniAvatarUrl="/Rahul.jpg"
          behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%)"
          innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          showUserInfo={true}
          enableTilt={true}
          className="w-full max-w-md scale-85 mx-auto"
          onContactClick={() => {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
      </div>
    </section>
  );
}