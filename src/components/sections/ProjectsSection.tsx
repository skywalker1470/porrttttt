import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Featured Work</h2>
            </div>
          </Reveal>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Reveal key={index} delay={(index % 3) * 90}>
                <div className="group flex flex-col h-full p-6 rounded-none bg-background border border-border hover:border-primary/40 transition-colors duration-300">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <project.icon className="w-6 h-6 text-primary" />
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span className="text-xs text-primary font-mono">{project.subtitle}</span>
                    <h3 className="text-xl font-semibold mt-1 mb-3">
                      {project.slug ? (
                        <Link
                          to={`/projects/${project.slug}`}
                          className="hover:text-primary underline-offset-4 hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                          {project.title}
                        </Link>
                      ) : (
                        project.title
                      )}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-xs text-muted-foreground font-mono">
                        {tech}
                        {i < Math.min(project.technologies.length, 4) - 1 && " •"}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* View more button */}
          <Reveal>
            <div className="text-center mt-12">
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://github.com/skywalker1470" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  View More on GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
