export const profile = {
  name: 'Arnav Pundir',
  tagline: 'AI Engineer & Full Stack Engineer | Competitive Coding Lead @ D-Coders Squad',
  location: 'Roorkee, India',
  email: 'arnavp128@gmail.com',
  phone: '+91 70606 75133',
  github: 'https://github.com/ArnavPundir22',
  linkedin: 'https://www.linkedin.com/in/arnav-pundir128ap',
  dcoders: 'https://dcoderssquad.com',
  cvUrl: '/Documents/Arnav_Pundir_Comprehensive_Resume.pdf',
  photo: '/images/man1.webp',
  photoAlt: 'Arnav Pundir — AI Engineer & Full Stack Engineer',
  bio: [
    "I am an exceptional AI Engineer & Full Stack Engineer specializing in high-throughput distributed architectures, real-time computer vision pipelines, and resilient offline-first web applications. With a foundation built on deep algorithmic optimization and modern full-stack engineering (React.js, Next.js 15, TypeScript, Node.js, and Python), I architect systems designed for low latency, zero-logging privacy, and high fault tolerance. My engineered platforms range from distributed forensic facial tracking and trajectory reconstruction (TraceAI) to local-first reactive project managers (ZeroLag with RxDB/Supabase) and real-time collaborative WebRTC video streaming (AuraMeet). Alongside building production software, I direct competitive programming and algorithmic masterclasses as the Competitive Coding Lead at D-Coders Squad (COER University), mentoring over 200 developers. An active open-source contributor, I secured Global Rank #70 in Nexus Spring of Code '26 with 13 merged pull requests across 5 production codebases."
  ],
  stats: [
    { value: 18, suffix: '+', label: 'Systems Engineered' },
    { value: 2, suffix: '+', label: 'Years Production Code' },
    { value: 12, suffix: '+', label: 'Core Technologies' },
    { value: 5, suffix: '', label: 'Verified Credentials' },
  ],
}

export const roles = [
  'AI Engineer & Systems Architect',
  'Full Stack Engineer (React, Next.js, Node)',
  'AI & Full-Stack Systems Engineer',
  'Distributed Systems & WebRTC Architect',
  'Computer Vision & Forensic ML Specialist',
  'Competitive Coding Lead @ D-Coders Squad',
  'Open-Source Security Contributor (NSoC Global Rank #70)',
]

export const experience = [
  {
    title: 'Competitive Coding Lead',
    company: 'D-Coders Squad (COER University)',
    location: 'Roorkee, India',
    period: 'Aug 2024 – Present',
    description: [
      'Direct the competitive programming division at D-Coders Squad, the official technical community of COER University, conducting rigorous masterclasses in algorithm design, asymptotic complexity analysis, and advanced Data Structures & Algorithms.',
      'Architect automated coding contests, coordinate technical code reviews, mentor 200+ engineers across full-stack development, and co-led executive pilot sensitization sessions for the BioSecure AI attendance system in front of university leadership.',
      'Lead university delegation teams in national hackathons, competitive coding tournaments, and collaborative research initiatives.'
    ]
  },
  {
    title: 'AI & Full Stack Engineer',
    company: 'SparkTech Web Solutions • Client & Independent Projects',
    location: 'Roorkee, India',
    period: 'Jan 2024 – Present',
    description: [
      'Architected and deployed SevaSetu, a high-performance commercial service-booking platform built on React.js, Python (Flask), and RESTful microservices, serving 1,000+ active end-users with dynamic scheduling.',
      'Engineered ultra-premium cinematic WebGL portals (Hotel Pacific, Hotel Sachin) utilizing Three.js, GSAP, and Framer Motion for hardware-accelerated 3D graphics and physics-driven scroll choreography.',
      'Implemented route-level lazy loading, bundle chunking, and JSON-LD Technical SEO, cutting initial asset payload by 40%, accelerating FCP, and consistently maintaining 95+ Google Lighthouse scores across Performance, Accessibility, Best Practices, and SEO.'
    ]
  }
]

