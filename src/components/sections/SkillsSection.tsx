const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C++", "Python", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "Web Development",
    skills: ["React", "Node.js", "Express.js", "MongoDB", "RESTful APIs"],
  },
  {
    title: "Machine Learning",
    skills: ["PyTorch", "Deep Learning", "CNN Architecture", "Data Preprocessing"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (S3, Lambda)", "Docker", "Git", "GitHub", "Jenkins"],
  },
  {
    title: "Other Skills",
    skills: ["Linux", "Agile", "Code Reviews", "Flutter Basics"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">04. Skills</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Technologies I Work With</h2>
          </div>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="font-semibold text-lg mb-4 text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech logos decoration */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground text-sm mb-6">
              Constantly learning and exploring new technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["React", "Python", "AWS", "TypeScript", "PyTorch", "Docker"].map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-all"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;