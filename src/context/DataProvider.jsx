import React, { createContext, useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
export const DataContext = createContext(null);

const initialData = {
  services:[
  {
    imageSrc: "https://via.placeholder.com/100/A020F0/FFFFFF?text=Web",
    number: 1,
    title: "Web Development",
    description:
      "Get high-performance, scalable web solutions with modern UI/UX design and enterprise-grade security. Fast loading speeds and a business-focused, mobile-first approach ensure your online presence is robust and future-ready.",
    buttonLink: "/services/web-development",
  },
  {
    imageSrc: "https://via.placeholder.com/100/4169E1/FFFFFF?text=App",
    number: 2,
    title: "App Development",
    description:
      "Build cross-platform mobile apps with seamless user experiences, advanced security, and real-time synchronization. Native iOS and Android solutions guarantee high performance and optimal optimization for every device.",
    buttonLink: "/services/app-development",
  },
  {
    imageSrc: "https://via.placeholder.com/100/3CB371/FFFFFF?text=UI/UX",
    number: 3,
    title: "UI/UX Design",
    description:
      "We craft engaging, intuitive interfaces using professional tools like Figma and Adobe XD. Our branding solutions and data-driven, user-centered designs deliver premium and memorable visual experiences for your audience.",
    buttonLink: "/services/ui-ux-design",
  }
],
  team: [
    {
      id: "t1",
      name: "Gaurav Kumar",
      role: "Frontend Developer",
      avatar: "https://i.pravatar.cc/150?img=3",
      socialLinks: [
        { icon: FaLinkedinIn, url: "https://linkedin.com/in/gaurav" },
        { icon: FaInstagram, url: "https://instagram.com/gaurav" }
      ]
    },
    {
      id: "t2",
      name: "Priya Sharma",
      role: "Backend Developer",
      avatar: "https://i.pravatar.cc/150?img=5",
      socialLinks: [
        { icon: FaLinkedinIn, url: "https://linkedin.com/in/priya" },
        { icon: FaInstagram, url: "https://instagram.com/priya" }
      ]
    },
    {
      id: "t3",
      name: "Arjun Singh",
      role: "UI/UX Designer",
      avatar: "https://i.pravatar.cc/150?img=7",
      socialLinks: [
        { icon: FaLinkedinIn, url: "https://linkedin.com/in/arjun" },
        { icon: FaInstagram, url: "https://instagram.com/arjun" }
      ]
    },
    {
      id: "t4",
      name: "Sneha Patel",
      role: "DevOps Engineer",
      avatar: "https://i.pravatar.cc/150?img=9",
      socialLinks: [
        { icon: FaLinkedinIn, url: "https://linkedin.com/in/sneha" },
        { icon: FaInstagram, url: "https://instagram.com/sneha" }
      ]
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
      description: "Nova Coders was founded with a vision to bridge the gap between academic learning and industry requirements.",
      icon: "🚀"
    },
    {
      year: "2024",
      title: "First Workshop",
      description: "Conducted our first tech workshop on Web Development fundamentals with 50+ participants.",
      icon: "📚"
    },
    {
      year: "2025",
      title: "Community Growth",
      description: "Reached 500+ active members and launched our mentorship program.",
      icon: "👥"
    },
    {
      year: "2025",
      title: "Hack Gear 1.0",
      description: "Successfully organized our first hackathon with 200+ participants and industry partnerships.",
      icon: "🏆"
    }
  ],
  whyChooseUs: [
    {
      icon: "💡",
      title: "Innovation",
      description: "Cutting-edge technologies and modern development practices"
    },
    {
      icon: "🤝",
      title: "Community",
      description: "Supportive network of like-minded developers and mentors"
    },
    {
      icon: "🎯",
      title: "Mentorship",
      description: "Guidance from industry experts and experienced developers"
    },
    {
      icon: "🛠️",
      title: "Real Projects",
      description: "Hands-on experience with actual industry projects"
    }
  ],
};

const DataProvider = ({ children }) => {
  const [services] = useState(initialData.services);
  const [team] = useState(initialData.team);
  const [social] = useState(initialData.social);
  const [events] = useState(initialData.events);
  const [timeline] = useState(initialData.timeline);
  const [whyChooseUs] = useState(initialData.whyChooseUs);
  return (
    <DataContext.Provider value={{ services, team, social, events, timeline, whyChooseUs }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
