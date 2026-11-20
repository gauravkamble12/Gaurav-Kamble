export const personalInfo = {
  name: "Gaurav Kamble",
  badge: "Available for Multi-Domain Engineering, Data & IT Roles",
  email: "kamblegaurav193@gmail.com",
  location: "Pune, Maharashtra, India",
  degree: "B.E. Computer Engineering",
  github: "https://github.com/gauravkamble12",
  linkedin: "https://www.linkedin.com/in/gaurav-kamble-7a84361b1/",
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
    { label: "Academic CGPA", value: 8.94, decimals: 2, suffix: "/10" },
    { label: "Verified Credentials & Paper", value: 10, suffix: "+" }
  ]
};

export const education = [
  {
    id: "be",
    degree: "B.E. in Computer Engineering",
    institution: "Dr. D. Y. Patil College of Engineering and Innovation, Varale, Talegaon (Pune)",
    period: "2023 – Present",
    score: "8.94 CGPA",
    scoreType: "Current CGPA",
    badge: "Undergraduate Degree",
    status: "Currently Pursuing",
    icon: "fa-solid fa-graduation-cap",
    color: "cyan",
    details: "Focusing on Full-Stack Software Engineering (MERN), Data Analytics, Machine Learning algorithms, and Systems Architecture."
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (12th HSC)",
    institution: "Shree Chhatrapati Shivaji College, Omerga",
    period: "2022 – 2023",
    score: "71.00%",
    scoreType: "Percentage",
    badge: "Maharashtra State Board (HSC)",
    status: "Completed",
    icon: "fa-solid fa-building-columns",
    color: "purple",
    details: "Higher secondary education in Science stream under Maharashtra State Board."
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (10th SSC)",
    institution: "Shree Dnyaneshwar Vidyalay, Turori",
    period: "2020 – 2021",
    score: "89.40%",
    scoreType: "Percentage (Distinction)",
    badge: "Maharashtra State Board (SSC)",
    status: "Completed",
    icon: "fa-solid fa-school",
    color: "emerald",
    details: "Secondary education under Maharashtra State Board, completed with Distinction honors."
  }
];

