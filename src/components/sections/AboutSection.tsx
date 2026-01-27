import { Code2, Brain, Cloud, Wrench } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "MERN Stack, RESTful APIs, and modern web technologies",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "PyTorch, Deep Learning, and optimization algorithms",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS, Docker, Git, and CI/CD pipelines",
  },
  {
    icon: Wrench,
    title: "Problem Solving",
    description: "Algorithm design and performance optimization",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">01. About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Who I Am</h2>
          </div>

          {/* About content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm an enthusiastic Computer Science Engineering student with a passion for 
                building innovative software solutions. My experience spans from designing 
                hybrid metaheuristic optimization frameworks at DRDO to creating mobile ML 
                applications.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Currently pursuing my Master's in Computer Science at Blekinge Tekniska Högskola, 
                Sweden, I'm actively seeking opportunities to contribute to cutting-edge projects 
                and grow as a developer.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to 
                open-source projects, and solving algorithmic challenges.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-background border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">8.54/10</div>
                <div className="text-sm text-muted-foreground">GPA at JNTUH</div>
              </div>
              <div className="p-6 rounded-xl bg-background border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">4</div>
                <div className="text-sm text-muted-foreground">Major Projects</div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;