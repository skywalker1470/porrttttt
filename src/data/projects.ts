import { Smartphone, MessageSquare, ScanFace, Users, TrendingDown, Activity, Radio, Type, Banknote, Gauge, type LucideIcon } from "lucide-react";

export interface Project {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  highlights: string[];
  github?: string;
  slug?: string;
  readmeUrl?: string;
  older?: boolean;
}

export const projects: Project[] = [
  {
    icon: Type,
    title: "Classifier Robustness to Character-Level Noise",
    subtitle: "NLP / Robustness Research",
    description:
      "Controlled robustness study on SST-2 sentiment classification across four classifiers (Logistic Regression, Multinomial Naive Bayes, Linear SVM, Hard Voting Ensemble) under three character-level noise models at varying intensities and five random seeds. Paired t-tests across 15 noise conditions found no significant robustness gap between the ensemble and Logistic Regression, while Naive Bayes proved sensitive to out-of-vocabulary tokens under character-deletion noise.",
    technologies: ["Python", "Scikit-learn", "SST-2", "NLP", "Statistical Testing"],
    highlights: ["Paired t-Test", "15 Noise Conditions", "4 Classifiers"],
    github: "https://github.com/skywalker1470/Research_Methodolgy",
    slug: "classifier-robustness",
    readmeUrl: "https://raw.githubusercontent.com/skywalker1470/Research_Methodolgy/main/README.md",
  },
  {
    icon: Gauge,
    title: "AI-Based Fault Detection & Parameter Quantification on Engine Sensor Data",
    subtitle: "Surrogate Modeling / Predictive Maintenance",
    description:
      "Surrogate-model pipeline for the NASA C-MAPSS turbofan engine degradation dataset, replacing an expensive per-row physics-style calculation with a DNN surrogate, cutting RUL prediction error from RMSE 70.9 to 15.4. A fault detection layer atop the surrogate output compares Isolation Forest, rule-based deviation detection, surrogate threshold detection, and a hybrid surrogate-and-rule approach, with the hybrid achieving the best precision/recall trade-off (F1 0.813). A three-way ablation (exact physics-style vs. surrogate vs. hybrid) surfaced a negative result: OR-combining detectors lowers precision.",
    technologies: ["Python", "PyTorch", "Surrogate Modeling", "C-MAPSS", "Isolation Forest"],
    highlights: ["RMSE 70.9 → 15.4", "F1 0.813", "3-Way Ablation Study"],
    github: "https://github.com/skywalker1470/AI_Based_Parameter_Quantification",
    slug: "engine-fault-detection",
    readmeUrl: "https://raw.githubusercontent.com/skywalker1470/AI_Based_Parameter_Quantification/main/README.md",
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
    slug: "opendpd",
    readmeUrl: "https://raw.githubusercontent.com/skywalker1470/OpenDPD_Project/main/README.md",
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
    slug: "deepfake-detection",
    readmeUrl: "https://raw.githubusercontent.com/skywalker1470/DeepFakeReworked/main/readme.md",
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
    slug: "heating-anomaly-detection",
    readmeUrl: "https://raw.githubusercontent.com/skywalker1470/Heating_System_Anomaly_Detection/main/README.md",
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
    slug: "lstm-fraud-detection",
    readmeUrl: "https://raw.githubusercontent.com/skywalker1470/LSTM_Autoencoder_Financial_Fraud/main/README.md",
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
    slug: "hr-analytics",
    readmeUrl: "https://raw.githubusercontent.com/skywalker1470/HR-Analytics/main/README.md",
    older: true,
  },
  {
    icon: TrendingDown,
    title: "Customer Segmentation & Churn Prediction",
    subtitle: "ML & Analytics",
    description:
      "End-to-end pipeline combining K-Means clustering (K=4) for customer segmentation with a Gradient Boosting classifier for churn prediction. Achieved CV ROC AUC of 0.87 ± 0.01 on 5-fold stratified cross-validation. Segments include Champions, Loyalists, Dormant, and At-Risk customers.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "PCA", "Pandas"],
    highlights: ["ROC AUC: 0.87", "4 Customer Segments", "Interactive Dashboard"],
    older: true,
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
    slug: "mnist-digit-classification",
    readmeUrl: "https://raw.githubusercontent.com/skywalker1470/MNIST_project/main/README.md",
    older: true,
  },
  {
    icon: MessageSquare,
    title: "Real-Time Chat App",
    subtitle: "AWS Powered",
    description:
      "Full-stack real-time chat application built with AWS services. Features authentication via Cognito, serverless Lambda functions, and DynamoDB for persistent storage.",
    technologies: ["AWS", "Cognito", "Lambda", "DynamoDB", "S3", "JavaScript"],
    highlights: ["Real-time Messaging", "Serverless", "Secure Auth"],
    older: true,
  },
];
