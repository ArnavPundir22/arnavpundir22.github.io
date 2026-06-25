export const profile = {
  name: 'Arnav Pundir',
  tagline: 'Full-Stack Developer & Open-Source Contributor',
  location: 'Roorkee, India',
  email: 'arnavp128@gmail.com',
  phone: '+91 70606 75133',
  github: 'https://github.com/ArnavPundir22',
  linkedin: 'https://www.linkedin.com/in/arnav-pundir128ap',
  cvUrl: '/Documents/Arnav_Pundir_Comprehensive_Resume.pdf',
  photo: '/images/man1.png',
  bio: [
    "I am a Full-Stack Engineer and UI/UX enthusiast with hands-on expertise building intelligent systems and high-performance web applications. My work heavily focuses on crafting seamless user experiences and engineering scalable, real-time platforms using React.js, Next.js, TypeScript, and Node.js. I specialize in delivering production-ready projects, including immersive 3D WebGL environments using Three.js, GSAP, and Framer Motion, as well as complex real-time video and multiplayer applications. Beyond development, I actively contribute to open-source software, having achieved Global Rank 70 in the completed Nexus Spring of Code '26 with 13 Pull Requests merged across 5 repositories. Currently pursuing a B.Tech in Computer Science and Engineering at COER University, Roorkee, I am passionate about bridging the gap between robust engineering, automation, and stunning modern web design."
  ],
  stats: [
    { value: 13, suffix: '+', label: 'Projects Built' },
    { value: 2, suffix: '+', label: 'Years Coding' },
    { value: 10, suffix: '+', label: 'Tech Stacks' },
    { value: 5, suffix: '', label: 'Certifications' },
  ],
}

export const roles = [
  'Full-Stack Developer',
  'Frontend Specialist',
  'Open-Source Contributor',
  '3D WebGL Enthusiast',
  'AI & Computer Vision Engineer',
]

