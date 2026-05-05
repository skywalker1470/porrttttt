import { Code2, Brain, Cloud, Wrench } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Applied Machine Learning",
    description:
      "Deepfake detection, anomaly detection, and neural signal processing using PyTorch",
  },
  {
    icon: Code2,
    title: "Deep Learning Systems",
    description:
      "Built CNN, RNN, and BiLSTM models with attention, optimization, and evaluation pipelines",
  },
  {
    icon: Wrench,
    title: "Optimization & Algorithms",
    description:
      "Hybrid metaheuristics, genetic algorithms, and surrogate-assisted optimization (DRDO)",
  },
  {
    icon: Cloud,
    title: "MLOps & Deployment",
    description:
      "Flask apps, Docker, AWS, and end-to-end ML pipelines",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">
              01. About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Who I Am
            </h2>
          </div>

          {/* About content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a Master's student in Computer Science at Blekinge Tekniska
                Högskola with a strong focus on applied machine learning and
                optimization. I’ve worked on problems ranging from deepfake
                detection and anomaly detection to neural signal processing and
                time-series modeling.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                During my research internship at DRDO, I developed a hybrid
                optimization framework combining genetic algorithms with deep
                neural network surrogates, achieving up to 10x faster convergence
                on large-scale combinatorial problems.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I enjoy building end-to-end systems — from designing models like
                BiLSTMs with attention to deploying real-world applications using
                Flask, Docker, and AWS.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-background border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  9.1/10
                </div>
                <div className="text-sm text-muted-foreground">
                  GPA (JNTUH)
                </div>
              </div>

              <div className="p-6 rounded-xl bg-background border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  10+
                </div>
                <div className="text-sm text-muted-foreground">
                  ML Projects
                </div>
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
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
