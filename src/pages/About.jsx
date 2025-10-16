import React, { useContext } from "react";
import { motion } from "framer-motion";
import { DataContext } from "../context/DataProvider";
import MissionVision from "../components/MissionVision";
import TeamCard from "../components/TeamCard";
import Button from "../components/ui/Button";
import Ballpit from "../components/Ballpit";

const About = () => {
  const { team, timeline } = useContext(DataContext);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      },
    },
  };

  const timelineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#030712] via-[#0c1329] to-[#232a46]">
    <div className="relative overflow-hidden w-full min-h-[90vh] md:min-h-[90vh] max-h-[700px]">
  {/* Ballpit Background Animation */}
  <Ballpit
    count={100}
    gravity={0.01}
    friction={0.9975}
    wallBounce={0.95}
    followCursor={false}
    colors={["#3B82F6", "#60A5FA", "#93C5FD", "#1E40AF"]}
    ambientColor={0xffffff}
    ambientIntensity={1}
    lightIntensity={200}
    minSize={0.5}
    maxSize={1.2}
    size0={1}
    maxVelocity={0.15}
    maxX={5}
    maxY={5}
    maxZ={2}
  />

  {/* Overlay: About Us Content */}
  <section className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 lg:px-20 bg-gradient-to-br from-[#030712]/20 via-[#0c1329]/50 to-[#232a46]/20">
    <motion.div
      className="relative z-10 max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white"
        variants={itemVariants}
      >
        <span className="bg-gradient-to-r from-[#60a5fa] to-[#818cf8] bg-clip-text text-transparent">
          About Us
        </span>
      </motion.h1>

      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 text-gray-300 font-semibold"
        variants={itemVariants}
      >
        Who We Are & <span className="text-blue-400 font-semibold">What We Do</span>
      </motion.h2>

      <motion.p
        className="text-base sm:text-lg md:text-xl text-gray-100 max-w-full sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed"
        variants={itemVariants}
      >
        <strong>Nova Coders</strong> is a community of learners and innovators empowering students to become{" "}
        <span className="text-blue-400 font-semibold">
          industry-ready professionals
        </span>
        . We organize hackathons, tech seminars, and internships to explore technologies like{" "}
        <span className="text-blue-400 font-semibold">
          AI, Web Development, Blockchain, and Cybersecurity
        </span>{" "}
        through hands-on projects and mentorship.
      </motion.p>
    </motion.div>
  </section>
</div>
      {/* Mission & Vision Section */}
      <section className="py-16 px-6 md:px-10 lg:px-20">
        <MissionVision />
      </section>

      {/* Timeline Section */}
      <section id="timeline-section" className="py-16 px-6 md:px-10 lg:px-20">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-[#60a5fa] to-[#818cf8] bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              From a small group of passionate developers to a thriving
              community of innovators
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center"
                  variants={timelineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900 z-10"></div>

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"
                    }`}
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3">{item.icon}</span>
                        <span className="text-cyan-400 font-bold text-lg">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 md:px-10 lg:px-20">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-4">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-[#60a5fa] to-[#818cf8] bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              The passionate individuals behind Nova Coders, driving innovation
              and community growth
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {team.map((member) => (
              <motion.div key={member.id} variants={itemVariants}>
                <TeamCard {...member} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Join Us CTA Section */}
      <section id="join-section" className="py-16 px-6 md:px-10 lg:px-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 relative overflow-hidden"
            variants={itemVariants}
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl"></div>

            <div className="relative z-10">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6"
                variants={itemVariants}
              >
                <span className="bg-gradient-to-r from-[#60a5fa] to-[#818cf8] bg-clip-text text-transparent">
                  Ready to Join the Future?
                </span>
              </motion.h2>

              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                variants={itemVariants}
              >
                Become part of Nova Coders and start your journey towards
                becoming a tech innovator. Join our community of passionate
                developers, access mentorship, and work on real-world projects.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={itemVariants}
              >
                <Button
                  variant="secondary"
                  className="text-lg px-8 py-4"
                  onClick={() => alert("Join the Community clicked!")}
                >
                  Become a Member 🚀
                </Button>
                <Button
                  variant="outline"
                  className="text-lg px-8 py-4"
                  onClick={() => alert("Learn More clicked!")}
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