export const experience = [
  {
    title: 'Freelance Frontend Developer',
    company: 'Client & Independent Projects',
    location: 'Roorkee, India',
    period: 'Jan 2024 – Present',
    description: [
      'Developed and deployed a responsive service-booking platform (SevaSetu) using React.js, translating client requirements into a modern, production-ready user interface.',
      'Engineered two ultra-premium cinematic hotel websites (Hotel Pacific, Hotel Sachin) utilizing Three.js, GSAP, and Framer Motion for immersive 3D WebGL rendering and physics-based scroll animations.',
      'Optimized frontend assets and implemented component lazy-loading, achieving 95+ Lighthouse performance and accessibility scores across all deployments.'
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
      'Achieved Global Rank 70 by merging 13 Pull Requests across 5 repositories, specializing in production-grade backend security and frontend performance.',
      'Migrated legacy authentication to secure, rotating HttpOnly cookie sessions and encrypted sensitive user data at rest utilizing Fernet cryptography.',
      'Enhanced backend security by tightening CORS policies, and improved frontend UX by implementing server-side pagination, debounced searches, and loading skeletons.'
    ]
  }
]

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
    id: 17,
    title: 'Occasions Event Registration Platform',
    description:
      'Engineered a full-stack event platform using Next.js 15 and TypeScript, supporting concurrent user traffic and dynamic event capacities for 500+ attendees. Secured platform routes by implementing role-based organizer/attendee authentication flows via NextAuth.js and MongoDB. Built robust search/filter algorithms with debouncing to reduce query latency by 40%, and developed automated CSV data export pipelines for organizers.',
    tags: ['Next.js 15', 'TypeScript', 'NextAuth.js', 'MongoDB', 'Tailwind CSS'],
    category: 'Full-Stack',
    github: 'https://github.com/ArnavPundir22/Occassions',
    live: 'https://occassions.vercel.app',
    featured: true,
    image: '/images/occassions.png',
    imageAlt: 'Occasions event management dashboard, tracking registrants, event capacity limits, and CSV export functionality.',
  },
  {
    id: 1,
    title: 'BaatCheet Real-Time Video Chat App',
    description:
      'Architected a scalable real-time messaging and peer-to-peer video streaming application using Node.js, Express, WebRTC, and Redis. Features an "ephemeral" data lifecycle that automatically self-destructs chat logs upon disconnect. Recently engineered a real-time multiplayer Air Draw feature using the Canvas API for synchronized hand-tracked drawing over video feeds, and integrated a comprehensive dark-mode glassmorphic emoji gallery.',
    tags: ['Node.js', 'Express', 'WebRTC', 'Redis', 'Canvas API'],
    category: 'Full-Stack',
    github: 'https://github.com/ArnavPundir22/BaatCheet',
    live: 'https://baatcheet-88e9.onrender.com',
    featured: true,
    image: '/images/BaatCheet.png',
    imageAlt: 'BaatCheet Real-Time Video Chat App interface showing ephemeral video streams and chat.',
  },
  {
    id: 2,
    title: 'TraceAI — Forensic Surveillance Intelligence Platform',
    description:
      'TraceAI is a real-time AI-powered forensic surveillance intelligence platform that identifies, tracks, and reconstructs the movement timeline of individuals across distributed CCTV/video sources using face recognition, person re-identification, temporal tracking, and event analytics.',
    tags: ['Python', 'FastAPI', 'YOLOv8', 'HTML/CSS', 'OpenCV'],
    category: 'AI / CV',
    github: 'https://github.com/ArnavPundir22/TraceAI-Intelligent-Missing-Person-Suspect-Tracking-System',
    live: null,
    featured: true,
    image: '/images/TraceAI.png',
    imageAlt: 'TraceAI is a real-time AI-powered forensic surveillance intelligence platform that identifies, tracks, and reconstructs the movement timeline of individuals across distributed CCTV/video sources using face recognition, person re-identification, temporal tracking, and event analytics.',
  },
  {
    id: 3,
    title: 'Face Recognition Attendance Web System',
    description:
      'Full-stack web app using Flask backend with InsightFace encoding pipeline. Automates attendance via group photo upload, multi-face detection, confidence scores, and structured CSV logs.',
    tags: ['Python', 'Flask', 'InsightFace', 'HTML/CSS', 'OpenCV'],
    category: 'AI / CV',
    github: 'https://github.com/ArnavPundir22/Face-Attendance-System-Web-Version',
    live: null,
    featured: true,
    image: '/images/insight-attend.png',
    imageAlt: 'InsightAttend — AI-Powered Smart Attendance System dashboard and face recognition demo',
  },
  {
    id: 4,
    title: 'SevaSetu — Service Booking Platform',
    description:
      'Real-world client service website built with React.js and Flask backend. Delivered a fully responsive booking platform with smooth navigation, REST API integration, and live deployment.',
    tags: ['React.js', 'Flask', 'Tailwind CSS', 'REST API', 'MySQL'],
    category: 'Full-Stack',
    github: 'https://github.com/ArnavPundir22/SevaSetu',
    live: 'https://sevasetu.app',
    featured: true,
    image: '/images/sevasetu.png',
    imageAlt: 'SevaSetu — Service Booking Platform dashboard with calendar and map',
  },
  {
    id: 5,
    title: 'Traffic Analysis System',
    description:
      'Real-time traffic monitoring using YOLOv8 for vehicle detection and counting. Supports multi-class detection, lane analysis, and generates structured traffic flow reports.',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'TensorFlow'],
    category: 'AI / CV',
    github: 'https://github.com/ArnavPundir22/Traffic_analysis-system',
    live: null,
    featured: true,
    image: '/images/traffic-analysis.png',
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
    image: '/images/docbot.png',
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
    image: '/images/anti-spoofing.png',
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
    image: '/images/air-mouse.png',
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
    image: '/images/devin-assistant.png',
    imageAlt: 'Devin — Desktop Voice Assistant with audio waveform and GUI',
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
    image: '/images/asl-translator.png',
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
    image: '/images/voice2code.png',
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
    image: '/images/emotion-music.png',
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
    image: '/images/women-safety.png',
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
    image: '/images/surgical-tool.png',
    imageAlt: 'Surgical Tool Detection — laparoscopy view with YOLO bounding boxes',
  },
  {
    id: 15,
    title: 'Air-Kalam',
    description: 'Hand Guesture controlled whiteboard pen. use hand guesture to write/ draw without using any mouse or writting pad, just by moving fingers in front of the camera.',
    tags: ['Web App', 'Vercel'],
    category: 'Full-Stack',
    github: 'https://github.com/ArnavPundir22/Air-Kalam-',
    live: 'https://air-kalam-7w7q.vercel.app/',
    featured: false,
    image: '/images/air-kalam.png',
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
    image: '/images/github-city.png',
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
