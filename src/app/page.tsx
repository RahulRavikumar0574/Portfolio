"use client";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
// import { ProfileSection } from "@/components/sections/ProfileSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        {/* <ProfileSection /> */}
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
}
