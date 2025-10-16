import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import InputField from "../components/ui/InputField";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Login data:", data);
      
      // Show success toast (you can integrate with react-toastify)
      alert("Login successful! Redirecting to dashboard...");
      
      // Redirect to dashboard
      // window.location.href = "/dashboard";
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#030712] via-[#0c1329] to-[#232a46] flex items-center justify-center px-6 py-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <motion.div
        className="relative z-10 w-full max-w-md"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#60a5fa] to-[#818cf8] bg-clip-text text-transparent">
              Welcome Back
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Sign in to continue your journey with Nova Coders
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.3)] relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-sm -z-10"></div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Input */}
            <motion.div variants={itemVariants}>
              <InputField
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                register={register}
                name="email"
                validation={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                }}
                error={errors.email}
              />
            </motion.div>

            {/* Password Input */}
            <motion.div variants={itemVariants}>
              <InputField
                label="Password"
                type="password"
                placeholder="Enter your password"
                register={register}
                name="password"
                validation={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                }}
                error={errors.password}
                showPasswordToggle={true}
              />
            </motion.div>

            {/* Forgot Password Link */}
            <motion.div className="text-right" variants={itemVariants}>
              <Link
                to="/forgot-password"
                className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              >
                Forgot Password?
              </Link>
            </motion.div>

            {/* Login Button */}
            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                variant="secondary"
                disabled={isSubmitting}
                className="w-full text-lg py-4"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Signing In...
                  </>
                ) : (
                  <>
                    Sign In 🚀
                  </>
                )}
              </Button>
            </motion.div>
          </form>

          {/* Divider */}
          <motion.div className="flex items-center gap-4 my-6" variants={itemVariants}>
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </motion.div>

          {/* Google Login Button */}
          <motion.div variants={itemVariants}>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-medium py-3 rounded-lg transition-all duration-300 hover:border-cyan-400/50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>
          </motion.div>

          {/* Sign Up Link */}
          <motion.div className="text-center mt-6" variants={itemVariants}>
            <p className="text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200"
              >
                Sign Up
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;