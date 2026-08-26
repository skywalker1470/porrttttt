import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/skywalker1470"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/yaswanth-deevi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:dvnsyaswanth@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;