/**
 * Portfolio Data Configuration
 * Centralized, easy-to-edit data for Gaurav Kamble's Portfolio.
 * Edit this file to update projects, skills, experience, or bio.
 */

export const personalInfo = {
  name: "Gaurav Kamble",
  badge: "Available for Multi-Domain Engineering, Data & IT Roles",
  email: "kamblegaurav193@gmail.com",
  location: "Pune, Maharashtra, India",
  degree: "B.E. Computer Engineering",
  github: "https://github.com/gauravkamble12",
  linkedin: "https://linkedin.com/in/gaurav-kamble",
  heroPhrases: [
    "Full-Stack MERN Developer.",
    "Data Analyst & BI Specialist.",
    "Machine Learning & AI Enthusiast.",
    "Technical Support & IT Systems.",
    "Computer Engineering Student."
  ],
  bio: "Computer Engineering student engineering scalable solutions across Full-Stack MERN Development, Data Analytics & Machine Learning, and Technical Support & Systems. Author of published research in IJARSCT journal.",
  aboutText: [
    "I am a Computer Engineering student based in Pune, India. My technical foundation spans building responsive MERN stack web applications, extracting actionable insights with Python, SQL and Power BI, implementing machine learning models, and diagnosing IT systems.",
    "Whether cleaning messy datasets, designing scalable REST APIs, structuring database schemas, or diagnosing hardware/network issues, I prioritize writing clean, maintainable, and efficient solutions."
  ],
  stats: [
    { label: "Full-Stack & Data Stack", value: "MERN + Py", isText: true },
    { label: "Academic CGPA", value: 8.5, decimals: 1, suffix: "+" },
    { label: "Verified Credentials & Paper", value: 10, suffix: "+" }
  ]
};

export const terminalCommands = {
  "profile.json": {
    name: "Gaurav Kamble",
    degree: "B.E. Computer Engineering",
    domains: [
      "Full-Stack MERN",
      "Data Analytics & BI",
      "Machine Learning",
      "Technical Support",
      "Cybersecurity (Foundations)"
    ],
    publication: "IJARSCT Research Journal",
    location: "Pune, Maharashtra",
    openToWork: true
  },
  "skills.sh": [
    "Frontend: React.js, Tailwind CSS, JavaScript (ES6+), HTML5/CSS3",
    "Backend: Node.js, Express.js, RESTful APIs, JWT Auth, Socket.IO",
    "Database: MongoDB, Mongoose, MySQL, PostgreSQL",
    "Data & ML: Python, SQL, Pandas, Power BI, Scikit-Learn, Jupyter",
    "Systems & Security: Linux CLI, Bash/PowerShell, Wireshark, OS Diagnostics"
  ],
  "milestones.txt": [
    "[2026] Published Research Paper in IJARSCT Journal",
    "[2024] Oracle Certified in Generative AI Professional",
    "[2026] Full-Stack Developer Internship at Codec Technologies",
    "[2025] Web Development Internship at Codsoft",
    "[2024] Infosys Springboard & NPTEL National Certifications"
  ]
};

export const projectCategories = [
  { id: "all", label: "All Projects", icon: "fa-solid fa-layer-group" },
  { id: "mern", label: "MERN Stack", icon: "fa-brands fa-react" },
  { id: "data-ml", label: "Data & ML", icon: "fa-solid fa-chart-line" }
];

export const projects = [
  {
    id: "messenger",
    title: "Real-Time Web Messenger",
    domain: "MERN Stack / Web Dev",
    category: "mern",
    tag: "Real-Time App",
    desc: "Full-stack instant messaging platform built with MERN & Socket.IO. Features web sockets, instant message delivery status, active user presence tracking, and MongoDB message persistence.",
    features: [
      "Real-time bi-directional messaging powered by Socket.IO events",
      "User authentication and MongoDB chat room schema persistence",
      "Active presence indicators and delivery notifications",
      "Clean, responsive glassmorphic chat interface"
    ],
    tech: ["Socket.IO", "React", "Express", "Node.js", "MongoDB"],
    hasLive: true,
    githubLink: "https://github.com/gauravkamble12",
    liveLink: "#"
  },
  {
    id: "blog",
    title: "Full-Stack Media Blogging Platform",
    domain: "MERN Stack / Web Dev",
    category: "mern",
    tag: "MERN Stack",
    desc: "Rich publishing suite with JWT authentication, custom text editing, dynamic image hosting via Cloudinary CDN, and optimized MongoDB pagination queries.",
    features: [
      "JWT-based user authorization and session management",
      "Direct Cloudinary API integration for secure image hosting & CDN delivery",
      "Optimized MongoDB aggregations and indexing for fast pagination",
      "Rich text editor with real-time markdown previews"
    ],
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
    hasLive: true,
    githubLink: "https://github.com/gauravkamble12",
    liveLink: "#"
  },
  {
    id: "heart-disease",
    title: "Heart Disease Analysis Model",
    domain: "Data Analytics & ML",
    category: "data-ml",
    tag: "Predictive Analytics",
    desc: "Predictive machine learning model analyzing patient clinical parameters, running exploratory data analysis, and evaluating classification algorithms to predict heart disease risk.",
    features: [
      "Exploratory Data Analysis (EDA) on clinical health datasets",
      "Data preprocessing, missing value imputation, and feature correlation heatmap",
      "Trained classification models with hyperparameter tuning",
      "Performance evaluation using Precision, Recall, and ROC-AUC curve"
    ],
    tech: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn", "Jupyter"],
    hasLive: false,
    githubLink: "https://github.com/gauravkamble12",
    liveLink: "#"
  },
  {
    id: "movie-rec",
    title: "Movie Recommendation System",
    domain: "Data Analytics & ML",
    category: "data-ml",
    tag: "NLP & Recommender",
    desc: "Machine learning recommendation engine using cosine similarity and NLP feature extraction to analyze movie genres, cast, and plots to provide personalized recommendations.",
    features: [
      "Content-based filtering using cosine similarity matrices",
      "Text preprocessing and vectorization with CountVectorizer/TF-IDF",
      "Interactive query matching for similar title recommendations",
      "Optimized similarity lookup for real-time predictions"
    ],
    tech: ["Python", "Scikit-Learn", "Pandas", "NLP", "Streamlit"],
    hasLive: false,
    githubLink: "https://github.com/gauravkamble12",
    liveLink: "#"
  }
];

