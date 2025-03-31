import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.username) {
            newErrors.username = "Username or email is required.";
        } else if (
            !/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.username) &&
            formData.username.length < 3
        ) {
            newErrors.username =
                "Please enter a valid email address or a valid username.";
        }

        if (!formData.password) {
            newErrors.password = "Password is required.";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setLoading(true); 
        try {
          const response = await axios.post('http://localhost:8000/user/login/', formData);
          localStorage.setItem('access_token', response.data.access);
          localStorage.setItem('refresh_token', response.data.refresh);
          navigate(response.data.redirect_url); 
          setMessage('Login successful!');
        } catch (error) {
          setMessage('Error: ' + error.response.data.error);
        }finally {
            setLoading(false); // Stop spinner
        }
      };

    return (
        <div>
            <div className="relative overflow-hidden">
                <div className="mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 lg:py-32 max-w-screen-md md:max-w-screen-xl">
                    <div className="md:w-1/2 xl:w-5/12 md:pe-8 xl:pe-0">
                        <div className="border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-sm mt-7 border rounded-xl">
                            <div className="p-4 sm:p-7">
                                <div className="text-center">
                                <img src="/logo.png" className="mx-auto" />
                                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                                        Sign in
                                    </h1>
                                    <p className="mt-2 text-gray-600 text-sm dark:text-neutral-400">
                                        Don't have an account yet?
                                        <span> </span>
                                        <a
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline focus:underline decoration-2 focus:outline-none"
                                            href="/signup"
                                        >
                                            Sign up here
                                        </a>
                                    </p>
                                </div>
                                <div className="mt-5">
                                    <form onSubmit={handleSubmit}>
                                        <div className="gap-y-4 grid">
                                            <div>
                                                <label
                                                    htmlFor="username"
                                                    className="block mb-2 text-gray-900 text-sm dark:text-white"
                                                >
                                                    Username or Email
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        id="username"
                                                        name="username"
                                                        className="border-gray-300 px-4 py-2 border rounded-lg w-full text-gray-800"
                                                        value={
                                                            formData.username
                                                        }
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        aria-describedby="username-error"
                                                    />
                                                    <div
                                                        className={`text-red-500 text-xs ${
                                                            errors.username
                                                                ? "block"
                                                                : "hidden"
                                                        }`}
                                                    >
                                                        {errors.username}
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between items-center">
                                                    <label
                                                        htmlFor="password"
                                                        className="block mb-2 text-gray-900 text-sm dark:text-white"
                                                    >
                                                        Password
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        type="password"
                                                        id="password"
                                                        name="password"
                                                        className="border-gray-300 px-4 py-2 border rounded-lg w-full text-gray-800"
                                                        value={
                                                            formData.password
                                                        }
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                    />
                                                    <div
                                                        className={`text-red-500 text-xs ${
                                                            errors.password
                                                                ? "block"
                                                                : "hidden"
                                                        }`}
                                                    >
                                                        {errors.password}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex">
                                                    <input
                                                        id="remember-me"
                                                        name="remember-me"
                                                        type="checkbox"
                                                        className="border-gray-200 dark:border-neutral-700 dark:bg-neutral-800 dark:checked:bg-blue-500 mt-0.5 dark:checked:border-blue-500 rounded focus:ring-blue-500 dark:focus:ring-offset-gray-800 text-blue-600 shrink-0"
                                                    />
                                                </div>
                                                <div className="flex justify-between items-center ms-3">
                                                    <label
                                                        htmlFor="remember-me"
                                                        className="text-gray-900 text-sm dark:text-white"
                                                    >
                                                        Remember me
                                                    </label>
                                                    <a
                                                        className="inline-flex items-end gap-x-1 font-medium text-blue-600 text-sm dark:text-blue-500 hover:underline focus:underline decoration-2 focus:outline-none"
                                                        href="/forgot-password"
                                                    >
                                                        Forgot password?
                                                    </a>
                                                </div>
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none mb-3"
                                            >
                                                Login
                                            </button>
                                            {loading && (
                                                <div className="animate-spin text-center inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                                                <span className="sr-only">Loading...</span>
                                                </div>
                                            )}
                                        </div>
                                        <a
                                            className="mt-5 text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                                            href="/"
                                        >
                                            Back
                                        </a>
                                        {message && <p>{message}</p>}
                                    </form>
                                </div>
                                <div className="md:block md:top-0 md:absolute hidden bg-[url('../public/login.svg')] bg-[length:70%] md:bg-[length:80%] bg-cover bg-no-repeat bg-center h-full md:start-1/2 md:end-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
