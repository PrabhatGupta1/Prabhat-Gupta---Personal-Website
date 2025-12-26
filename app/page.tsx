import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
// import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WaterRippleBackground } from "@/components/water-ripple-background"
import { FloatingParticles } from "@/components/floating-particles"

export default function Page() {
  return (
    <main className="min-h-screen relative">
      <WaterRippleBackground />
      <FloatingParticles />

      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        {/* <BlogSection /> */}
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