export const skillGroups = [
  {
    id: "analytics",
    label: "Data & Analytics",
    icon: "fa-solid fa-magnifying-glass-chart",
    color: "cyan",
    featured: true,
    skills: ["SQL", "Python", "Pandas", "NumPy", "Excel", "EDA", "Data Cleaning", "Statistics"]
  },
  {
    id: "visualization",
    label: "Visualization & Dashboards",
    icon: "fa-solid fa-chart-column",
    color: "violet",
    skills: ["Power BI", "Tableau", "Matplotlib", "Plotly", "Seaborn", "Streamlit"]
  },
  {
    id: "ml-ai",
    label: "Machine Learning & AI",
    icon: "fa-solid fa-brain",
    color: "fuchsia",
    skills: ["Scikit-Learn", "Generative AI", "NLP", "Prompt Engineering", "Model Evaluation"]
  },
  {
    id: "frontend",
    label: "Frontend Development",
    icon: "fa-brands fa-react",
    color: "sky",
    skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Vite"]
  },
  {
    id: "backend",
    label: "Backend & Databases",
    icon: "fa-solid fa-server",
    color: "emerald",
    skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "JWT Auth", "Socket.IO", "MySQL"]
  },
  {
    id: "cybersecurity",
    label: "Cybersecurity & Networking",
    icon: "fa-solid fa-shield-halved",
    color: "rose",
    skills: ["Wireshark", "Nmap", "OWASP Awareness", "TCP/IP & DNS", "Linux Security", "IAM Access Control"]
  },
  {
    id: "support-systems",
    label: "IT Support & Systems",
    icon: "fa-solid fa-headset",
    color: "indigo",
    skills: ["Hardware/OS Diagnostics", "Windows & Linux Admin", "PowerShell", "Bash", "Network Troubleshooting"]
  },
  {
    id: "tools",
    label: "Tools & Workflow",
    icon: "fa-solid fa-screwdriver-wrench",
    color: "amber",
    skills: ["Git & GitHub", "Docker", "Postman", "Linux CLI", "VS Code", "Vercel"]
  }
];

export const experienceTimeline = [
  {
    period: "Jan 2026 – Feb 2026",
    role: "Full-Stack Developer Intern",
    company: "Codec Technologies",
    points: [
      "Designed and implemented RESTful APIs using Node.js & Express.",
      "Structured MongoDB schemas with Mongoose for optimized data retrieval speeds.",
      "Integrated secure authentication and role-based access workflows for client applications."
    ]
  },
  {
    period: "Jul 2025 – Aug 2025",
    role: "Web Development Intern",
    company: "Codsoft",
    points: [
      "Developed responsive frontend client interfaces using modern UI components.",
      "Implemented interactive dynamic web forms and robust client-side validation."
    ]
  }
];

export const milestones = [
  {
    title: "IJARSCT Research Paper",
    badge: "Journal Publication",
    desc: "Authored and published technical research paper in the peer-reviewed IJARSCT journal.",
    icon: "fa-solid fa-book-bookmark",
    color: "cyan"
  },
  {
    title: "Oracle GenAI Certified",
    badge: "Professional Credential",
    desc: "Certified in Generative AI, Large Language Models (LLMs), prompt engineering, and semantic search.",
    icon: "fa-solid fa-award",
    color: "purple"
  },
  {
    title: "Codec Technologies",
    badge: "Verified Internship",
    desc: "Full-Stack development internship building Node.js backend systems and MongoDB structures.",
    icon: "fa-solid fa-briefcase",
    color: "emerald"
  },
  {
    title: "Infosys & NPTEL",
    badge: "National Honors",
    desc: "Certified in Front-End Web Development by Infosys Springboard alongside NPTEL credentials.",
    icon: "fa-solid fa-graduation-cap",
    color: "sky"
  }
];
