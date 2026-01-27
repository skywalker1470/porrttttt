import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Smartphone, MessageSquare, Brain , ScanFace} from "lucide-react";

const projects = [
  {
    icon: Smartphone,
    title: "MNIST Digit Classification",
    subtitle: "PyTorch Mobile",
    description:
      "A digit recognition Android app using PyTorch Mobile and MNIST dataset. Built a lightweight CNN model achieving ~98% accuracy, optimized for mobile inference using TorchScript.",
    technologies: ["PyTorch", "Android", "CNN", "TorchScript", "Mobile ML"],
    highlights: ["Mobile Optimized", "Real-time Inference"],
    github: "https://github.com/skywalker1470",
  },
  {
    icon: MessageSquare,
    title: "Real-Time Chat App",
    subtitle: "AWS Powered",
    description:
      "Full-stack real-time chat application built with AWS services. Features authentication via Cognito, serverless Lambda functions, and DynamoDB for persistent storage.",
    technologies: ["AWS", "Cognito", "Lambda", "DynamoDB", "S3", "JavaScript"],
    highlights: ["Real-time Messaging", "Serverless", "Secure Auth"],
    github: "https://github.com/skywalker1470",
  },
  {
    icon: Brain,
    title: "Hybrid Optimization Framework",
    subtitle: "DRDO Research",
    description:
      "Metaheuristic optimization combining evolutionary strategies with deep neural networks. Achieved 10x faster convergence on P-Center Problems with 70% reduction in computation time.",
    technologies: ["Python", "Deep Learning", "Evolutionary Algorithms", "NumPy"],
    highlights: ["70% Time Saved", "Research Grade"],
    github: "https://github.com/skywalker1470",
  },
  {
    icon: ScanFace,
    title: "Deepfake Detection System",
    subtitle: "Computer Vision",
    description:
      "Flask web app with PyTorch Xception CNN for real-time video deepfake detection. Uses hybrid transfer learning with MTCNN face preprocessing and Docker deployment.",
    technologies: ["PyTorch", "Flask", "CNN", "Docker", "MTCNN"],
    highlights: ["Transfer Learning", "Real-time Detection", "Docker"],
    github: "https://github.com/skywalker1470/DeepFakeDetection",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">03. Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Featured Work</h2>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group flex flex-col p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-primary"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <span className="text-xs text-primary font-mono">{project.subtitle}</span>
                  <h3 className="text-xl font-bold mt-1 mb-3">{project.title}</h3>
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
            ))}
          </div>

          {/* View more button */}
          <div className="text-center mt-12">
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://github.com/skywalker1470" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View More on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;