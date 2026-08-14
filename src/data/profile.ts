export const homeQuote =
  'If we let ourselves, we shall always be waiting for some distraction or other to end before we can really get down to our work. The only people who achieve much are those who want knowledge so badly that they seek it while the conditions are still unfavorable. Favorable conditions never come.';

export const intro =
  "I'm a computer science master's student at the University of Georgia working where optimization research meets dependable ML engineering. My work usually starts from an experimental question and ends in tooling: training loops, reproducible pipelines, and benchmarking.";

export const focusAreas = [
  {
    title: 'Optimization',
    body: 'Zeroth-order fine-tuning for language and vision models, with an emphasis on stability, estimator behavior, and memory-aware training.',
  },
  {
    title: 'Experiment Systems',
    body: 'SLURM-driven sweeps, structured artifacts, resumable studies, and reproducible pipelines built to survive large weekly trial counts.',
  },
  {
    title: 'Deployment Thinking',
    body: 'Compression, robustness, offloading, and practical model behavior under real compute and communication constraints.',
  },
];

export const education = [
  {
    school: 'University of Georgia',
    degree: 'M.S. Computer Science',
    location: 'Athens, GA',
    dates: 'Aug. 2024 - Aug. 2026',
    detail:
      'GPA 3.90/4.00. Coursework includes Computer Vision, Advanced Data-Intensive Computing, Algorithms, Operating Systems, Software Engineering, and Efficient Deep Learning.',
  },
  {
    school: 'Rajasthan Technical University',
    degree: 'B.Tech. Computer Science and Engineering',
    location: 'Jaipur, India',
    dates: 'Aug. 2019 - June 2023',
    detail:
      'GPA 8.88/10.0. Relevant coursework includes Object Oriented Programming, Data Structures, Big Data Analytics, and Internet of Things.',
  },
];

export const experience = [
  {
    title: 'Graduate Research Assistant',
    org: 'University of Georgia',
    location: 'Athens, GA',
    dates: 'May 2026 - Aug. 2026',
    summary: 'Zeroth-order optimizers for transformer fine-tuning.',
    points: [
      'Implemented optimizer variants for memory-efficient fine-tuning across RoBERTa-large and OPT-family pipelines.',
      'Focused on stability, query efficiency, and scalable transformer tuning without backpropagation.',
      'Built a journal-backed distributed HPO workflow with SLURM arrays, pruning, resumable studies, structured artifacts, and replayable stability checks.',
    ],
  },
  {
    title: 'Graduate Researcher',
    org: 'University of Georgia',
    location: 'Athens, GA',
    dates: 'Aug. 2025 - Aug. 2026',
    summary: 'Zeroth-order optimization for vision.',
    points: [
      'Studied backpropagation-free fine-tuning of classifier heads across pretrained CNN and transformer backbones.',
      'Built a reproducible PyTorch framework for CIFAR-10 and CIFAR-10-C comparisons across accuracy, calibration, estimator quality, and corruption robustness.',
      'Analyzed how backbone representations, numerical precision, curvature, and optimizer design affect training behavior.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    org: 'Ericsson India',
    location: 'Remote',
    dates: 'May 2025 - July 2025',
    summary: '5G traffic forecasting and data preparation.',
    points: [
      'Compressed more than 22 GB of packet captures into 2.2 GB of model-ready Parquet data.',
      'Engineered five-minute traffic windows with lag, rolling, and cyclical features for sequential forecasting.',
      'Implemented an LSTM workflow and contributed to SARIMA, XGBoost, and transformer-based forecasting experiments.',
    ],
  },
];

export const skillGroups = [
  {
    label: 'Machine Learning',
    items: ['Deep Learning', 'Computer Vision', 'NLP', 'Transfer Learning', 'Fine-tuning', 'Adversarial Robustness'],
  },
  {
    label: 'Optimization',
    items: ['Zeroth-Order Optimization', 'Knowledge Distillation', 'Pruning', 'Quantization', 'LoRA', 'PEFT'],
  },
  {
    label: 'Frameworks',
    items: ['PyTorch', 'Transformers', 'ONNX Runtime', 'NumPy', 'Pandas', 'Scikit-Learn', 'Matplotlib', 'Plotly'],
  },
  {
    label: 'Systems',
    items: ['SLURM', 'Distributed Experiment Setup', 'HPC Workflows', 'Experiment Tracking', 'Reproducible Training Pipelines'],
  },
  {
    label: 'Programming',
    items: ['Python', 'C++', 'JavaScript', 'Django', 'Flask', 'Dash'],
  },
];

export const certifications = [
  'AWS Partner Accreditation (Business)',
  'CS50x HarvardX',
  'Microsoft MTA 98-381',
  'IBM: Analyzing Data with Python and Python Basics for Data Science',
];

export const contactLinks = [
  {
    label: 'Email',
    value: 'adityabhargava2001@gmail.com',
    href: 'mailto:adityabhargava2001@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/Aditya-200118',
    href: 'https://github.com/Aditya-200118',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/adibhargava29',
    href: 'https://www.linkedin.com/in/adibhargava29',
  },
  {
    label: 'Repository',
    value: 'github.com/Aditya-200118/Portfolio',
    href: 'https://github.com/Aditya-200118/Portfolio',
  },
  {
    label: 'Live site',
    value: 'aditya-200118.github.io/Portfolio/',
    href: 'https://aditya-200118.github.io/Portfolio/',
  },
];