export const openSource = [
  {
    role: 'Core Contributor',
    organization: "Nexus Spring of Code (NSoC '26) & GSSoC",
    period: 'Apr 2026 – Jun 2026',
    rank: 'Ranked #70',
    description: [
      'Attained Global Rank #70 among international contributors in Nexus Spring of Code (NSoC \'26) by architecting 13 merged Pull Requests across 5 production-grade open-source codebases.',
      'Hardened session security by implementing rotating HttpOnly cookie authentication and integrated Fernet symmetric encryption for sensitive user records at rest.',
      'Eliminated cross-site request vectors with strict CORS policy enforcement, and elevated frontend responsiveness with server-side pagination, debounced query pipelines, and skeleton feedback.'
    ]
  }
]

export const skillCategories = {
  Languages: {
    tag: 'Core Syntax & Logic',
    skills: [
      { name: 'C++', highlight: 'Competitive Programming / STL / DSA', level: 85 },
      { name: 'Python', highlight: 'AI / CV Pipelines & Backend', level: 92 },
      { name: 'TypeScript', highlight: 'Type-Safe Full-Stack Architecture', level: 85 },
      { name: 'JavaScript (ES6+)', highlight: 'Modern Async, Canvas & DOM APIs', level: 90 },
      { name: 'SQL', highlight: 'Relational Schemas & Query Optimization', level: 80 },
    ]
  },
  'Frontend & 3D': {
    tag: 'Interface Engineering',
    skills: [
      { name: 'React 19 & Next.js 15', highlight: 'App Router, Server Actions, SSR & SSG', level: 92 },
      { name: 'Tailwind CSS', highlight: 'Fluid Design Systems & Glassmorphism', level: 92 },
      { name: 'Three.js / WebGL', highlight: '3D Geometry, Lighting & Cameras', level: 78 },
      { name: 'Framer Motion', highlight: 'Physics-Based Gesture & Scroll Animations', level: 88 },
      { name: 'GSAP', highlight: 'ScrollTrigger Timelines & Orchestration', level: 80 },
    ]
  },
  'AI & Computer Vision': {
    tag: 'Intelligent Systems',
    skills: [
      { name: 'YOLOv8', highlight: 'Real-Time Object & Vehicle Tracking', level: 88 },
      { name: 'InsightFace (ArcFace)', highlight: '512D Facial Embeddings & Cosine Search', level: 88 },
      { name: 'OpenCV', highlight: 'Video Feeds & Image Matrix Processing', level: 90 },
      { name: 'MediaPipe', highlight: 'Hand Landmarks & Gesture Recognition', level: 84 },
      { name: 'TensorFlow / CNNs', highlight: 'Neural Classification & ASL Translation', level: 80 },
      { name: 'Gemini API / LLMs', highlight: 'Natural Language Pipelines & Doc Assistant', level: 86 },
    ]
  },
  'Backend & Real-Time': {
    tag: 'System Architecture',
    skills: [
      { name: 'Node.js & Express', highlight: 'Event-Driven Services & REST APIs', level: 85 },
      { name: 'Flask / FastAPI', highlight: 'High-Throughput ML Model Serving', level: 88 },
      { name: 'WebRTC', highlight: 'P2P Media Streaming & Data Channels', level: 82 },
      { name: 'Redis', highlight: 'In-Memory Pub/Sub & Ephemeral State', level: 80 },
      { name: 'RxDB & WebSockets', highlight: 'Offline-First Local Storage & Realtime Sync', level: 85 },
    ]
  },
  'Databases & Storage': {
    tag: 'Persistence & Security',
    skills: [
      { name: 'Supabase (pgvector)', highlight: 'PostgreSQL Vector Search & RLS Security', level: 88 },
      { name: 'PostgreSQL', highlight: 'Relational Modeling & Foreign Key Constraints', level: 82 },
      { name: 'MongoDB', highlight: 'Document Stores & Aggregate Pipelines', level: 82 },
      { name: 'MySQL', highlight: 'ACID Relational Storage & Indexing', level: 80 },
    ]
  },
  'Tools & Engineering': {
    tag: 'Workflow & Standards',
    skills: [
      { name: 'Git & GitHub', highlight: 'Collaborative PR Workflows & CI/CD', level: 90 },
      { name: 'Linux / Bash', highlight: 'Process Management & Shell Automation', level: 85 },
      { name: 'Vite & Bundlers', highlight: 'ESM Builds & Performance Optimization', level: 92 },
      { name: 'Fernet Cryptography', highlight: 'Data Encryption at Rest & Security', level: 80 },
    ]
  }
}

