import { Briefcase, Calendar, MapPin, Github } from "lucide-react";
import Reveal from "@/components/Reveal";

const experiences = [
  {
    role: "Computer Vision Engineer (Pose & Interaction)",
    company: "SolarFi's FairWAI",
    note: "Full work under NDA",
    period: "June 2026 - August 2026",
    location: "Boston, USA",
    github: "https://github.com/skywalker1470/PoseApp",
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
        Prototyped a <span className="text-primary font-semibold">YOLOv8 and solvePnP-based 3D head-pose estimation</span>{" "}
        enhancement for two underperforming interaction primitives, layered onto the production
        pipeline (validated at <span className="text-primary font-semibold">macro F1 0.853</span> across
        148 labeled clips) through an isolated wrapper architecture that kept the existing system
        unaffected.
      </>,
      <>
        Built a standalone rule-only A/B evaluation harness to test the new signal against
        ground-truth data at zero retraining cost, and documented the comparison, including a
        negative result on one primitive, in a fairness-aware technical report.
      </>,
      <>
        Ran per-primitive precision/recall and skin-tone/ethnicity disparity analysis across{" "}
        <span className="text-primary font-semibold">50 clips</span> to validate accuracy and
        fairness across demographics.
      </>,
      <>
        Worked as part of a 3-person team, providing events and track IDs and holding hardware
        integration meetings <span className="text-primary font-semibold">three times a week</span>.
      </>,
    ],
  },
  {
    role: "Research Intern",
    company: "Defence Research and Development Organisation (DRDO)",
    note: null,
    period: "July 2025 - September 2025",
    location: "Hyderabad, Telangana",
    github: "https://github.com/skywalker1470/DRDO",
    bullets: [
      <>
        Developed and tested a novel approach to the P-Center facility location problem, combining
        an evolutionary Invasive Weed Optimization algorithm with deep neural network fitness
        function approximation.
      </>,
      <>
        Implemented a rank-based probability scheme for parent/survivor selection to maintain
        population diversity and prevent premature convergence, paired with a self-adaptive
        Gaussian mutation strategy using a logarithmic update law for mutation strength.
      </>,
      <>
        Demonstrated up to <span className="text-primary font-semibold">100x speedup</span> over
        pure Invasive Weed Optimization (371.03s to 3.11s at N=3000, P=100) at the cost of a small
        drop in solution quality, benchmarked across instances from N=10 to N=3000 nodes and P=3
        to P=100 centers on symmetric random distance matrices.
      </>,
      <>
        Trained a surrogate neural network on fitness data gathered from the evolutionary runs,
        showing prediction accuracy improves with training data volume{" "}
        <span className="text-primary font-semibold">(R² ~0.12-0.67)</span> across instance sizes.
      </>,
      <>
        Built a variant of the Artificial Bee Colony algorithm as an additional baseline to
        compare the hybrid approach against a different metaheuristic from the literature.
      </>,
      <>
        Wrote a technical report formulating the task as an integer linear program and presenting
        a comparative experimental study of the algorithms.
      </>,
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Work Experience</h2>
            </div>
          </Reveal>

          {/* Experience timeline */}
          <div className="relative">
            {/* Timeline rail */}
            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-primary via-border to-transparent" />

            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <Reveal key={index} delay={index * 120}>
                  <div className="relative pl-10">
                    {/* Timeline marker */}
                    <span
                      className={`absolute left-0 top-2 w-[15px] h-[15px] border-2 border-primary ${
                        index === 0 ? "bg-primary" : "bg-background"
                      }`}
                    />

                    <div className="p-6 md:p-8 bg-card border border-border hover:border-primary/40 transition-colors duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Briefcase className="w-4 h-4 text-primary" />
                            <h3 className="text-xl font-semibold">{exp.role}</h3>
                          </div>
                          <p className="text-primary font-medium">
                            {exp.company}
                            {exp.note && (
                              <span className="text-muted-foreground font-normal italic"> ({exp.note})</span>
                            )}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          {index === 0 && (
                            <span className="px-2 py-1 text-xs font-mono uppercase tracking-wide border border-primary text-primary">
                              Latest
                            </span>
                          )}
                          {exp.github && (
                            <a
                              href={exp.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${exp.company} repository on GitHub`}
                              className="flex items-center gap-1.5 px-2 py-1 text-xs font-mono border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                            >
                              <Github className="w-3.5 h-3.5" />
                              Repo
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-4 mb-6">
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
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;