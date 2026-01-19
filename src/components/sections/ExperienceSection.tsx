import { Briefcase, Calendar, MapPin } from "lucide-react";

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

          {/* Experience card */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

            <div className="relative md:pl-0">
              <div className="md:w-1/2 md:ml-auto md:pl-12">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background" />

                <div className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 glow-soft">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Briefcase className="w-5 h-5" />
                    <span className="font-semibold">Research Intern</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    Defence Research and Development Organisation (DRDO)
                  </h3>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      July 2025 - September 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Hyderabad, Telangana
                    </span>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="text-primary mt-1.5">▸</span>
                      <span className="text-muted-foreground">
                        Designed and implemented a hybrid metaheuristic optimization framework 
                        combining evolutionary strategies with deep neural networks, achieving 
                        up to <span className="text-primary font-semibold">~10x faster</span> solution 
                        convergence on large-scale P-Center Problems.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1.5">▸</span>
                      <span className="text-muted-foreground">
                        Enhanced population diversity in evolutionary algorithms using rank-based 
                        probabilistic selection, improving solution quality by 
                        <span className="text-primary font-semibold"> ~15%</span>.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1.5">▸</span>
                      <span className="text-muted-foreground">
                        Developed a self-adaptive Gaussian mutation mechanism, dynamically optimizing 
                        mutation rates and increasing search efficiency by over 
                        <span className="text-primary font-semibold"> ~20%</span>.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1.5">▸</span>
                      <span className="text-muted-foreground">
                        Created and trained deep neural network surrogate models to approximate 
                        costly fitness evaluations, reducing overall computational time by 
                        <span className="text-primary font-semibold"> ~70%</span>.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;