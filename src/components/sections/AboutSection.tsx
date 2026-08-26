import { Code2, Brain, Cloud, Wrench } from "lucide-react";
import Reveal from "@/components/Reveal";

const highlights = [
  {
    icon: Brain,
    title: "Computer Vision & Perception",
    description:
      "Multi-person pose estimation, deepfake detection, and frame-level video classification",
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
    title: "Model Compression & Deployment",
    description:
      "Transfer learning, quantization/pruning, and cross-architecture deployment on Neural Engine and CPU",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Who I Am
              </h2>
            </div>
          </Reveal>

          {/* About content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <Reveal delay={60}>
              <div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a Computer Science Master's student at Blekinge Tekniska Högskola (BTH) with
                  substantial experience in{" "}
                  <span className="text-foreground">deep learning</span> and{" "}
                  <span className="text-foreground">computer vision</span>, building systems that
                  combine camera, pose, and signal inputs into a single decision-making pipeline.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  As a Computer Vision Engineer at SolarFi's FairWAI, I built a multi-person pose
                  perception pipeline across two radically different hardware backends, Apple
                  Vision on iPhone Neural Engine and INT8-quantized MoveNet on CPU, fusing both
                  into a single interface for a vision-language model to reason over.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  While interning at DRDO, I built a hybrid evolutionary optimization framework
                  that replaces costly fitness evaluations with a deep neural network surrogate,
                  speeding up convergence by an order of magnitude.
                </p>
              </div>
            </Reveal>

            {/* Stats */}
            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-none border border-border text-center">
                  <div className="text-4xl font-semibold text-primary mb-2">
                    9.1/10
                  </div>
                  <div className="text-sm text-muted-foreground">
                    GPA (JNTUH)
                  </div>
                </div>

                <div className="p-6 rounded-none border border-border text-center">
                  <div className="text-4xl font-semibold text-primary mb-2">
                    10+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    ML Projects
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Reveal key={index} delay={index * 80}>
                <div className="p-6 rounded-none border border-border hover:border-primary/40 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary mb-4" />
                  <h3 className="font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
