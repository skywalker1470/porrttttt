import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] bg-primary/[0.04] rounded-none blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-none border border-border mb-8">
              <span className="w-1.5 h-1.5 bg-primary rounded-none" />
              <span className="text-sm text-muted-foreground">Available for Master's Thesis & Internships</span>
            </div>
          </Reveal>

          {/* Main heading */}
          <Reveal delay={80}>
            <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight">
              Hi, I'm{" "}
              <span className="text-gradient">Yaswanth Deevi</span>
            </h1>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={140}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              <span className="text-primary font-medium">Computer Vision</span> &{" "}
              <span className="text-primary font-medium">Deep Learning</span> Engineer
            </p>
          </Reveal>

          {/* Description */}
          <Reveal delay={200}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Focused on <span className="text-foreground">deep learning</span>,{" "}
              <span className="text-foreground">computer vision</span>, and multi-modal
              sensor fusion, from model compression and cross-hardware deployment to knowledge
              transfer for autonomous systems. Currently pursuing a Master's at BTH, Sweden.
            </p>
          </Reveal>

          {/* Contact info */}
          <Reveal delay={260}>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a
                href="tel:+46 793430467"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+46 793430467</span>
              </a>
              <a
                href="mailto:dvnsyaswanth@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>dvnsyaswanth@gmail.com</span>
              </a>
              <span className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Karlskrona, Sweden</span>
              </span>
            </div>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={320}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button variant="hero" size="lg" onClick={scrollToContact}>
                <Mail className="w-5 h-5" />
                Get In Touch
              </Button>
              <Button variant="heroOutline" size="lg" onClick={scrollToProjects}>
                View Projects
              </Button>
            </div>
          </Reveal>

          {/* Social Links */}
          <Reveal delay={380}>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/yaswanth-deevi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/skywalker1470"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-none border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-none" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