export const terminalCommands = {
  "profile.json": {
    name: "Gaurav Kamble",
    college: "Dr. D. Y. Patil College of Engineering & Innovation, Talegaon, Pune",
    degree: "B.E. Computer Engineering",
    currentCGPA: "8.94 / 10",
    domains: [
      "Full-Stack MERN",
      "Data Analytics & BI",
      "Machine Learning",
      "Technical Support",
      "Cybersecurity (Foundations)"
    ],
    publication: "IJARSCT Research Journal",
    email: "kamblegaurav193@gmail.com",
    location: "Pune, Maharashtra",
    openToWork: true
  },
  "education.json": [
    {
      course: "B.E. Computer Engineering",
      college: "Dr. D. Y. Patil College of Engineering & Innovation, Talegaon, Pune",
      score: "8.94 CGPA",
      period: "2023 - Present"
    },
    {
      course: "12th HSC (Science)",
      college: "Shree Chhatrapati Shivaji College, Omerga",
      score: "71.00%",
      board: "Maharashtra State Board (2022 - 2023)"
    },
    {
      course: "10th SSC",
      school: "Shree Dnyaneshwar Vidyalay, Turori",
      score: "89.40%",
      board: "Maharashtra State Board (2020 - 2021)"
    }
  ],
  "skills.sh": [
    "Frontend: React.js, Tailwind CSS, JavaScript (ES6+), HTML5/CSS3",
    "Backend: Node.js, Express.js, RESTful APIs, JWT Auth, Socket.IO",
    "Database: MongoDB, Mongoose, MySQL, PostgreSQL",
    "Data & ML: Python, SQL, Pandas, Power BI, Scikit-Learn, Jupyter",
    "AI & GenAI: Groq API, Structured Outputs, Prompt Engineering, LLMs",
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
  { id: "ai", label: "AI & GenAI", icon: "fa-solid fa-brain" },
  { id: "data-ml", label: "Data & ML", icon: "fa-solid fa-chart-line" }
];

export const projects = [
  {
    id: "resume-ai",
    title: "AI Resume & Interview Prep Platform",
    domain: "Full-Stack AI / MERN",
    category: ["mern", "ai"],
    tag: "Featured Full-Stack AI App",
    image: "/projects/resume-creator.png",
    desc: "AI-driven career preparation platform that analyzes resumes against target job descriptions. Generates an ATS match score, skill-gap analysis, tailored behavioral & technical interview questions, a structured day-wise preparation plan, and an ATS-optimized tailored resume PDF using Groq structured outputs.",
    features: [
      "Upload resume (PDF/DOCX) or provide a self-description alongside target job requirements for holistic evaluation",
      "Calculates real-time ATS match score with comprehensive skill-gap analysis highlighting missing competencies",
      "Generates role-specific behavioral, technical, and scenario-based interview questions tailored to the candidate's profile",
      "Structures a customized, day-wise interview preparation roadmap with actionable milestones and study topics",
      "Synthesizes and exports an ATS-optimized tailored resume PDF directly aligned with target role keywords",
      "Powered by Groq high-speed LLM inference with structured JSON output enforcement for deterministic responses",
      "Full-stack MERN architecture built with React.js, Express.js REST API, MongoDB persistence, and Tailwind CSS"
    ],
    tech: ["React.js", "Express.js", "MongoDB", "Groq AI", "Node.js", "Tailwind CSS", "PDF Generation", "Structured Outputs"],
    hasLive: false,
    githubLink: "https://github.com/gauravkamble12",
    liveLink: "#"
  },
  {
    id: "blog",
    title: "GK Blog — Full-Stack Community Platform",
    domain: "MERN Stack / Web Dev",
    category: "mern",
    tag: "Live Production App",
    desc: "Interactive full-stack blogging platform where creators publish articles, explore community stories, and engage through live reactions. Features real-time Socket.IO notifications, Cloudinary CDN media, and responsive dark/light modes.",
    features: [
      "User authentication, story publishing suite, and categorized topic feeds",
      "Interactive reader reactions with real-time like counters and engagement tracking",
      "Live activity updates and notifications powered by Socket.IO events",
      "Direct Cloudinary API integration for secure image uploads and optimized CDN delivery",
      "Fast server-side pagination, search filtering, and seamless dark/light theme switching"
    ],
    tech: ["Node.js", "Express", "MongoDB", "Socket.IO", "Cloudinary", "Render"],
    hasLive: true,
    githubLink: "https://github.com/gauravkamble12",
    liveLink: "https://blogwebsite1-q22u.onrender.com/"
  },
  {
    id: "messenger",
    title: "Sangati — Real-Time Web Messenger",
    domain: "MERN Stack / Web Dev",
    category: "mern",
    tag: "Live Production App",
    desc: "Private real-time messaging application built with React, Node.js, Express, and Socket.IO. Features instant bi-directional messaging, active presence indicators, typing status, and responsive mobile-first UI.",
    features: [
      "Real-time bi-directional messaging powered by Socket.IO WebSocket events",
      "User authentication, active presence tracking, and conversation persistence",
      "Mobile-optimized responsive design with viewport handling and dynamic theme accents",
      "Instant message delivery status and clean, fluid chat interface"
    ],
    tech: ["React.js", "Socket.IO", "Node.js", "Express", "MongoDB", "Render"],
    hasLive: true,
    githubLink: "https://github.com/gauravkamble12",
    liveLink: "https://gkwhatsapp-s2y6.onrender.com/"
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
    category: ["data-ml", "ai"],
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
    skills: ["Scikit-Learn", "Generative AI", "Groq & LLMs", "NLP", "Prompt Engineering", "Model Evaluation"]
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
