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
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Password must be at least 8 characters long, with at least one letter, one number, and one special character.

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
      console.log(formData);
      axios
        .post("http://localhost:8000/user/signup/", formData)
        .then((response) => {
          setMessage("User registered successfully!");
          setTimeout(() => {
            navigate("/login");
            alert("User Registered Successfully!!Login Now!!");
          }, 2000);
        })
        .catch((error) => {
          console.error(error);
          setMessage("Registration failed. Please try again.");
        });
    } else {
      setMessage("Please fix the errors above.");
    }
  };

  return (
    <div>
      <div className="relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                CareerTrail
              </p>
              <div className="mt-4 md:mb-12 max-w-2xl">
                <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-neutral-200">
                  Empower Your Career: Resumes Made Easy, Jobs Within Reach
                </h1>
                <p className="text-gray-600 dark:text-neutral-400">
                  Build the perfect resume, navigate your career path.
                  Empowering you to land your dream job, one click at a time!
                </p>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                  <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
                    <div className="text-center">
                      <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                        Start your free trial
                      </h1>
                      <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                        Already have an account?
                        <a
                          className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                          href="/login"
                        >
                          Sign in here
                        </a>
                      </p>
                    </div>

                    <div className="mt-5">
                      <button
                        type="button"
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      >
                        <svg
                          className="w-4 h-auto"
                          width="46"
                          height="47"
                          viewBox="0 0 46 47"
                          fill="none"
                        >
                          <path
                            d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                            fill="#4285F4"
                          ></path>
                          <path
                            d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                            fill="#34A853"
                          ></path>
                          <path
                            d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                            fill="#FBBC05"
                          ></path>
                          <path
                            d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                            fill="#EB4335"
                          ></path>
                        </svg>
                        Sign up with Google
                      </button>

                      <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-700 dark:after:border-neutral-700">
                        Or
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative col-span-full">
                          <div className="relative">
                            <label
                              htmlFor="hs-hero-signup-form-floating-input-email"
                              className="block text-sm mb-2 text-gray-900 dark:text-white"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              id="hs-hero-signup-form-floating-input-email"
                              className="text-gray-800 w-full px-4 py-2 border rounded-lg border-gray-300"
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
                              className="block text-sm mb-2 text-gray-900 dark:text-white"
                            >
                              Username
                            </label>
                            <input
                              type="text"
                              onChange={handleChange}
                              id="hs-hero-signup-form-floating-input-username"
                              className="text-gray-800 w-full px-4 py-2 border rounded-lg border-gray-300"
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
                              className="block text-sm mb-2 text-gray-900 dark:text-white"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              onChange={handleChange}
                              id="hs-hero-signup-form-floating-input-new-password"
                              className="text-gray-800 w-full px-4 py-2 border rounded-lg border-gray-300"
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
                              className="block text-sm mb-2 text-gray-900 dark:text-white"
                            >
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              onChange={handleChange}
                              id="hs-hero-signup-form-floating-input-current-password"
                              className="text-gray-800 w-full px-4 py-2 border rounded-lg border-gray-300"
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
                      <div className="mt-5 flex items-center">
                        <div className="flex">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          />
                        </div>
                        <div className="ms-3">
                          <label
                            htmlFor="remember-me"
                            className="text-sm dark:text-white text-gray-900"
                          >
                            I accept the{" "}
                            <a
                              className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                              href="#"
                            >
                              Terms and Conditions
                            </a>
                          </label>
                        </div>
                      </div>
                      <div className="mt-5">
                        <button
                          type="submit"
                          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>
                    <a
                      className="mt-3 text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                      href="/"
                    >
                      Back
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
