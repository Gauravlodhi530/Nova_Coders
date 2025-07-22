
import React, { useState, useEffect } from 'react';

import NeumorphicCard from '../Components/NeumorphicCard';
import NeumorphicButton from '../Components/NeumorphicButton';
import NeumorphicInput from '../Components/NeumorphicInput';
import NeumorphicSelect from '../Components/NeumorphicSelect';
import TeamCard from '../Components/TeamCard';
import EventCard from '../Components/EventCard';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [joinForm, setJoinForm] = useState({
    name: '', email: '', interest_area: '', phone: '', college: '', experience_level: ''
  });
  const [contactForm, setContactForm] = useState({
    name: '', email: '', subject: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submissions
  const handleJoinSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // eslint-disable-next-line no-undef
      await Member.create(joinForm);
      setJoinForm({ name: '', email: '', interest_area: '', phone: '', college: '', experience_level: '' });
      alert('Successfully joined Nova Coders! Welcome to the community.');
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert('Error joining community. Please try again.');
    }
    setIsSubmitting(false);
  };
// Handle contact form submissions
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    // console.log(data);
    
    setIsSubmitting(true);
    try {
      // await Contact.create(contactForm);
      setContactForm({ name: '', email: '', subject: '', message: '' });
      console.log(setContactForm);
      
      alert('Message sent successfully! We\'ll get back to you soon.');
      console.log(contactForm);
    } catch (error) {
      alert('Error sending message. Please try again.');
    }
    setIsSubmitting(false);
  };

  // Smooth scrolling
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Sample data
  const focusAreas = [
    { name: 'Web Development', icon: '🌐', description: 'Frontend & Backend technologies' },
    { name: 'AI/ML', icon: '🤖', description: 'Machine Learning & Artificial Intelligence' },
    { name: 'Blockchain', icon: '⛓️', description: 'Decentralized applications & Crypto' },
    { name: 'Cybersecurity', icon: '🔒', description: 'Security & Ethical Hacking' },
    { name: 'Mobile Dev', icon: '📱', description: 'iOS & Android applications' },
    { name: 'UI/UX Design', icon: '🎨', description: 'User Experience & Interface Design' }
  ];

  const teamMembers = [
    {
      name: 'Gaurav Verma',
      role: 'Founder & Lead',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      bio: 'Passionate full-stack developer and community builder',
      social: { linkedin: '#', github: '#' }
    },
    {
      name: 'Harshvardhan',
      role: 'AI/ML Lead',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      bio: 'Machine learning enthusiast and researcher',
      social: { linkedin: '#', github: '#' }
    },
    {
      name: 'Shivam',
      role: 'Cybersecurity Head',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      bio: 'Ethical hacker and security researcher',
      social: { linkedin: '#', github: '#' }
    },
    {
      name: 'Hritik',
      role: 'Design Lead',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      bio: 'Creative UI/UX designer and design systems expert',
      social: { linkedin: '#', github: '#' }
    }
  ];

  const events = [
    {
      title: 'Hack Gear 2.0',
      date: 'March 15-17, 2024',
      description: 'Annual hackathon featuring AI, Web3, and innovative tech solutions',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=200&fit=crop',
      status: 'upcoming'
    },
    {
      title: 'Hack Gear 1.0',
      date: 'September 10-12, 2023',
      description: 'Our first successful hackathon with 200+ participants',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop',
      status: 'completed'
    },
    {
      title: 'Web Development Workshop',
      date: 'January 20, 2024',
      description: 'Hands-on workshop covering React, Node.js, and modern development',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=200&fit=crop',
      status: 'upcoming'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50 font-poppins">
      <style >{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .scroll-smooth { scroll-behavior: smooth; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-100/80 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
               <img className='h-15 w-18 rounded' src="src\assets\logo-removebg.png" alt="Logo " />
              <h1 className="text-2xl font-bold gradient-text">Nova Coders</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'About', 'Events', 'Team', 'Join', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-lg text-sm font-medium
                             hover:bg-white/50 transition-all duration-300"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2 rounded-lg
                         hover:bg-white/50 transition-all duration-300"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-100/95 backdrop-blur-md border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Events', 'Team', 'Join', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-lg text-base font-medium
                           hover:bg-white/50 transition-all duration-300 w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="floating-animation mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text mb-6">
              Nova Coders
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-6">
              Where Ideas Meet Innovation
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Tech community fostering growth in AI, Web Development, Cybersecurity & more. 
            Join us in building the future of technology in Aligarh.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <NeumorphicButton onClick={() => scrollToSection('join')}>
              Join the Community
            </NeumorphicButton>
            <NeumorphicButton variant="secondary" onClick={() => scrollToSection('about')}>
              Learn More
            </NeumorphicButton>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Nova Coders</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're a passionate community of developers, designers, and tech enthusiasts based in Aligarh, 
              dedicated to learning, sharing, and building innovative solutions together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {focusAreas.map((area, index) => (
              <NeumorphicCard key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{area.name}</h3>
                <p className="text-gray-600">{area.description}</p>
              </NeumorphicCard>
            ))}
          </div>

          <NeumorphicCard className="text-center p-12">
            <h3 className="text-2xl font-bold gradient-text mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              To create an inclusive environment where technology enthusiasts can collaborate, learn from each other, 
              and work on projects that make a real impact. We believe in the power of community-driven learning 
              and hands-on experience to shape the next generation of tech leaders.
            </p>
          </NeumorphicCard>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Events & Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From hackathons to workshops, we organize events that bring our community together 
              and provide opportunities for growth and collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The passionate individuals who drive Nova Coders forward and make our community thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Join Nova Coders</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to be part of something amazing? Join our community and start your journey 
              with like-minded tech enthusiasts.
            </p>
          </div>

          <NeumorphicCard className="p-8">
            <form onSubmit={handleJoinSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <NeumorphicInput
                  label="Full Name"
                  value={joinForm.name}
                  onChange={(e) => setJoinForm({...joinForm, name: e.target.value})}
                  placeholder="Enter your full name"
                  required
                />
                <NeumorphicInput
                  label="Email"
                  type="email"
                  value={joinForm.email}
                  onChange={(e) => setJoinForm({...joinForm, email: e.target.value})}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <NeumorphicSelect
                  label="Interest Area"
                  value={joinForm.interest_area}
                  onChange={(e) => setJoinForm({...joinForm, interest_area: e.target.value})}
                  options={["Web Development", "AI/ML", "Blockchain", "Cybersecurity", "Mobile Development", "UI/UX Design", "Data Science"]}
                  required
                />
                <NeumorphicSelect
                  label="Experience Level"
                  value={joinForm.experience_level}
                  onChange={(e) => setJoinForm({...joinForm, experience_level: e.target.value})}
                  options={["Beginner", "Intermediate", "Advanced"]}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <NeumorphicInput
                  label="Phone Number"
                  value={joinForm.phone}
                  onChange={(e) => setJoinForm({...joinForm, phone: e.target.value})}
                  placeholder="Enter your phone number"
                />
                <NeumorphicInput
                  label="College/Institution"
                  value={joinForm.college}
                  onChange={(e) => setJoinForm({...joinForm, college: e.target.value})}
                  placeholder="Enter your college name"
                />
              </div>

              <div className="text-center pt-4">
                <NeumorphicButton 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-12"
                >
                  {isSubmitting ? 'Joining...' : 'Join Nova Coders'}
                </NeumorphicButton>
              </div>
            </form>
          </NeumorphicCard>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions or ideas? We'd love to hear from you. Reach out and let's start a conversation.
            </p>
          </div>

          <NeumorphicCard className="p-8">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <NeumorphicInput
                  label="Name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  placeholder="Enter your name"
                  required
                />
                <NeumorphicInput
                  label="Email"
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <NeumorphicInput
                label="Subject"
                value={contactForm.subject}
                onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                placeholder="What's this about?"
              />

              <div className="w-full">
                <label className="block text-gray-700 font-medium mb-2 ml-2">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  placeholder="Tell us what's on your mind..."
                  required
                  rows={6}
                  className="
                    w-full px-6 py-4 rounded-2xl
                    bg-gradient-to-br from-gray-50 to-gray-100
                    border-none outline-none resize-none
                    shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]
                    focus:shadow-[inset_12px_12px_20px_#bebebe,inset_-12px_-12px_20px_#ffffff]
                    transition-all duration-300
                    text-gray-700 placeholder-gray-400
                  "
                />
              </div>

              <div className="text-center pt-4">
                <NeumorphicButton 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-12"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </NeumorphicButton>
              </div>
            </form>
          </NeumorphicCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-100 to-blue-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">Nova Coders</h3>
              <p className="text-gray-600 leading-relaxed">
                Building the future of technology in Aligarh, one project at a time.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Events', 'Team', 'Join', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Connect With Us</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                {[
                  { name: 'LinkedIn', icon: 'in' },
                  { name: 'GitHub', icon: 'gh' },
                  { name: 'Instagram', icon: 'ig' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-50 to-gray-100
                             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]
                             hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]
                             flex items-center justify-center transition-all duration-300
                             text-gray-700 hover:text-blue-600 font-bold"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-600">
              © 2024 Nova Coders. Made with ❤️ in Aligarh.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
