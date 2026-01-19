import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for Internships</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Hi, I'm{" "}
            <span className="text-gradient">Yaswanth Deevi</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Computer Science Engineer & Developer
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Passionate about building efficient algorithms, web applications, and machine learning solutions. 
            Currently pursuing Master's at BTH Sweden.
          </p>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <a 
              href="tel:+919912445222" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 9912445222</span>
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
              <span>Hyderabad, India</span>
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="lg" onClick={scrollToContact}>
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>
            <Button variant="heroOutline" size="lg" onClick={scrollToProjects}>
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <a
              href="https://www.linkedin.com/in/yaswanth-deevi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/skywalker1470"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;