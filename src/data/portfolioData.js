export const PERSONAL_INFO = {
  name: "Sumit Shaw",
  title: "Software Engineer",
  typedTitles: [
    "Aspiring Software Engineer",
    "MERN Stack Developer",
    "Django Developer",
    "Java & Python Programmer"
  ],
  email: "shawr1101@gmail.com",
  phone: "+91-7980893348",
  location: "West Bengal, India",
  github: "https://github.com/Sumit03072004",
  linkedin: "https://www.linkedin.com/in/sumit-shaw-5871a2323/",
  twitter: "https://x.com/sumitshawdev",
  resumeUrl: "#resume",
  avatarUrl: "/sumit_avatar.jpg",
  summary: "Aspiring Software Engineer with strong skills in Java, JavaScript, Python, SQL, and Data Structures & Algorithms. Experienced in building full-stack web applications using the MERN stack and Django through academic projects and virtual internships. Passionate about developing scalable software solutions and solving real-world problems.",
  about: {
    paragraph1: "I am an Aspiring Software Engineer currently pursuing my Bachelor of Technology in Information Technology at Guru Nanak Institute of Technology (2023 - 2027) in West Bengal, India. I possess a strong foundation in Computer Science fundamentals including Data Structures & Algorithms, Object-Oriented Programming (OOP), DBMS, Operating Systems, and Computer Networks.",
    paragraph2: "My practical experience spans building full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Python with Django. Through virtual internships with Eduskills in Google AI-ML and SQL/DBMS, I've gained hands-on experience in machine learning workflows, database modeling, and business analytics dashboards.",
    paragraph3: "Passionate about developing scalable software solutions and tackling real-world problems, I continuously focus on writing clean, efficient code and building intuitive user experiences."
  },
  languages: ["English", "Hindi"],
  metrics: [
    { label: "B.Tech CGPA", value: "7.86", suffix: "Information Technology" },
    { label: "Core Stack", value: "MERN & Django", suffix: "Full-Stack Web Development" },
    { label: "Internships", value: "2 Virtual", suffix: "Google AI-ML & SQL/DBMS" },
    { label: "Projects", value: "3 Major", suffix: "MERN & Django Applications" }
  ]
};

export const SKILLS = [
  // Programming Languages
  { name: "Java", level: 90, iconName: "Coffee", category: "Programming", experienceYears: "Academic & Projects" },
  { name: "Python", level: 88, iconName: "Code2", category: "Programming", experienceYears: "Academic & Projects" },
  { name: "JavaScript", level: 90, iconName: "FileCode", category: "Programming", experienceYears: "MERN Projects" },
  { name: "SQL", level: 88, iconName: "Database", category: "Programming", experienceYears: "Queries & Database" },

  // Frontend
  { name: "React.js", level: 90, iconName: "Atom", category: "Frontend", experienceYears: "Full-Stack Development" },
  { name: "HTML5", level: 95, iconName: "Layout", category: "Frontend", experienceYears: "Web Standards" },
  { name: "CSS3", level: 92, iconName: "Palette", category: "Frontend", experienceYears: "Responsive Layouts" },
  { name: "Tailwind CSS", level: 90, iconName: "Palette", category: "Frontend", experienceYears: "Modern UI Styling" },

  // Backend
  { name: "Node.js", level: 88, iconName: "Server", category: "Backend", experienceYears: "MERN Backend" },
  { name: "Express.js", level: 90, iconName: "Cpu", category: "Backend", experienceYears: "RESTful API Server" },
  { name: "Django", level: 85, iconName: "Globe", category: "Backend", experienceYears: "Python Framework" },
  { name: "REST APIs", level: 90, iconName: "Share2", category: "Backend", experienceYears: "Web Services" },

  // Database
  { name: "MongoDB", level: 88, iconName: "HardDrive", category: "Database", experienceYears: "NoSQL Database" },
  { name: "MySQL", level: 88, iconName: "Database", category: "Database", experienceYears: "Relational DBMS" },
  { name: "SQLite", level: 82, iconName: "Table", category: "Database", experienceYears: "Django Default" },

  // Tools
  { name: "Git", level: 90, iconName: "GitBranch", category: "Tools", experienceYears: "Version Control" },
  { name: "GitHub", level: 92, iconName: "Github", category: "Tools", experienceYears: "Repository Management" },
  { name: "VS Code", level: 95, iconName: "Terminal", category: "Tools", experienceYears: "Primary IDE" },
  { name: "Power BI", level: 80, iconName: "PieChart", category: "Tools", experienceYears: "Business Analytics" },

  // Core Concepts
  { name: "Data Structures & Algorithms", level: 88, iconName: "Binary", category: "Core Subjects", experienceYears: "Problem Solving" },
  { name: "Object-Oriented Programming (OOP)", level: 90, iconName: "Box", category: "Core Subjects", experienceYears: "Design Principles" },
  { name: "DBMS", level: 88, iconName: "DatabaseZap", category: "Core Subjects", experienceYears: "Database Architecture" },
  { name: "Operating System", level: 85, iconName: "Monitor", category: "Core Subjects", experienceYears: "Core CS" },
  { name: "Computer Networks", level: 82, iconName: "Wifi", category: "Core Subjects", experienceYears: "Core CS" }
];