export const skills = {
  Languages: [
    { name: 'C++', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Python', level: 90 },
    { name: 'SQL', level: 75 },
    { name: 'HTML/CSS', level: 90 },
  ],
  Frontend: [
    { name: 'React.js', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Three.js', level: 75 },
    { name: 'GSAP', level: 80 },
    { name: 'Framer Motion', level: 85 },
  ],
  Backend: [
    { name: 'Flask', level: 82 },
    { name: 'WebRTC', level: 75 },
    { name: 'Redis', level: 70 },
    { name: 'REST APIs', level: 85 },
  ],
  Databases: [
    { name: 'MongoDB', level: 78 },
    { name: 'PostgreSQL', level: 70 },
    { name: 'MySQL', level: 75 },
  ],
  Tools: [
    { name: 'Git', level: 85 },
    { name: 'GitHub', level: 85 },
    { name: 'VS Code', level: 90 },
  ],
}

export const projects = [
  {
    id: 3,
    title: 'Face Recognition Attendance Web System — BioSecure AI Biometric Platform',
    description:
      'A full-stack automated biometric attendance platform selected for an official COER University pilot run. Deployed InsightFace ArcFace 512D facial embeddings paired with Supabase pgvector search in PostgreSQL achieving 90%+ accuracy on live video feeds. Engineered a custom 3D Pose-Gated EWMA Embedding Drift Engine (α = 0.30) to monitor template aging and mitigate biometric degradation, multi-role access control (RBAC), automated SMTP alerts, and CSV exports.',
    tags: ['Python', 'Flask', 'InsightFace (ArcFace)', 'Supabase (pgvector)', 'PostgreSQL', 'OpenCV'],
    category: 'AI / CV',
    github: 'https://github.com/ArnavPundir22/Face-Attendance-System-Web-Version',
    live: null,
    featured: true,
    badge: 'Official COER University Pilot Run',
    pilotHighlight: 'Selected for official COER University Executive Pilot Run — Sensitized & presented to senior university leadership for institutional attendance automation.',
    image: '/images/insight-attend.webp',
    imageAlt: 'Face Recognition Attendance Web System — BioSecure AI biometric platform interface',
  },
  {
    id: 18,
    title: 'ZeroLag: Offline-First Collaborative Task Architecture',
    description: 'A local-first, zero-latency collaborative project management architecture built on React 19, TypeScript, RxDB (IndexedDB), and Supabase PostgreSQL. Features optimistic state updates for instantaneous UI responsiveness, event-sourced background synchronization with Realtime WebSockets, Gemini Vision AI task parsing from whiteboard photos, and Clerk JWT + PostgreSQL Row Level Security (RLS). Fully installable as an offline-first PWA.',
    tags: ['React 19', 'TypeScript', 'RxDB', 'Supabase (pg)', 'Clerk Auth', 'Tailwind CSS'],
    category: 'Full-Stack',
    github: 'https://github.com/ArnavPundir22/ZeroLag',
    live: null,
    featured: true,
    image: '/images/ZeroLag.webp',
    imageAlt: 'ZeroLag collaborative project management platform with offline-first architecture',
  },
  {
    id: 17,
    title: 'Occasions — Enterprise Event Orchestration Platform',
    description:
      'A production event orchestration platform built on Next.js 15, TypeScript, and MongoDB, handling concurrent user traffic and dynamic attendee capacities for 500+ participants. Features role-based access control (RBAC) via NextAuth.js, debounced search algorithms reducing query latency by 40%, and automated CSV analytics exports.',
    tags: ['Next.js 15', 'TypeScript', 'NextAuth.js', 'MongoDB', 'Tailwind CSS'],
    category: 'Full-Stack',
    github: 'https://github.com/ArnavPundir22/Occassions',
    live: 'https://occassions.vercel.app',
    featured: true,
    image: '/images/occassions.webp',
    imageAlt: 'Occasions event management dashboard, tracking registrants, event capacity limits, and CSV export functionality.',
  },
  {
    id: 1,
    title: 'AuraMeet — Ephemeral Real-Time Video Streaming Suite',
    description:
      'A scalable peer-to-peer WebRTC video communication suite with ephemeral in-memory Redis session management that automatically purges all chat and session logs upon disconnect. Features synchronized real-time Air Draw canvas collaboration using MediaPipe hand tracking for interactive whiteboarding over video feeds.',
    tags: ['Node.js', 'Express', 'WebRTC', 'Redis', 'Canvas API'],
    category: 'Full-Stack',
    github: 'https://github.com/ArnavPundir22/AuraMeet',
    live: 'https://aurameet-88e9.onrender.com',
    featured: true,
    image: '/images/AuraMeet.webp',
    imageAlt: 'AuraMeet Real-Time Video Chat App interface showing ephemeral video streams and chat.',
  },
  {
    id: 2,
    title: 'TraceAI — Multi-Camera Forensic Surveillance Intelligence',
    description:
      'A distributed forensic surveillance intelligence platform engineering real-time multi-camera tracking and trajectory reconstruction. Combines YOLOv8 spatial object detection with InsightFace biometric embeddings to identify, track, and assemble temporal movement maps of individuals across distributed video streams.',
    tags: ['Python', 'FastAPI', 'YOLOv8', 'InsightFace', 'OpenCV'],
    category: 'AI / CV',
    github: 'https://github.com/ArnavPundir22/TraceAI-Intelligent-Missing-Person-Suspect-Tracking-System',
    live: null,
    featured: true,
    image: '/images/TraceAI.webp',
    imageAlt: 'TraceAI forensic surveillance intelligence platform multi-camera tracking interface',
  },
  {
    id: 4,
    title: 'SevaSetu — Production Service Booking Platform',
    description:
      'A commercial service booking portal engineered with React.js, Tailwind CSS, and a Flask REST API. Delivered a fully responsive scheduling interface with calendar integration, localized service dispatch, and live production deployment maintaining 95+ Lighthouse scores.',
    tags: ['React.js', 'Flask', 'Tailwind CSS', 'REST API', 'MySQL'],
    category: 'Full-Stack',
    github: 'https://github.com/ArnavPundir22/SevaSetu',
    live: 'https://sevasetu.app',
    featured: true,
    image: '/images/sevasetu.webp',
    imageAlt: 'SevaSetu — Service Booking Platform dashboard with calendar and map',
  },
  {
    id: 5,
    title: 'Traffic Analysis System — Aerial Computer Vision Engine',
    description:
      'A real-time aerial computer vision engine leveraging YOLOv8 and OpenCV for automated vehicle detection, multi-class flow classification, and lane density analytics. Generates structured vehicle frequency reports for urban traffic planning.',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'TensorFlow'],
    category: 'AI / CV',
    github: 'https://github.com/ArnavPundir22/Traffic_analysis-system',
    live: null,
    featured: true,
    image: '/images/traffic-analysis.webp',
    imageAlt: 'Traffic Analysis System — aerial highway view with AI vehicle detection bounding boxes',
  },
  {
    id: 6,
    title: 'DocBot — AI Documentation Assistant',
    description:
      'Summarizes web documentation and answers natural language questions using the Gemini API. Built with PyQt5 GUI, handling live content extraction and NLP-based Q&A.',
    tags: ['Python', 'PyQt5', 'Gemini API', 'NLP'],
    category: 'AI / NLP',
    github: 'https://github.com/ArnavPundir22/DocBot',
    live: null,
    featured: true,
    image: '/images/docbot.webp',
    imageAlt: 'DocBot — AI Documentation Assistant with chat interface and code panels',
  },
  {
    id: 7,
    title: 'Anti-Spoofing System',
    description:
      'Real-time liveness detection using OpenCV and TensorFlow/YOLOv8 to prevent spoofing attacks in facial authentication systems. Detects printed photos and screen replays.',
    tags: ['Python', 'TensorFlow', 'YOLOv8', 'OpenCV'],
    category: 'AI / CV',
    github: 'https://github.com/ArnavPundir22/Anti-Spoofing-',
    live: null,
    featured: false,
    image: '/images/anti-spoofing.webp',
    imageAlt: 'Anti-Spoofing System — real face verified vs printed photo rejected',
  },
  {
    id: 8,
    title: 'Air-Mouse — Gesture Control',
    description:
      'Controls the mouse with hand gestures — no physical device needed. Uses MediaPipe hand landmark detection and Python for real-time cursor control, click, and scroll actions.',
    tags: ['Python', 'MediaPipe', 'OpenCV', 'PyAutoGUI'],
    category: 'AI / CV',
    github: 'https://github.com/ArnavPundir22/Air-Mouse',
    live: null,
    featured: false,
    image: '/images/air-mouse.webp',
    imageAlt: 'Air-Mouse — hand gesture control with MediaPipe landmark tracking',
  },
  {
    id: 9,
    title: 'Maya — Desktop Voice Assistant',
    description:
      'Python-based AI voice assistant with system and media control. Built with PyQt5 GUI, speech recognition, and text-to-speech for hands-free PC interaction.',
    tags: ['Python', 'PyQt5', 'Speech Recognition', 'TTS'],
    category: 'AI / NLP',
    github: 'https://github.com/ArnavPundir22/Maya-Personal-Desktop-Voice-Assistant',
    live: null,
    featured: false,
    image: '/images/devin-assistant.webp',
    imageAlt: 'Maya — Desktop Voice Assistant with audio waveform and GUI',
  },
  {
    id: 10,
    title: 'ASL Translator',
    description:
      'American Sign Language translator using CNN models for real-time gesture classification from webcam feed. Converts hand signs to text with high accuracy.',
    tags: ['Python', 'CNN', 'OpenCV', 'TensorFlow'],
    category: 'AI / CV',
    github: 'https://github.com/ArnavPundir22/ASL-translator',
    live: null,
    featured: false,
    image: '/images/asl-translator.webp',
    imageAlt: 'ASL Translator — hand sign recognition with CNN neural network',
  },
  {
    id: 11,
    title: 'Voice2Code — Codio',
    description:
      'AI-powered tool that converts spoken programming instructions into executable code in real time. Bridges voice interface with code generation using NLP pipelines.',
    tags: ['Python', 'NLP', 'Speech Recognition', 'Code Gen'],
    category: 'AI / NLP',
    github: 'https://github.com/ArnavPundir22/Voice2Code-Codio',
    live: null,
    featured: false,
    image: '/images/voice2code.webp',
    imageAlt: 'Voice2Code — microphone audio waveform transforming into code',
  },
  {
    id: 12,
    title: 'Emotion Music App',
    description:
      'Plays songs based on the user\'s detected emotion using DeepFace and PyQt5. Webcam-based mood detection with intelligent audio selection for personalized music playback.',
    tags: ['Python', 'DeepFace', 'PyQt5', 'OpenCV'],
    category: 'AI / CV',
    github: 'https://github.com/ArnavPundir22/EmotionMusicApp',
    live: null,
    featured: false,
    image: '/images/emotion-music.webp',
    imageAlt: 'Emotion Music App — face emotion detection connected to music visualization',
  },
  {
    id: 13,
    title: 'SHEro - Smart Women Safety App',
    description:
      'Web app for real-time location sharing and SOS triggering. Built with Flask backend, integrates maps and instant alert systems for emergency response.',
    tags: ['Flask', 'JavaScript', 'Maps API', 'Python'],
    category: 'Full-Stack',
    github: 'https://github.com/ArnavPundir22/SHEro-Smart-Women-Safety-App',
    live: null,
    featured: false,
    image: '/images/women-safety.webp',
    imageAlt: 'Smart Women Safety App — map with SOS alert and safety perimeter',
  },
  {
    id: 14,
    title: 'Surgical Tool Detection',
    description:
      'YOLO-based detection of surgical instruments in laparoscopy videos. Supports real-time inference on medical video streams for operating room assistance.',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'Medical AI'],
    category: 'AI / CV',
    github: 'https://github.com/ArnavPundir22/Surgical-Tool-Detection-in-laparoscopy-video',
    live: null,
    featured: false,
    image: '/images/surgical-tool.webp',
    imageAlt: 'Surgical Tool Detection — laparoscopy view with YOLO bounding boxes',
  },
  {
    id: 15,
    title: 'Air-Kalam',
    description: 'Hand gesture-controlled whiteboard pen. Use hand gestures to write and draw without a mouse or drawing pad, simply by moving fingers in front of the camera.',
    tags: ['Web App', 'Vercel'],
    category: 'Full-Stack',
    github: 'https://github.com/ArnavPundir22/Air-Kalam-',
    live: 'https://air-kalam-7w7q.vercel.app/',
    featured: false,
    image: '/images/air-kalam.webp',
    imageAlt: 'Air-Kalam — hand gesture drawing with colorful glowing trails on virtual whiteboard',
  },
  {
    id: 16,
    title: 'GitHub City',
    description: 'Visualize any GitHub user\'s repository portfolio as a living, breathing 3D city — where every building is a repo and every window is a commit. Features realistic skyscraper geometry and commit-driven window lighting.',
    tags: ['React.js', 'Three.js', 'Vite', 'GitHub API'],
    category: 'Full-Stack',
    github: 'https://github.com/ArnavPundir22/GitHub-City',
    live: 'https://arnavpundir22.github.io/GitHub-City/',
    featured: true,
    image: '/images/github-city.webp',
    imageAlt: 'GitHub City — 3D skyscraper city visualization of GitHub repositories',
  },
]

