import React, { useState } from "react";
import { User, Mail, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputField from "./ui/InputField";
import Button from "./ui/Button";
import api from "../api/axiosconfig";

const Signup = ({ switchForm }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      setErrorMessage("");
      const response = await api.post("auth/register", {
        username: data.username,
        email: data.email,
        password: data.password,
        name: data.name,
      });

      // Auto-login after signup if API returns token
      const { token, user } = response.data || {};
      if (token) {
        window.localStorage.setItem("auth_token", token);
        if (user) window.localStorage.setItem("auth_user", JSON.stringify(user));
      }

      reset();
      navigate("/", { replace: true });
    } catch (err) {
      setErrorMessage(
        err?.response?.data?.message || "Signup failed. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full md:w-full flex flex-col justify-center px-6 sm:px-10 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Create Account</h2>

      {errorMessage && (
        <div className="mb-4 text-sm text-red-400 text-center">{errorMessage}</div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-md mx-auto">
        <InputField
          type="text"
          name="username"
          register={register}
          validation={{
            required: "Username is required",
            minLength: { value: 3, message: "Username too short" },
          }}
          error={errors.username}
          placeholder="Username"
          icon={User}
        />

        <InputField
          type="email"
          name="email"
          register={register}
          validation={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          }}
          error={errors.email}
          placeholder="Email"
          icon={Mail}
        />

        <InputField
          type="password"
          name="password"
          register={register}
          validation={{
            required: "Password is required",
            minLength: { value: 6, message: "At least 6 characters" },
          }}
          error={errors.password}
          placeholder="Password"
          icon={Lock}
          showPasswordToggle
        />

        <InputField
          placeholder="Full Name"
          name="name"
          register={register}
          validation={{ required: "Name is required" }}
          error={errors.name}
        />

        <Button
          type="submit"
          disabled={submitting}
          className="w-full py-3 mt-2 text-lg rounded-full"
        >
          {submitting ? "Creating Account..." : "Sign Up"}
        </Button>

        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <button
            type="button"
            onClick={switchForm}
            className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default Signup;
