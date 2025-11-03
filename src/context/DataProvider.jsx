import React, { createContext, useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
} from "react-icons/fa";
export const DataContext = createContext(null);

const initialData = {
  services: [
    {
      imageSrc: "",
      number: 1,
        icon: FaLaptopCode,
      title: "Web Development",
      description:
        "Get high-performance, scalable web solutions with modern UI/UX design and enterprise-grade security. Fast loading speeds and a business-focused, mobile-first approach ensure your online presence is robust and future-ready.",
      buttonLink: "/services/web-development",
    },
    {
      imageSrc: "https://via.placeholder.com/100/4169E1/FFFFFF?text=App",
      number: 2,
        icon: FaMobileAlt,
      title: "App Development",
      description:
        "Build cross-platform mobile apps with seamless user experiences, advanced security, and real-time synchronization. Native iOS and Android solutions guarantee high performance and optimal optimization for every device.",
      buttonLink: "/services/app-development",
    },
    {
      imageSrc: "https://via.placeholder.com/100/3CB371/FFFFFF?text=UI/UX",
      number: 3,
        icon: FaPalette,
      title: "UI/UX Design",
      description:
        "We craft engaging, intuitive interfaces using professional tools like Figma and Adobe XD. Our branding solutions and data-driven, user-centered designs deliver premium and memorable visual experiences for your audience.",
      buttonLink: "/services/ui-ux-design",
    },
  ],
  team: [
    {
      id: "t1",
      name: "Gaurav Kumar",
      role: "Frontend Developer",
      avatar: "https://i.pravatar.cc/150?img=3",
      socialLinks: [
        { icon: FaLinkedinIn, url: "https://linkedin.com/in/gaurav" },
        { icon: FaInstagram, url: "https://instagram.com/gaurav" },
      ],
    },
    {
      id: "t2",
      name: "Priya Sharma",
      role: "Backend Developer",
      avatar: "https://i.pravatar.cc/150?img=5",
      socialLinks: [
        { icon: FaLinkedinIn, url: "https://linkedin.com/in/priya" },
        { icon: FaInstagram, url: "https://instagram.com/priya" },
      ],
    },
    {
      id: "t3",
      name: "Arjun Singh",
      role: "UI/UX Designer",
      avatar: "https://i.pravatar.cc/150?img=7",
      socialLinks: [
        { icon: FaLinkedinIn, url: "https://linkedin.com/in/arjun" },
        { icon: FaInstagram, url: "https://instagram.com/arjun" },
      ],
    },
    {
      id: "t4",
      name: "Sneha Patel",
      role: "DevOps Engineer",
      avatar: "https://i.pravatar.cc/150?img=9",
      socialLinks: [
        { icon: FaLinkedinIn, url: "https://linkedin.com/in/sneha" },
        { icon: FaInstagram, url: "https://instagram.com/sneha" },
      ],
    },
  ],
  social: [
    { icon: FaFacebookF, url: "https://facebook.com/yourpage" },
    { icon: FaInstagram, url: "https://instagram.com/yourhandle" },
    { icon: FaLinkedinIn, url: "https://linkedin.com/company/yourcompany" },
    { icon: FaYoutube, url: "https://youtube.com/yourchannel" },
  ],
  events: [
    {
      title: "Hack Gear 1.0",
      date: "April 30, 2025",
      description: "Nova Coders' first-ever hackathon at VIT Aligarh.",
      image: "https://source.unsplash.com/600x400/?hackathon,team",
      status: "Complete",
    },
    {
      title: "TechVerse Workshop",
      date: "October 13–17, 2025",
      description: "A 5-day hands-on workshop by Nova Coders.",
      image: "https://source.unsplash.com/600x400/?workshop,tech",
      status: "Upcoming",
    },
    {
      title: "Open Source Connect",
      date: "August 2025",
      description: "India's largest open-source collaboration event.",
      image: "https://source.unsplash.com/600x400/?opensource,event",
      status: "Ongoing",
    },
    {
      title: "AI/ML Bootcamp",
      date: "December 2025",
      description: "Intensive 2-week AI/ML training program.",
      image: "https://source.unsplash.com/600x400/?ai,ml",
      status: "Upcoming",
    },
    {
      title: "Web Dev Masterclass",
      date: "September 2025",
      description: "Complete web development course with hands-on projects.",
      image: "https://source.unsplash.com/600x400/?web,development",
      status: "Ongoing",
    },
  ],
  timeline: [
    {
      year: "2024",
      title: "Foundation",
      description:
        "Nova Coders was founded with a vision to bridge the gap between academic learning and industry requirements.",
      icon: "🚀",
    },
    {
      year: "2024",
      title: "First Workshop",
      description:
        "Conducted our first tech workshop on Web Development fundamentals with 50+ participants.",
      icon: "📚",
    },
    {
      year: "2025",
      title: "Community Growth",
      description:
        "Reached 500+ active members and launched our mentorship program.",
      icon: "👥",
    },
    {
      year: "2025",
      title: "Hack Gear 1.0",
      description:
        "Successfully organized our first hackathon with 200+ participants and industry partnerships.",
      icon: "🏆",
    },
  ],
  whyChooseUs: [
    {
      icon: "💡",
      title: "Innovation",
      description: "Cutting-edge technologies and modern development practices",
    },
    {
      icon: "🤝",
      title: "Community",
      description: "Supportive network of like-minded developers and mentors",
    },
    {
      icon: "🎯",
      title: "Mentorship",
      description: "Guidance from industry experts and experienced developers",
    },
    {
      icon: "🛠️",
      title: "Real Projects",
      description: "Hands-on experience with actual industry projects",
    },
  ],
  projects: [
    {
      id: 1,
      title: "Nova Coders Website",
      description: "Modern, responsive website for Nova Coders community with advanced animations and optimized performance. Built with React, Tailwind CSS, and Framer Motion for seamless user experience.",
      image: "https://ik.imagekit.io/novacoders/Photos/IMG_20250503_170636.jpg?updatedAt=1760639131433&tr=f-webp,q-80,w-600",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Node.js", "Context API"],
      githubUrl: "https://github.com/novacoders/website",
      liveUrl: "https://novacoders.dev",
      category: "web",
      teamSize: 4,
      status: "completed"
    },
    {
      id: 2,
      title: "AI Code Assistant",
      description: "Intelligent code completion and suggestion tool powered by machine learning. Helps developers write better code faster with AI-powered insights and real-time suggestions.",
      image: "https://ik.imagekit.io/novacoders/Photos/IMG_20250503_172507.jpg?updatedAt=1760639131470&tr=f-webp,q-80,w-600",
      technologies: ["Python", "TensorFlow", "FastAPI", "React", "OpenAI"],
      githubUrl: "https://github.com/novacoders/ai-assistant",
      liveUrl: "https://ai.novacoders.dev",
      category: "ai/ml",
      teamSize: 3,
      status: "in-progress"
    },
    {
      id: 3,
      title: "Blockchain Voting System",
      description: "Secure, transparent voting system built on blockchain technology. Ensures vote integrity and provides real-time results with complete transparency and immutable records.",
      image: "https://ik.imagekit.io/novacoders/Photos/IMG_20250503_093659.jpg?updatedAt=1760639131355&tr=f-webp,q-80,w-600",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask"],
      githubUrl: "https://github.com/novacoders/blockchain-voting",
      category: "blockchain",
      teamSize: 5,
      status: "completed"
    },
    {
      id: 4,
      title: "Cybersecurity Dashboard",
      description: "Real-time security monitoring dashboard for network threat detection and analysis. Provides comprehensive security insights, alerts, and automated threat response.",
      image: "https://ik.imagekit.io/novacoders/Photos/IMG_20250503_084932.jpg?updatedAt=1760639131475&tr=f-webp,q-80,w-600",
      technologies: ["Vue.js", "Python", "Docker", "PostgreSQL", "Redis"],
      githubUrl: "https://github.com/novacoders/security-dashboard",
      category: "web",
      teamSize: 4,
      status: "in-progress"
    },
    {
      id: 5,
      title: "IoT Smart Home System",
      description: "Complete IoT solution for smart home automation with voice control and mobile app integration. Controls lights, temperature, security systems, and energy monitoring.",
      image: "https://ik.imagekit.io/novacoders/Photos/IMG-20251011-WA0013.jpg?updatedAt=1760639131382&tr=f-webp,q-80,w-600",
      technologies: ["Arduino", "Raspberry Pi", "MQTT", "Flutter", "Firebase"],
      githubUrl: "https://github.com/novacoders/smart-home",
      category: "mobile",
      teamSize: 3,
      status: "planning"
    }
  ],
};