export const projectCategories = ['All', 'AI / CV', 'Full-Stack', 'AI / NLP']

export const education = [
  {
    degree: 'Bachelor of Technology — Computer Science & Engineering',
    institution: 'COER University',
    location: 'Roorkee, India',
    period: '2024 – 2028',
    current: true,
    description: 'Focused on AI, computer vision, full-stack development, and software engineering. Building production-grade projects alongside academics.',
  },
  {
    degree: 'Senior Secondary — PCM (Class XII)',
    institution: 'Atal Utkrisht Gov. Inter College',
    location: 'Roorkee, India',
    period: '2022 – 2024',
    current: false,
    description: 'Physics, Chemistry, Mathematics stream with strong foundation in analytical thinking.',
  },
  {
    degree: 'Secondary School (Class X)',
    institution: 'Montfort Sen. Sec. School',
    location: 'Roorkee, India',
    period: '2020 – 2022',
    current: false,
    description: 'Completed foundational studies with a strong interest in science and technology.',
  },
]

export const certifications = [
  {
    title: 'GirlScript Summer of Code 2026 — Accepted (Contributor / Mentee)',
    issuer: 'GirlScript Summer of Code (GSSoC)',
    badge: 'github',
    description: 'Accepted in GSSoC 2026 Open Source Track as Contributor / Mentee; official contribution period starts 15 May 2026.',
    color: '#ec4899',
    verificationUrl: 'https://gssoc.girlscript.org/profile/9d938472-12fc-4980-bbdb-ee3f137552f0',
  },
  {
    title: 'Nexus Spring of Code 2026 — Contributor',
    issuer: 'Nexus Spring of Code (NSoC)',
    badge: 'github',
    description: "Completed NSoC '26 open-source program, actively collaborating on projects with mentors and community to achieve Global Rank 70.",
    color: '#8b5cf6',
    verificationUrl: 'https://drive.google.com/drive/folders/1Y9uOCb0bdL6XBZF77tvt6ZTIpuessB5h',
  },
  {
    title: 'Introduction to Generative AI',
    issuer: 'Google',
    badge: 'google',
    description: 'Foundational concepts of large language models, generative AI applications, and responsible AI practices.',
    color: '#4285F4',
    verificationUrl: 'https://drive.google.com/file/d/1OUU8nCSkueaeqoJyA0rbvZGWvDGdsPbs/view?usp=drive_link',
  },
  {
    title: 'Prompt Engineering with GitHub Copilot',
    issuer: 'GitHub',
    badge: 'github',
    description: 'AI-assisted development workflows, effective prompt engineering, and productivity with Copilot in real codebases.',
    color: '#6e40c9',
    verificationUrl: 'https://drive.google.com/file/d/1wjDyDttna5Z6ThdY7aGrTEk_trS5SV69/view?usp=drive_link',
  },
  {
    title: 'Azure AI Vision',
    issuer: 'Microsoft Learn',
    badge: 'microsoft',
    description: 'Object detection, OCR, face recognition, and deployment of AI vision solutions on Azure cloud.',
    color: '#00a4ef',
    verificationUrl: 'https://learn.microsoft.com/en-us/users/arnavpundir-7070/achievements?tab=tab-learning-paths',
  },
]
