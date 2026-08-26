import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Smartphone, MessageSquare, ScanFace, Users, TrendingDown, Activity, Radio, Type, Banknote } from "lucide-react";
import Reveal from "@/components/Reveal";

const projects = [
  {
    icon: Type,
    title: "Classifier Robustness to Character-Level Noise",
    subtitle: "NLP / Robustness Research",
    description:
      "Controlled robustness study on SST-2 sentiment classification across four classifiers (Logistic Regression, Multinomial Naive Bayes, Linear SVM, Hard Voting Ensemble) under three character-level noise models at varying intensities and five random seeds. Paired t-tests across 15 noise conditions found no significant robustness gap between the ensemble and Logistic Regression, while Naive Bayes proved sensitive to out-of-vocabulary tokens under character-deletion noise.",
    technologies: ["Python", "Scikit-learn", "SST-2", "NLP", "Statistical Testing"],
    highlights: ["Paired t-Test", "15 Noise Conditions", "4 Classifiers"],
    github: "https://github.com/skywalker1470/Research_Methodolgy",
  },
  {
    icon: Radio,
    title: "Neural Digital Pre-Distortion (OpenDPD)",
    subtitle: "Signal Processing / Deep Learning",
    description:
      "Custom DPD backbone architectures integrated into the dpdOpen framework: a residual MLP (MyMLPDPD) and a bidirectional LSTM with single-head attention (MyLSTMDPD), both operating on IQ signal pairs. Evaluated on DPA_200MHz using EVM and NMSE metrics with multi-panel diagnostic plots covering AM/AM, PSD, and IQ constellations.",
    technologies: ["PyTorch", "BiLSTM", "Attention", "NumPy", "Signal Processing"],
    highlights: ["BiLSTM + Attention", "EVM / NMSE Eval", "Residual MLP"],
    github: "https://github.com/skywalker1470/OpenDPD_Project",
  },
  {
    icon: ScanFace,
    title: "Deepfake Detection System",
    subtitle: "Computer Vision",
    description:
      "Flask web app using fine-tuned EfficientNet-B0 for binary deepfake classification on the Celeb-DF dataset. MTCNN handles face detection and alignment with a frame-skip inference strategy. Output video is re-encoded to H.264 via ffmpeg for browser-compatible playback with per-frame FAKE/REAL overlays.",
    technologies: ["PyTorch", "EfficientNet-B0", "Flask", "MTCNN", "ffmpeg"],
    highlights: ["Frame-level Inference", "Flask Deployment", "H.264 Re-encoding"],
    github: "https://github.com/skywalker1470/DeepFakeReworked",
  },
  {
    icon: Activity,
    title: "Anomaly Detection in Heating Systems",
    subtitle: "Streaming ML Pipeline",
    description:
      "Real-time streaming anomaly detection pipeline for multi-room building heating systems using FP-Growth association rule mining. Sliding window approach achieves under 30s detection latency. Evaluated against Isolation Forest, K-Means, and DBSCAN baselines with agreement matrices and ROC-style curves.",
    technologies: ["Python", "FP-Growth", "NumPy", "SciPy", "Scikit-learn"],
    highlights: ["<30s Latency", "4 Baseline Comparison", "Pattern Stability Analysis"],
    github: "https://github.com/skywalker1470/Heating_System_Anomaly_Detection",
  },
  {
    icon: Banknote,
    title: "LSTM Autoencoder for Financial Fraud Detection",
    subtitle: "Unsupervised Anomaly Detection",
    description:
      "Unsupervised reconstruction-based fraud detection on a PaySim-like dataset of 6.36M transactions, using sliding windows of 10 chronologically ordered transactions to train single-layer and bidirectional LSTM autoencoders without fraud labels. The bidirectional autoencoder outperformed Isolation Forest even under extreme class imbalance, and diagnostic plots exposed a good-ranking-but-poor-precision tradeoff at fixed thresholds.",
    technologies: ["PyTorch", "LSTM", "Autoencoder", "Isolation Forest", "Time-Series"],
    highlights: ["ROC-AUC 0.838", "6.36M Transactions", "Unsupervised"],
    github: "https://github.com/skywalker1470/LSTM_Autoencoder_Financial_Fraud",
  },
  {
    icon: Users,
    title: "HR Analytics & Attrition Modeling",
    subtitle: "People Analytics",
    description:
      "End-to-end attrition analysis on the IBM HR Analytics dataset (1,470 records, 35 features). Applied Mann-Whitney U, Chi-square, and point-biserial statistical tests to identify key drivers: overtime, job satisfaction, and years since last promotion. Built Logistic Regression and Random Forest classifiers with cohort-based retention analysis across 8 quarterly hiring cohorts.",
    technologies: ["Python", "Scikit-learn", "SciPy", "Pandas", "Matplotlib"],
    highlights: ["Statistical Hypothesis Testing", "Cohort Retention Analysis", "Dual Classifiers"],
    github: "https://github.com/skywalker1470/HR-Analytics",
  },
  {
    icon: TrendingDown,
    title: "Customer Segmentation & Churn Prediction",
    subtitle: "ML & Analytics",
    description:
      "End-to-end pipeline combining K-Means clustering (K=4) for customer segmentation with a Gradient Boosting classifier for churn prediction. Achieved CV ROC AUC of 0.87 ± 0.01 on 5-fold stratified cross-validation. Segments include Champions, Loyalists, Dormant, and At-Risk customers.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "PCA", "Pandas"],
    highlights: ["ROC AUC: 0.87", "4 Customer Segments", "Interactive Dashboard"],
    github: "https://github.com/skywalker1470/Customer_segmentation_and_Churn",
  },
  {
    icon: Smartphone,
    title: "MNIST Digit Classification",
    subtitle: "PyTorch Mobile",
    description:
      "A digit recognition Android app using PyTorch Mobile and MNIST dataset. Built a lightweight CNN model achieving ~98% accuracy, optimized for mobile inference using TorchScript.",
    technologies: ["PyTorch", "Android", "CNN", "TorchScript", "Mobile ML"],
    highlights: ["Mobile Optimized", "Real-time Inference"],
    github: "https://github.com/skywalker1470/MNIST_project",
  },
  {
    icon: MessageSquare,
    title: "Real-Time Chat App",
    subtitle: "AWS Powered",
    description:
      "Full-stack real-time chat application built with AWS services. Features authentication via Cognito, serverless Lambda functions, and DynamoDB for persistent storage.",
    technologies: ["AWS", "Cognito", "Lambda", "DynamoDB", "S3", "JavaScript"],
    highlights: ["Real-time Messaging", "Serverless", "Secure Auth"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Featured Work</h2>
            </div>
          </Reveal>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Reveal key={index} delay={(index % 3) * 90}>
                <div className="group flex flex-col h-full p-6 rounded-none bg-background border border-border hover:border-primary/40 transition-colors duration-300">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <project.icon className="w-6 h-6 text-primary" />
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span className="text-xs text-primary font-mono">{project.subtitle}</span>
                    <h3 className="text-xl font-semibold mt-1 mb-3">{project.title}</h3>
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
              </Reveal>
            ))}
          </div>

          {/* View more button */}
          <Reveal>
            <div className="text-center mt-12">
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://github.com/skywalker1470" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  View More on GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
