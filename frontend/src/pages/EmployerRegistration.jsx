import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EmployerRegistration() {
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
      console.log(formData);
      axios
        .post("http://localhost:8000/user/register/employer/", formData)
        .then((response) => {
          setMessage("Employer registered successfully!");
          setTimeout(() => {
            navigate("/login");
            alert(
              "Company Registered Successfully!!Check your email! Try to activate your account !!"
            );
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
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-0">
          <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="hidden md:block md:absolute md:top-0 md:start-0 md:end-1/2 h-full bg-[url('../public/Employersignup.svg')] bg-no-repeat bg-center bg-cover bg-[length:70%] md:bg-[length:80%]"></div>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                  <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
                    <div className="text-center">
                    <img src="/logo.png" className="mx-auto" />
                      <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                        Start your Free Employer Trial
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
                              Company Name
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
                {message && <p>{message}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployerRegistration;
