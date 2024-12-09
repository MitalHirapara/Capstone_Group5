import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/; // Username must be 3-20 characters long, alphanumeric with underscores
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Password must be at least 8 characters long, with at least one letter, one number, and one special character.

    if (!formData.username) {
      newErrors.username = "Username is required.";
    } else if (!usernameRegex.test(formData.username)) {
      newErrors.username =
        "Username must be 3-20 characters and can only contain letters, numbers, and underscores.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long and include at least one letter and one number.";
    }

    if (!formData.password2) {
      newErrors.password2 = "Please confirm your password.";
    } else if (formData.password !== formData.password2) {
      newErrors.password2 = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if there are no errors
  };

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      console.log(formData);
      axios

        .post("http://localhost:8000/user/register/", formData)

        .then((response) => {
          setMessage("User registered successfully!");
          setTimeout(() => {
            navigate("/login");
            alert(
              "User Registered Successfully!!Check your email! Try to activate your account !!"
            );
          }, 2000);
        })
        .catch((error) => {
          console.error(error);
          setMessage("Registration failed. Please try again.");
        })
        .finally(() => {
          setLoading(false); // Hide loading spinner
        });
    } else {
      setMessage("Please fix the errors above.");
    }
  };

  return (
    <div>
      <div className="relative bg-gradient-to-bl from-blue-100 dark:from-blue-950 via-transparent dark:via-transparent">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 max-w-[85rem]">
          <div className="items-center gap-8 lg:gap-12 grid md:grid-cols-2">
            <div>
              <div className="hidden md:block md:absolute md:top-0 md:start-0 md:end-1/2 h-full bg-[url('../public/UserSignup.svg')] bg-no-repeat bg-center bg-cover bg-[length:70%] md:bg-[length:80%]"></div>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="lg:mx-auto lg:max-w-lg lg:me-0 ms-auto">
                  <div className="flex flex-col bg-white dark:bg-neutral-900 shadow-lg p-4 sm:p-7 rounded-2xl">
                    <div className="text-center">
                      <img src="/logo.png" className="mx-auto" />
                      <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                        Start your free trial
                      </h1>
                      <p className="mt-2 text-gray-600 text-sm dark:text-neutral-400">
                        Already have an account?
                        <a
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline focus:underline decoration-2 focus:outline-none"
                          href="/login"
                        >
                          Sign in here
                        </a>
                      </p>
                    </div>

                    <div className="mt-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative col-span-full">
                          <div className="relative">
                            <label
                              htmlFor="hs-hero-signup-form-floating-input-email"
                              className="block mb-2 text-gray-900 text-sm dark:text-white"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              id="hs-hero-signup-form-floating-input-email"
                              className="border-gray-300 px-4 py-2 border rounded-lg w-full text-gray-800"
                              placeholder="you@email.com"
                              onChange={handleChange}
                              name="email"
                            />
                            {errors.email && (
                              <p className="text-red-500 text-sm">
                                {errors.email}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="relative col-span-full">
                          <div className="relative">
                            <label
                              htmlFor="hs-hero-signup-form-floating-input-username"
                              className="block mb-2 text-gray-900 text-sm dark:text-white"
                            >
                              Username
                            </label>
                            <input
                              type="text"
                              onChange={handleChange}
                              id="hs-hero-signup-form-floating-input-username"
                              className="border-gray-300 px-4 py-2 border rounded-lg w-full text-gray-800"
                              placeholder="Username"
                              name="username"
                            />
                            {errors.username && (
                              <p className="text-red-500 text-sm">
                                {errors.username}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="relative col-span-full">
                          <div className="relative">
                            <label
                              htmlFor="hs-hero-signup-form-floating-input-new-password"
                              className="block mb-2 text-gray-900 text-sm dark:text-white"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              onChange={handleChange}
                              id="hs-hero-signup-form-floating-input-new-password"
                              className="border-gray-300 px-4 py-2 border rounded-lg w-full text-gray-800"
                              placeholder="********"
                              name="password"
                            />
                            {errors.password && (
                              <p className="text-red-500 text-sm">
                                {errors.password}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-span-full">
                          <div className="relative">
                            <label
                              htmlFor="hs-hero-signup-form-floating-input-current-password"
                              className="block mb-2 text-gray-900 text-sm dark:text-white"
                            >
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              onChange={handleChange}
                              id="hs-hero-signup-form-floating-input-current-password"
                              className="border-gray-300 px-4 py-2 border rounded-lg w-full text-gray-800"
                              placeholder="********"
                              name="password2"
                            />
                            {errors.password2 && (
                              <p className="text-red-500 text-sm">
                                {errors.password2}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    
                      <div className="mt-5">
                        <button
                          type="submit"
                          className="inline-flex justify-center items-center gap-x-2 bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 disabled:opacity-50 px-4 py-3 border border-transparent rounded-lg w-full font-medium text-sm text-white disabled:pointer-events-none focus:outline-none"
                        >
                          Sign Up
                        </button>
                      </div>
                      {loading && (
                      <div className="animate-spin text-center inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                      <span className="sr-only">Loading...</span>
                      </div>
                )}
                    </div>
                    <a
                      className="mt-3 font-medium text-blue-600 dark:text-blue-500 hover:underline focus:underline decoration-2 focus:outline-none"
                      href="/"
                    >
                      Back
                    </a>
                  </div>
                </div>
                {message && <p>{message}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