export const PROJECTS = [
  {
    id: "restaurant-management",
    title: "Restaurant Management System",
    subtitle: "Full-Stack Food Ordering & Role-Based Admin Dashboard",
    category: "MERN Stack",
    description: "Developed a full-stack restaurant management system with JWT authentication, role-based authorization, food ordering, shopping cart, admin dashboard, and REST APIs.",
    longDescription: "A comprehensive full-stack web application designed to streamline restaurant operations and customer food ordering. Features secure JWT user authentication, role-based authorization for customers and admins, interactive menu filtering, shopping cart functionality, RESTful APIs, and an admin dashboard for managing items and orders.",
    image: "/src/assets/images/restaurant_project_1785337160550.jpg",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth", "REST APIs"],
    features: [
      "JWT Authentication & Session Security",
      "Role-Based Authorization (Admin vs Customer)",
      "Interactive Food Ordering & Item Customization",
      "Dynamic Shopping Cart & Order Checkout Pipeline",
      "Comprehensive Admin Dashboard for Menu & Order Oversight",
      "Robust RESTful API Architecture with Express & MongoDB"
    ],
    liveUrl: "https://github.com/Sumit03072004",
    githubUrl: "https://github.com/Sumit03072004",
    highlights: [
      "Built complete MERN stack backend with secure JWT authentication middleware.",
      "Engineered role-based views separating administrative controls from client ordering.",
      "Designed responsive UI using React.js and Tailwind CSS for seamless mobile and desktop experience."
    ],
    role: "Full Stack Developer",
    duration: "2025"
  },
  {
    id: "quickmart-ecommerce",
    title: "QuickMart – E-Commerce Platform",
    subtitle: "Responsive MERN E-Commerce Storefront",
    category: "MERN Stack",
    description: "Built a responsive e-commerce platform equipped with user authentication, shopping cart, order management, and REST APIs.",
    longDescription: "QuickMart is an intuitive, full-stack e-commerce platform built using the MERN stack. It offers customers a smooth online shopping experience complete with account authentication, product search and catalog filtering, persistent shopping cart management, order placement tracking, and clean REST APIs.",
    image: "/src/assets/images/quickmart_project_1785337175924.jpg",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
    features: [
      "User Authentication & Registration Workflows",
      "Interactive Shopping Cart with State Persistence",
      "Order Management & Order History Tracking",
      "Responsive Product Showcase with Clean Navigation",
      "RESTful API Integration between React Frontend and Express Backend"
    ],
    liveUrl: "https://github.com/Sumit03072004",
    githubUrl: "https://github.com/Sumit03072004",
    highlights: [
      "Integrated MongoDB schemas for products, users, and order transactions.",
      "Optimized React component tree for fast rendering and smooth user interactions.",
      "Implemented mobile-first responsive layouts with Tailwind CSS."
    ],
    role: "Full Stack Developer",
    duration: "2025"
  },
  {
    id: "django-ecommerce",
    title: "E-Commerce Web Application (Django)",
    subtitle: "Full-Stack Web Storefront with Django & Python",
    category: "Python & Django",
    description: "Developed an e-commerce application using Django featuring user authentication, product management, shopping cart, and Django ORM.",
    longDescription: "A full-stack e-commerce web application developed with Python and the Django framework. Utilizes Django's built-in authentication, robust Object-Relational Mapping (ORM) with SQLite, dynamic template rendering, and administrative portal for catalog and inventory management.",
    image: "/src/assets/images/django_project_1785337192401.jpg",
    techStack: ["Django", "Python", "HTML5", "CSS3", "SQLite", "Django ORM"],
    features: [
      "User Authentication utilizing Django's Auth System",
      "Product Catalog & Category Management",
      "Shopping Cart & Order Creation Workflows",
      "Django ORM for safe, parameterized database transactions",
      "Admin Portal for easy store inventory management"
    ],
    liveUrl: "https://github.com/Sumit03072004",
    githubUrl: "https://github.com/Sumit03072004",
    highlights: [
      "Leveraged Django ORM for efficient relational data modeling with SQLite.",
      "Designed clean HTML5/CSS3 templates with intuitive user navigation.",
      "Customized Django Admin dashboard for product catalog management."
    ],
    role: "Django Developer",
    duration: "2025"
  }
];

