import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import Signin from "../components/SignIn";
import Signup from "../components/Signup";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false); // default to Login on the left

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-18"
      style={{
        background:
          "linear-gradient(150deg, #1a1a2e 0%, #1a1a2e 45%, #7c3aed 45%, #7c3aed 80%)",
      }}
    >
      <div className="w-full max-w-5xl bg-gray-800/30 backdrop-blur-md rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.4)] overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex md:w-1/2 items-center justify-center px-10 lg:px-16 py-12 text-white bg-white/5"
          >
            <div>
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                {isSignup ? "Create Free Account" : "Welcome"}
              </h1>
              <p className="text-gray-300 text-sm max-w-xs">
                Join Nova Coders to learn, build, and grow with an amazing community.
              </p>
            </div>
          </Motion.div>
          <div className="w-full md:w-1/2 overflow-hidden">
            <Motion.div
              className="flex w-[200%]"
              animate={{ x: isSignup ? "-50%" : "0%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <div className="w-1/2">
                <Signin switchForm={() => setIsSignup(true)} />
              </div>
              <div className="w-1/2">
                <Signup switchForm={() => setIsSignup(false)} />
              </div>
            </Motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
