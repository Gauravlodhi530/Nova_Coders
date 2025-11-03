import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaUsers, FaBrain } from "react-icons/fa";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-[#030712] via-[#0c1329] to-[#232a46] flex items-center justify-center  py-20 relative overflow-hidden">
      {/* Main Container */}
      <motion.div
        className="w-full max-w-6xl  backdrop-blur-xl rounded-3xl shadow-[0_0_60px_rgba(34,211,238,0.25)] border border-white/10 overflow-hidden relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row min-h-[700px]">
          {/* Left Side - Welcome Section */}
          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 p-6 lg:p-6 xl:p-16 flex flex-col justify-center relative bg-gradient-to-br from-cyan-500/5 to-blue-600/5"
          >
            <div className="relative z-10">
              {/* Logo/Brand */}
              <motion.div
                className="flex items-center gap-3 mb-10"
                variants={itemVariants}
              >
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaCode className="text-white text-2xl" />
                </motion.div>
                <h1 className="text-2xl font-bold text-white">Nova Coders</h1>
              </motion.div>

              {/* Main Heading */}
              <motion.div variants={itemVariants} className="mb-10">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 leading-tight">
                  {isSignup ? (
                    <>
                      Join Our{" "}
                      <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Community
                      </span>
                    </>
                  ) : (
                    <>
                      Welcome{" "}
                      <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Back
                      </span>
                    </>
                  )}
                </h2>
                <p className="text-gray-300 leading-relaxed max-w-xl">
                  {isSignup
                    ? "Start your journey with Nova Coders and become part of a thriving tech community focused on innovation and growth."
                    : "Continue your journey with Nova Coders and keep building amazing things. We're excited to have you back!"}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div variants={itemVariants} className="space-y-5 mb-5">
                {[
                  {
                    icon: FaUsers,
                    text: "500+ Active Members",
                    color: "from-cyan-500/20 to-blue-600/20",
                    iconColor: "text-cyan-400",
                    borderColor: "border-cyan-500/30",
                  },
                  {
                    icon: FaRocket,
                    text: "Real-world Projects",
                    color: "from-purple-500/20 to-pink-600/20",
                    iconColor: "text-purple-400",
                    borderColor: "border-purple-500/30",
                  },
                  {
                    icon: FaBrain,
                    text: "Expert Mentorship",
                    color: "from-green-500/20 to-teal-600/20",
                    iconColor: "text-green-400",
                    borderColor: "border-green-500/30",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 cursor-pointer group transition-all duration-300"
                    whileHover={{ x: 10, transition: { duration: 0.3 } }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center ${feature.borderColor} border-2 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <feature.icon
                        className={`${feature.iconColor} text-xl`}
                      />
                    </motion.div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced Testimonial */}
            </div>
          </motion.div>

          {/* Right Side - Auth Forms */}
          <div className="lg:w-1/2 relative overflow-hidden to-transparent">
            <motion.div
              className="flex w-[200%] h-full"
              animate={{ x: isSignup ? "-50%" : "0%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              {/* Login Form */}
              <div className="w-1/2 h-full">
                <Signin switchForm={() => setIsSignup(true)} />
              </div>

              {/* Signup Form */}
              <div className="w-1/2 h-full">
                <Signup switchForm={() => setIsSignup(false)} />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Accent Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </motion.div>

      {/* Simplified floating particles - reduced count for performance */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AuthPage;
