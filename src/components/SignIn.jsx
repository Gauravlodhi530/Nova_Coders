import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputField from "./ui/InputField";
import Button from "./ui/Button";
import api from "../api/axiosconfig";

const Signin = ({ switchForm }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      setErrorMessage("");
      const response = await api.post("auth/login", {
        email: data.email,
        password: data.password,
      });
      const { token, user } = response.data || {};

      const shouldRemember = !!data.remember;
      const storage = shouldRemember ? window.localStorage : window.sessionStorage;
      if (token) storage.setItem("auth_token", token);
      if (user) storage.setItem("auth_user", JSON.stringify(user));

      navigate("/", { replace: true });
    } catch (err) {
      setErrorMessage(
        err?.response?.data?.message || "Invalid credentials. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full md:w-full flex flex-col justify-center px-6 sm:px-10 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Login</h2>

      {errorMessage && (
        <div className="mb-4 text-sm text-red-400 text-center">{errorMessage}</div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-md mx-auto">
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
        />

        <InputField
          type="password"
          name="password"
          register={register}
          validation={{ required: "Password is required" }}
          error={errors.password}
          placeholder="Password"
          showPasswordToggle
        />

        <div className="flex items-center justify-between">
          <label className="inline-flex items-center gap-2 text-gray-300 text-sm">
            <input type="checkbox" {...register("remember")} className="accent-purple-500" />
            Remember me
          </label>
          <button type="button" className="text-sm text-purple-400 hover:text-purple-300">
            Forgot password?
          </button>
        </div>

        <Button type="submit" disabled={submitting} className="w-full py-3 mt-2 text-lg rounded-full">
          {submitting ? "Logging in..." : "Login"}
        </Button>
      </form>

      <p className="text-center text-gray-400 text-sm mt-6">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={switchForm}
          className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Signin;
