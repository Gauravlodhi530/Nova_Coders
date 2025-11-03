import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Lock, CheckCircle, XCircle, AlertCircle, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaGithub, FaGoogle, FaDiscord } from "react-icons/fa";
import { registerUser } from "../store/userActions";
import { clearError } from "../store/authSlice";
import Button from "./ui/Button";
import InputField from "./ui/InputField";

const Signup = ({ switchForm }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const [successMessage, setSuccessMessage] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);

  const password = watch("password", "");

  // Password strength calculation
  useEffect(() => {
    if (!password) {
      setPasswordStrength(0);
      return;
    }

    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    
    setPasswordStrength(strength);
  }, [password]);

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 25) return "bg-red-500";
    if (passwordStrength < 50) return "bg-orange-500";
    if (passwordStrength < 75) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength < 25) return "Weak";
    if (passwordStrength < 50) return "Fair";
    if (passwordStrength < 75) return "Good";
    return "Strong";
  };

  const onSubmit = async (data) => {
    try {
      dispatch(clearError());
      setSuccessMessage("");

      const result = await dispatch(registerUser({
        userName: data.username,
        email: data.email,
        password: data.password,
        fullName: data.name,
      }));

      if (registerUser.fulfilled.match(result)) {
        setSuccessMessage("Account created successfully! Redirecting...");
        reset();
        
        // Delay navigation to show success message
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 2000);
      }
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

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
    <motion.div
      className="w-full flex flex-col justify-center px-6 sm:px-10 py-8 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
      
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center mb-10 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <motion.div
            className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="text-white text-xl" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Join Nova Coders
          </h2>
        </div>
        <p className="text-gray-400 text-base">
          Start your journey with our amazing community
        </p>
      </motion.div>

      {/* Social Login Options */}
      <motion.div variants={itemVariants} className="mb-8 relative z-10">
        <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
          {[
            { icon: FaGoogle, color: "hover:bg-red-500/20 hover:border-red-400/50", label: "Google" },
            { icon: FaGithub, color: "hover:bg-gray-500/20 hover:border-gray-400/50", label: "GitHub" },
            { icon: FaDiscord, color: "hover:bg-indigo-500/20 hover:border-indigo-400/50", label: "Discord" },
          ].map((social, index) => (
            <motion.button
              key={index}
              className={`p-3.5 bg-white/5 border border-white/20 rounded-xl ${social.color} transition-all duration-300 flex items-center justify-center group`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="text-gray-400 group-hover:text-white transition-colors text-lg" />
            </motion.button>
          ))}
        </div>
        
        <div className="flex items-center gap-4 mt-8 max-w-md mx-auto">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/20"></div>
          <span className="text-gray-500 text-sm">or continue with email</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/20"></div>
        </div>
      </motion.div>

      {/* Error/Success Messages */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-4 bg-red-500/20 border border-red-400/50 rounded-xl text-red-400 text-sm text-center max-w-md mx-auto flex items-center gap-2"
          >
            <XCircle className="w-5 h-5" />
            {error}
          </motion.div>
        )}
        
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-4 bg-green-500/20 border border-green-400/50 rounded-xl text-green-400 text-sm text-center max-w-md mx-auto flex items-center gap-2"
          >
            <CheckCircle className="w-5 h-5" />
            {successMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Signup Form */}
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 max-w-md mx-auto relative z-10"
        variants={itemVariants}
      >
        {/* Full Name */}
        <motion.div variants={itemVariants}>
          <InputField
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            register={register}
            name="name"
            validation={{
              required: "Full name is required",
              minLength: { value: 2, message: "Name must be at least 2 characters" }
            }}
            error={errors.name}
            icon={User}
            className="mb-1"
          />
        </motion.div>

        {/* Username */}
        <motion.div variants={itemVariants}>
          <InputField
            label="Username"
            type="text"
            placeholder="Choose a username"
            register={register}
            name="username"
            validation={{
              required: "Username is required",
              minLength: { value: 3, message: "Username must be at least 3 characters" },
              pattern: {
                value: /^[a-zA-Z0-9_]+$/,
                message: "Username can only contain letters, numbers, and underscores"
              }
            }}
            error={errors.username}
            icon={User}
            className="mb-1"
          />
        </motion.div>

        {/* Email */}
        <motion.div variants={itemVariants}>
          <InputField
            label="Email Address"
            type="email"
            placeholder="Enter your email address"
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
            icon={Mail}
            className="mb-1"
          />
        </motion.div>

        {/* Password */}
        <motion.div variants={itemVariants}>
          <InputField
            label="Password"
            type="password"
            placeholder="Create a strong password"
            register={register}
            name="password"
            validation={{
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters" },
            }}
            error={errors.password}
            icon={Lock}
            showPasswordToggle={true}
            className="mb-1"
          />
          
          {/* Password Strength Indicator */}
          {password && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-3"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    className={`h-full ${getPasswordStrengthColor()} transition-all duration-300`}
                    initial={{ width: 0 }}
                    animate={{ width: `${passwordStrength}%` }}
                  />
                </div>
                <span className="text-xs text-gray-400 font-medium">{getPasswordStrengthText()}</span>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Terms and Conditions */}
        <motion.div variants={itemVariants} className="flex items-start gap-3 pt-2">
          <input
            type="checkbox"
            {...register("terms", { required: "Please accept the terms and conditions" })}
            className="mt-1 w-4 h-4 text-cyan-400 bg-transparent border border-white/20 rounded focus:ring-cyan-400 focus:ring-2 transition-all"
          />
          <label className="text-sm text-gray-400 leading-relaxed cursor-pointer">
            I agree to the{" "}
            <a href="/terms" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
              Privacy Policy
            </a>
          </label>
        </motion.div>
        
        {errors.terms && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-xs flex items-center gap-1"
          >
            <AlertCircle className="w-3 h-3" />
            {errors.terms.message}
          </motion.p>
        )}

        {/* Submit Button */}
        <motion.div variants={itemVariants}>
          <motion.div
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
          >
            <Button
              type="submit"
              variant="secondary"
              disabled={loading}
              className="w-full py-4 text-lg"
            >
              {loading ? (
                <>
                  <motion.div
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  Creating Account...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Create Account
                </>
              )}
            </Button>
          </motion.div>
        </motion.div>

        {/* Switch to Login */}
        <motion.p variants={itemVariants} className="text-center text-gray-400 text-sm pt-2">
          Already have an account?{" "}
          <motion.button
            type="button"
            onClick={switchForm}
            className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors hover:underline"
            whileHover={{ scale: 1.05 }}
          >
            Sign In
          </motion.button>
        </motion.p>
      </motion.form>

      {/* Floating Elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
          style={{
            left: `${20 + i * 30}%`,
            top: `${20 + i * 25}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};

export default Signup;