// Optimized images with WebP format and multiple sizes
const allimages = [
  {
    src: "https://ik.imagekit.io/novacoders/Photos/IMG_20250503_170636.jpg?updatedAt=1760639131433&tr=f-webp,q-80,w-800",
    srcSet: "https://ik.imagekit.io/novacoders/Photos/IMG_20250503_170636.jpg?updatedAt=1760639131433&tr=f-webp,q-80,w-400 400w, https://ik.imagekit.io/novacoders/Photos/IMG_20250503_170636.jpg?updatedAt=1760639131433&tr=f-webp,q-80,w-800 800w",
    alt: "Photo 1",
    loading: "lazy",
  },
  {
    src: "https://ik.imagekit.io/novacoders/Photos/IMG_20250503_172507.jpg?updatedAt=1760639131470&tr=f-webp,q-80,w-800",
    srcSet: "https://ik.imagekit.io/novacoders/Photos/IMG_20250503_172507.jpg?updatedAt=1760639131470&tr=f-webp,q-80,w-400 400w, https://ik.imagekit.io/novacoders/Photos/IMG_20250503_172507.jpg?updatedAt=1760639131470&tr=f-webp,q-80,w-800 800w",
    alt: "Photo 2",
    loading: "lazy",
  },
  {
    src: "https://ik.imagekit.io/novacoders/Photos/IMG_20250503_093659.jpg?updatedAt=1760639131355&tr=f-webp,q-80,w-800",
    srcSet: "https://ik.imagekit.io/novacoders/Photos/IMG_20250503_093659.jpg?updatedAt=1760639131355&tr=f-webp,q-80,w-400 400w, https://ik.imagekit.io/novacoders/Photos/IMG_20250503_093659.jpg?updatedAt=1760639131355&tr=f-webp,q-80,w-800 800w",
    alt: "Photo 3",
    loading: "lazy",
  },
  {
    src: "https://ik.imagekit.io/novacoders/Photos/IMG_20250503_170534.jpg?updatedAt=1760639131430&tr=f-webp,q-80,w-800",
    srcSet: "https://ik.imagekit.io/novacoders/Photos/IMG_20250503_170534.jpg?updatedAt=1760639131430&tr=f-webp,q-80,w-400 400w, https://ik.imagekit.io/novacoders/Photos/IMG_20250503_170534.jpg?updatedAt=1760639131430&tr=f-webp,q-80,w-800 800w",
    alt: "Photo 4",
    loading: "lazy",
  },
  {
    src: "https://ik.imagekit.io/novacoders/Photos/IMG_20250503_084932.jpg?updatedAt=1760639131475&tr=f-webp,q-80,w-800",
    srcSet: "https://ik.imagekit.io/novacoders/Photos/IMG_20250503_084932.jpg?updatedAt=1760639131475&tr=f-webp,q-80,w-400 400w, https://ik.imagekit.io/novacoders/Photos/IMG_20250503_084932.jpg?updatedAt=1760639131475&tr=f-webp,q-80,w-800 800w",
    alt: "Photo 5",
    loading: "lazy",
  },
  {
    src: "https://ik.imagekit.io/novacoders/Photos/IMG-20251011-WA0013.jpg?updatedAt=1760639131382&tr=f-webp,q-80,w-800",
    srcSet: "https://ik.imagekit.io/novacoders/Photos/IMG-20251011-WA0013.jpg?updatedAt=1760639131382&tr=f-webp,q-80,w-400 400w, https://ik.imagekit.io/novacoders/Photos/IMG-20251011-WA0013.jpg?updatedAt=1760639131382&tr=f-webp,q-80,w-800 800w",
    alt: "Photo 6",
    loading: "lazy",
  },
  {
    src: "https://ik.imagekit.io/novacoders/Photos/IMG-20251011-WA0042.jpg?updatedAt=1760639131271&tr=f-webp,q-80,w-800",
    srcSet: "https://ik.imagekit.io/novacoders/Photos/IMG-20251011-WA0042.jpg?updatedAt=1760639131271&tr=f-webp,q-80,w-400 400w, https://ik.imagekit.io/novacoders/Photos/IMG-20251011-WA0042.jpg?updatedAt=1760639131271&tr=f-webp,q-80,w-800 800w",
    alt: "Photo 8",
    loading: "lazy",
  },
  {
    src: "https://ik.imagekit.io/novacoders/Photos/IMG-20251011-WA0014.jpg?updatedAt=1760639131364&tr=f-webp,q-80,w-800",
    srcSet: "https://ik.imagekit.io/novacoders/Photos/IMG-20251011-WA0014.jpg?updatedAt=1760639131364&tr=f-webp,q-80,w-400 400w, https://ik.imagekit.io/novacoders/Photos/IMG-20251011-WA0014.jpg?updatedAt=1760639131364&tr=f-webp,q-80,w-800 800w",
    alt: "Photo 9",
    loading: "lazy",
  },
];

