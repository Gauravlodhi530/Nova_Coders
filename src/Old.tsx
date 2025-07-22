import React, { useState } from 'react';

// Placeholder icons - in a real app, use an icon library like Lucide React or SVGs
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);


// Navigation Bar Component
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  // State to manage which dropdown is open (for mobile)
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);


  const navLinks = [
    { name: 'Home', href: '#' },
    { 
      name: 'Courses', 
      href: '#', 
      dropdown: true, 
      dropdownItems: [
        { name: 'Web Development', href: '#' },
        { name: 'Data Science', href: '#' },
        { name: 'Game Development', href: '#' },
        { name: 'Cybersecurity', href: '#' },
      ] 
    },
    { name: 'Community', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  // Function to toggle mobile dropdowns
  const toggleMobileDropdown = (dropdownName) => {
    if (openMobileDropdown === dropdownName) {
      setOpenMobileDropdown(null);
    } else {
      setOpenMobileDropdown(dropdownName);
    }
  };

  return (
    <nav className="bg-gray-900 bg-opacity-80 backdrop-blur-md text-white fixed w-full z-50 top-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-3xl font-bold tracking-tighter">
              Nova <span className="text-purple-400">Coders</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div key={link.name} className="relative" 
                     onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                     onMouseLeave={() => setIsCoursesDropdownOpen(false)}>
                  <button
                    // Removed onClick for desktop, relying on hover
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-600 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    {link.name} <ChevronDownIcon />
                  </button>
                  {isCoursesDropdownOpen && (
                    <div 
                      className="absolute left-0 mt-0 pt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 py-1 z-50"
                    >
                      {link.dropdownItems.map(item => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500 hover:text-white transition-colors duration-200"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-600 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              )
            ))}
            <button className="ml-4 px-4 py-2 rounded-md text-sm font-medium bg-purple-600 hover:bg-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
              Sign Up
            </button>
            <button className="ml-2 px-4 py-2 rounded-md text-sm font-medium border border-purple-500 hover:bg-purple-500 hover:text-white transition-colors duration-300">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
               link.dropdown ? (
                <div key={link.name} className="relative">
                  <button
                    onClick={() => toggleMobileDropdown(link.name)} // Use unique name
                    className="w-full text-left  px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-purple-600 hover:text-white transition-colors duration-300 flex items-center justify-between"
                  >
                    {link.name} <ChevronDownIcon />
                  </button>
                  {openMobileDropdown === link.name && ( // Check against unique name
                    <div className="pl-4 py-1">
                      {link.dropdownItems.map(item => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:bg-purple-500 hover:text-white transition-colors duration-200"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-purple-600 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
              )
            ))}
            <button className="w-full mt-2 block px-3 py-2 rounded-md text-base font-medium bg-purple-600 hover:bg-purple-700 transition-colors duration-300 shadow-md">
              Sign Up
            </button>
            <button className="w-full mt-2 block px-3 py-2 rounded-md text-base font-medium border border-purple-500 hover:bg-purple-500 hover:text-white transition-colors duration-300">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated background elements - conceptual */}
      <div className="absolute inset-0 z-0 opacity-20">
        {/* Example: floating particles or abstract shapes. This would require more JS/CSS for actual animation */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-600 rounded-full filter blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-500 rounded-lg filter blur-xl animate-pulse animation-delay-4000 transform rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Coding Potential</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Join Nova Coders and dive into a universe of cutting-edge courses, vibrant community, and endless learning possibilities.
        </p>
        <div className="space-x-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-4 sm:mb-0 w-full sm:w-auto">
            Explore Courses
          </button>
          <button className="border-2 border-purple-500 hover:bg-purple-500 text-white font-semibold py-3 px-8 rounded-lg text-lg hover:text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
            Join Community
          </button>
        </div>
      </div>
    </section>
  );
};

// Main App Component
function Old() {
  return (
    <div className="font-sans bg-gray-900">
      <Navbar />
      <HeroSection />
      {/* Other sections/pages will go here */}
      {/* Example of a placeholder for course listings */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Course Cards */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-700 p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col">
                <div className="bg-purple-500 h-40 rounded-lg mb-4 flex items-center justify-center text-white text-2xl">
                  {/* Placeholder for course image or icon */}
                  Course Image {i}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Awesome Coding Course {i}</h3>
                <p className="text-gray-400 mb-4 flex-grow">Learn the fundamentals and advanced topics in this comprehensive course.</p>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 mt-auto">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 border-t border-gray-700 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Nova Coders. All rights reserved.</p>
          <p className="mt-2">Elevating developers, one line of code at a time.</p>
        </div>
      </footer>
    </div>
  );
}

export default Old;