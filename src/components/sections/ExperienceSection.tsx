import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Computer Vision Engineer (Pose & Interaction)",
    company: "SolarFi's FairWAI",
    period: "June 2026 - August 2026",
    location: "Boston, USA",
    bullets: [
      <>
        Built a perception pipeline for multi-person pose estimation across two hardware
        backends: <span className="text-primary font-semibold">Apple Vision on iPhone Neural Engine</span> and{" "}
        <span className="text-primary font-semibold">INT8-quantized MoveNet Lightning on CPU</span>, meeting
        matched accuracy and latency constraints without retraining from scratch.
      </>,
      <>
        Designed a hardware-agnostic interaction layer, a temporal pose-to-primitives mapping
        system combining geometric heuristics with a calibrated MLP, to fuse keypoints from both
        backbones into a common downstream representation.
      </>,
      <>
        Iteratively built a compact, budgeted textual summary combining multi-person pose with
        interaction state into a single interface for a vision-language model to reason over.
      </>,
      <>
        Added calibrated confidence scoring and temporal smoothing so noise from either backend
        did not corrupt the fused representation.
      </>,
      <>
        Ran per-primitive precision/recall and skin-tone/ethnicity disparity analysis across{" "}
        <span className="text-primary font-semibold">50 clips</span> to validate accuracy and
        fairness across demographics.
      </>,
      <>
        Collaborated within a 3-person team, syncing on events and track IDs through biweekly
        hardware integration meetings.
      </>,
    ],
  },
  {
    role: "Research Intern",
    company: "Defence Research and Development Organisation (DRDO)",
    period: "July 2025 - September 2025",
    location: "Hyderabad, Telangana",
    bullets: [
      <>
        Developed a novel approach to the P-Center Facility Location problem, replacing costly
        fitness evaluations with a pre-trained deep neural network surrogate, transferring
        knowledge from an expensive exact model to a cheaper approximation and speeding up
        convergence by <span className="text-primary font-semibold">an order of magnitude</span>.
      </>,
      <>
        Designed adaptive Gaussian mutations with population-diversity-based sigma scaling to
        balance exploration and exploitation without re-evaluating the whole search space.
      </>,
      <>
        Ran ablation studies comparing full-exact, surrogate-only, and hybrid evaluation
        strategies to quantify the accuracy/efficiency tradeoff of replacing exact computation
        with a learned model.
      </>,
      <>
        Achieved <span className="text-primary font-semibold">8-10x faster</span> convergence
        than standard genetic algorithms, with solutions within{" "}
        <span className="text-primary font-semibold">1.5%</span> of optimal on OR-Lib and TSPLIB
        benchmarks.
      </>,
      <>Collaborated with senior scientists to document methods and report results.</>,
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">02. Experience</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Work Experience</h2>
          </div>

          {/* Experience timeline */}
          <div className="relative space-y-12">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative md:pl-0">
                <div className="md:w-1/2 md:ml-auto md:pl-12">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background" />

                  <div className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 glow-soft">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Briefcase className="w-5 h-5" />
                      <span className="font-semibold">{exp.role}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-3">{exp.company}</h3>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-4">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-primary mt-1.5">▸</span>
                          <span className="text-muted-foreground">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;