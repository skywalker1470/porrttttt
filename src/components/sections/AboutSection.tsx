import { Code2, Brain, Cloud, Wrench } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Computer Vision & Perception",
    description:
      "Multi-person pose estimation, deepfake detection, and multi-modal sensor fusion across camera, pose, and raw signal streams",
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
                I'm a Computer Science Master's student at Blekinge Tekniska Högskola (BTH) with
                substantial experience in deep learning, computer vision, and processing
                multi-modal sensor streams, combining camera, pose, and raw signal data into a
                unified decision-making pipeline.
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
                speeding up convergence by an order of magnitude. I'm keen to apply this
                expertise in transfer learning and federated learning to heterogeneous object
                detection in autonomous vehicles.
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