// Optimized partner logos
const imageLogos = [
  {
    src: "https://ik.imagekit.io/novacoders/Photos/image.avif?updatedAt=1760639131274&tr=f-webp,q-90,w-200",
    alt: "cyberfort tech",
    href: "https://www.cyberfort.tech/",
    loading: "lazy",
  },
  {
    src: "https://ik.imagekit.io/novacoders/Photos/primary_logo.webp?updatedAt=1760639131302&tr=f-webp,q-90,w-200",
    alt: "where u elevate",
    href: "https://whereuelevate.com/",
    loading: "lazy",
  },
  {
    src: "https://ik.imagekit.io/novacoders/Photos/logo-B44AG4cU.png?updatedAt=1760639131348&tr=f-webp,q-90,w-200",
    alt: "techiehelp",
    href: "https://www.techiehelp.in/",
    loading: "lazy",
  },
  {
    src: "https://ik.imagekit.io/novacoders/Photos/551101046_17857560783510599_1229464419472107943_n.jpg?updatedAt=1760639131249&tr=f-webp,q-90,w-200",
    alt: "nerdsroom",
    href: "https://www.linkedin.com/company/nerds-room/",
    loading: "lazy",
  },
  {
    src: "https://ik.imagekit.io/novacoders/Photos/527571807_17865813603429598_6175066066889160637_n.jpg?updatedAt=1760639131255&tr=f-webp,q-90,w-200",
    alt: "devsphereindia",
    href: "https://www.linkedin.com/company/devsphereindia-community/",
    loading: "lazy",
  },
];
const DataProvider = ({ children }) => {
  const [services] = useState(initialData.services);
  const [team] = useState(initialData.team);
  const [social] = useState(initialData.social);
  const [events] = useState(initialData.events);
  const [timeline] = useState(initialData.timeline);
  const [whyChooseUs] = useState(initialData.whyChooseUs);
  const [projects] = useState(initialData.projects);
  const [images] = useState(allimages);
  const [partners] = useState(imageLogos);

  return (
    <DataContext.Provider
      value={{
        services,
        team,
        social,
        events,
        timeline,
        whyChooseUs,
        projects,
        images,
        partners,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
