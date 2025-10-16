import { DataContext } from "../context/DataProvider";
import React, { useContext } from "react";
//  Import useForm
import { useForm } from "react-hook-form";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./ui/Button";

const ContactFormSection = () => {
  const { social } = useContext(DataContext);
  // Initialize useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    // Optional: set default values if needed
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      url: "",
      message: "",
    },
  });

  //  Define the submission logic
  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert("Form sent! Thank you. (Demo)");

    reset();
  };

  // Helper component for error messages
  const ErrorMessage = ({ error }) => {
    if (!error) return null;
    return <p className="text-red-400 text-sm mt-1">{error.message}</p>;
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 rounded-2xl p-6 md:p-10 shadow-lg backdrop-blur-lg">
      {/* Left: Form */}
      <form
        // 4. Use handleSubmit wrapper
        onSubmit={handleSubmit(onSubmit)}
        className="flex-1 flex flex-col gap-4 bg-gray-700/15 shadow-gray-900 shadow-5xl rounded-xl p-6 backdrop-blur-xl  shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-[1.005] transition-all duration-300 border border-white/10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-white font-bold">
              Name<span className="text-cyan-400">*</span>
            </label>
            <input
              type="text"
              // 5. Register the input field with validation rules
              {...register("name", { required: "Name is required." })}
              className="mt-1 w-full rounded-md bg-transparent border border-cyan-500 px-3 py-2 text-white placeholder-gray-400 focus:outline-none"
              placeholder="Enter your name"
            />
            <ErrorMessage error={errors.name} />
          </div>
          <div>
            <label className="text-white font-bold">
              Phone<span className="text-cyan-400">*</span>
            </label>
            <input
              type="text"
              // 5. Register the input field with validation rules
              {...register("phone", {
                required: "Phone is required.",
                pattern: {
                  value: /^[0-9+() -]*$/,
                  message: "Invalid phone number format.",
                },
              })}
              className="mt-1 w-full rounded-md bg-transparent border border-cyan-500 px-3 py-2 text-white placeholder-gray-400 focus:outline-none"
              placeholder="Enter your phone number"
            />
            <ErrorMessage error={errors.phone} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-white font-bold">
              Email<span className="text-cyan-400">*</span>
            </label>
            <input
              type="email"
              // 5. Register the input field with validation rules
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address.",
                },
              })}
              className="mt-1 w-full rounded-md bg-transparent border border-cyan-500 px-3 py-2 text-white placeholder-gray-400 focus:outline-none"
              placeholder="Enter your email"
            />
            <ErrorMessage error={errors.email} />
          </div>
          <div>
            <label className="text-white font-bold">
              URL
              <span className="text-gray-400 font-normal text-xs">
                (Optional)
              </span>
            </label>
            <input
              type="url"
              // 5. Register the input field (optional, no 'required')
              {...register("url")}
              className="mt-1 w-full rounded-md bg-transparent border border-cyan-500 px-3 py-2 text-white placeholder-gray-400 focus:outline-none"
              placeholder="Enter website URL"
            />
            {/* URL validation could be added here if needed */}
          </div>
        </div>
        <div>
          <label className="text-white font-bold">
            Message
            <span className="text-gray-400 font-normal text-xs">
              (Optional)
            </span>
          </label>
          <textarea
            rows={4}
            // 5. Register the textarea
            {...register("message")}
            className="mt-1 w-full rounded-md bg-transparent border border-cyan-500 px-3 py-2 text-white placeholder-gray-400 focus:outline-none"
            placeholder="Your message here..."
          />
        </div>
        <Button
              className="justify-center"
              variant="secondary"
              onClick={() => alert("Secondary Clicked!")}
              type="submit"
            >
              Join the Community
               <span className="text-2xl">&#8594;</span>
            </Button>
        
      </form>

      {/* Right: Info (No changes needed) */}
      <div className="flex-1 bg-gray-700/15 shadow-gray-900 shadow-5xl rounded-xl p-6 flex flex-col justify-between
       backdrop-blur-xl  shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-[1.005] transition-all duration-300 border border-white/10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Amazing Together</span>
          </h2>
          <div className="flex items-center gap-2 mt-4">
            <FaMapMarkerAlt className="text-amber-400 bg-transparent border border-cyan-400 rounded-lg text-4xl p-2" />
            <span className="text-white">
              Aligarh, Uttar Pradesh, <span className="text-cyan-400">India</span>
            </span>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <FaEnvelope className="text-amber-400 bg-transparent border border-cyan-400 rounded-lg text-4xl p-2" />
            <Link
              href="mailto:novacoder007@gmail.com"
              className="text-amber-400 hover:underline"
            >
              novacoder007@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <FaPhoneAlt className="text-amber-400 bg-transparent border border-cyan-400 rounded-lg text-4xl p-2 " />
            <Link
              href="tel:+916397973513"
              className="text-amber-400 hover:underline "
            >
              +91 6397973513
            </Link>
          </div>
        </div>
        <div className="mt-8">
          <div className="text-white mb-2">Connect With Us</div>
           <div className="flex gap-4">
            {social.map(({ icon: Icon, url }, index) => (
              <Link
                key={index}
                href={url}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-transparent border border-cyan-400 rounded-lg p-2 text-white hover:bg-cyan-400 hover:text-black transition"
              >
                {/* Use the Icon component */}
                <Icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