export const EXPERIENCES = [
  {
    id: "exp-sql-dbms",
    role: "SQL and Database Management Systems Virtual Intern",
    company: "Eduskills (Cohort 15)",
    location: "Remote",
    period: "Jan 2026 – Mar 2026",
    type: "Virtual Internship",
    techStack: ["SQL", "MySQL", "MongoDB", "Power BI", "FastAPI", "ETL Concepts"],
    responsibilities: [
      "Designed relational databases and structured normalized table schemas.",
      "Wrote advanced SQL queries for data aggregation, complex joins, and analytical reporting.",
      "Built a Business Analytics Dashboard using SQL and Power BI to visualize key operational metrics.",
      "Gained hands-on experience with MongoDB NoSQL database concepts, ETL data pipelines, and FastAPI."
    ],
    achievements: [
      "Successfully created an end-to-end Business Analytics Dashboard in Power BI with SQL data extraction.",
      "Mastered key database management concepts across both SQL (MySQL) and NoSQL (MongoDB) platforms."
    ]
  },
  {
    id: "exp-google-aiml",
    role: "Google AI-ML Virtual Intern",
    company: "Eduskills (Cohort 14)",
    location: "Remote",
    period: "Oct 2025 – Dec 2025",
    type: "Virtual Internship",
    techStack: ["Python", "NumPy", "Pandas", "Scikit-learn", "Machine Learning"],
    responsibilities: [
      "Learned machine learning workflows including data preprocessing, feature engineering, model training, and evaluation.",
      "Worked extensively with Python libraries including NumPy, Pandas, and Scikit-learn for dataset manipulation.",
      "Explored supervised learning algorithms, model performance metrics, and validation techniques."
    ],
    achievements: [
      "Built and evaluated supervised machine learning models during the Eduskills Google AI-ML internship.",
      "Engineered clean data preprocessing pipelines for feature scaling and normalization."
    ]
  }
];

export const EDUCATION = [
  {
    id: "edu-gnit",
    degree: "Bachelor of Technology (B.Tech) - Information Technology",
    institution: "Guru Nanak Institute of Technology",
    location: "West Bengal, India",
    period: "2023 – 2027",
    grade: "CGPA: 7.86",
    description: "Pursuing Bachelor of Technology in Information Technology. Focusing on software engineering principles, full-stack web development, and computer science core subjects.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating System",
      "Computer Networks",
      "Java Programming",
      "Python Development",
      "Web Technologies"
    ]
  }
];

export const CERTIFICATIONS = [
  {
    id: "cert-django-ardent",
    title: "30-Hour Django Web Development Training",
    issuer: "Ardent Computech Pvt. Ltd.",
    date: "2025",
    skills: ["Django", "Python", "Web Development", "SQLite", "ORM"],
    badgeColor: "from-emerald-500 to-teal-400"
  },
  {
    id: "cert-google-aiml",
    title: "Google AI-ML Virtual Internship",
    issuer: "Eduskills (Cohort 14)",
    date: "Oct 2025 – Dec 2025",
    skills: ["Machine Learning", "Python", "NumPy", "Pandas", "Scikit-learn"],
    badgeColor: "from-blue-500 to-cyan-400"
  },
  {
    id: "cert-sql-dbms",
    title: "SQL and Database Management Systems Virtual Internship",
    issuer: "Eduskills (Cohort 15)",
    date: "Jan 2026 – Mar 2026",
    skills: ["SQL", "DBMS", "Power BI", "MongoDB", "FastAPI"],
    badgeColor: "from-amber-500 to-orange-400"
  },
  {
    id: "cert-nptel-java",
    title: "Java Programming",
    issuer: "NPTEL",
    date: "2024",
    skills: ["Java", "OOP", "Multithreading", "Data Structures"],
    badgeColor: "from-red-500 to-pink-500"
  },
  {
    id: "cert-nptel-ml",
    title: "Machine Learning",
    issuer: "NPTEL",
    date: "2024",
    skills: ["Machine Learning", "Algorithms", "Predictive Modeling"],
    badgeColor: "from-purple-500 to-indigo-500"
  }
];
