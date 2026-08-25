import Reveal from "@/components/Reveal";

const skillCategories = [
  {
    title: "Computer Vision & Perception",
    skills: [
      "CNNs",
      "Pose Estimation (Apple Vision, MoveNet)",
      "Face Detection & Alignment (MTCNN)",
      "Frame-level Classification",
      "Multi-modal Signal/Image Processing",
    ],
  },
  {
    title: "Deep Learning & Transfer",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "RNNs",
      "BiLSTM with Attention",
      "Transfer Learning",
      "Model Quantization (INT8/4-bit)",
      "Model Pruning",
      "ONNX",
      "Core ML",
    ],
  },
  {
    title: "Optimization & Efficiency",
    skills: [
      "Evolutionary Algorithms",
      "Surrogate Modeling",
      "Combinatorial Optimization",
      "Metaheuristics",
      "Hardware-aware Trade-offs",
    ],
  },
  {
    title: "Machine Learning & Statistics",
    skills: [
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "Gradient Boosting",
      "Random Forests",
      "PCA",
      "SHAP",
      "Statistical Hypothesis Testing",
    ],
  },
  {
    title: "Data & Analytics",
    skills: ["NumPy", "Pandas", "SciPy", "Matplotlib", "Seaborn", "Time-Series Analysis"],
  },
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "SQL", "Bash Scripting"],
  },
  {
    title: "Extra Skills",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
      "JavaScript (ES6+)",
      "TypeScript",
      "AWS (S3, Lambda)",
      "Docker",
      "Git",
      "GitHub",
      "Jenkins",
      "Linux",
      "Jupyter",
      "Flask Deployment",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Technologies I Work With</h2>
            </div>
          </Reveal>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Reveal key={index} delay={(index % 3) * 90}>
                <div className="p-6 rounded-none bg-card border border-border hover:border-primary/30 transition-colors duration-300">
                  <h3 className="font-medium text-lg mb-4 text-primary">{category.title}</h3>
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
              </Reveal>
            ))}
          </div>

          {/* Tech logos decoration */}
          <Reveal delay={150}>
            <div className="mt-16 text-center">
              <p className="text-muted-foreground text-sm mb-6">
                Constantly learning and exploring new technologies
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {["PyTorch", "Python", "TensorFlow", "ONNX", "Core ML", "Docker"].map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 rounded-none border border-border text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;