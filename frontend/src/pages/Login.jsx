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
        try {
          const response = await axios.post('http://localhost:8000/user/login/', formData);
          localStorage.setItem('access_token', response.data.access);
          localStorage.setItem('refresh_token', response.data.refresh);
          navigate(response.data.redirect_url); 
          setMessage('Login successful!');
        } catch (error) {
          setMessage('Error: ' + error.response.data.error);
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
                                    <h1 className="block font-bold text-2xl text-gray-800 dark:text-white">
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
                                    <button
                                        type="button"
                                        className="inline-flex justify-center items-center gap-x-2 border-gray-200 dark:border-neutral-700 bg-white hover:bg-gray-50 dark:hover:bg-neutral-800 focus:bg-gray-50 dark:focus:bg-neutral-800 dark:bg-neutral-900 disabled:opacity-50 shadow-sm px-4 py-3 border rounded-lg w-full font-medium text-gray-800 text-sm dark:text-white disabled:pointer-events-none focus:outline-none"
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
                                            />
                                            <path
                                                d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                                                fill="#34A853"
                                            />
                                            <path
                                                d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                                                fill="#FBBC05"
                                            />
                                            <path
                                                d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                                                fill="#EB4335"
                                            />
                                        </svg>
                                        Sign in with Google
                                    </button>

                                    <div className="flex before:flex-1 after:flex-1 items-center before:border-gray-200 dark:before:border-neutral-600 after:border-gray-200 dark:after:border-neutral-600 py-3 before:border-t after:border-t text-gray-400 text-xs dark:text-neutral-500 uppercase before:me-6 after:ms-6">
                                        Or
                                    </div>
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
                                                className="inline-flex justify-center items-center gap-x-2 bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 disabled:opacity-50 px-4 py-3 border border-transparent rounded-lg w-full font-medium text-sm text-white disabled:pointer-events-none focus:outline-none"
                                            >
                                                Login
                                            </button>
                                        </div>
                                        <a
                                            className="mt-4 font-medium text-blue-600 dark:text-blue-500 hover:underline focus:underline decoration-2 focus:outline-none"
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
