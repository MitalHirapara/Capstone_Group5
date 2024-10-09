import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        try {
            const response = await axios.post(
                "http://localhost:8000/user/forgot-password/",
                { email }
            );

            setMessage(response.data.message);
            setEmail(""); // Clear the input field on success
        } catch (err) {
            setError(
                err.response?.data?.error ||
                    "An error occurred. Please try again later."
            );
        }
    };

    return (
        <div className="relative overflow-hidden">
            <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
                <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12">
                    <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
                        <div className="p-4 sm:p-7">
                            <div className="text-center">
                                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                                    Forgot Password
                                </h1>
                                <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                                    Enter your email to receive a password reset
                                    link.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="mt-5">
                                <div className="grid gap-y-4">
                                    <div>
                                        <label className="block text-sm mb-2 text-gray-900 dark:text-white">
                                            Email
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                className="text-gray-800 w-full px-4 py-2 border rounded-lg border-gray-300"
                                                required
                                            />
                                        </div>
                                        {error && (
                                            <p className="text-xs text-red-600 mt-2">
                                                {error}
                                            </p>
                                        )}
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                    >
                                        Send Reset Link
                                    </button>
                                </div>
                            </form>
                            {message && (
                                <p className="mt-4 text-green-600">{message}</p>
                            )}
                            <div className="mt-4">
                                <a
                                    className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                                    href="/login"
                                >
                                    Back to Login
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block md:absolute md:top-0 md:start-1/2 md:end-0 h-full bg-[url('../public/login.svg')] bg-no-repeat bg-center bg-cover bg-[length:70%] md:bg-[length:80%]"></div>
        </div>
    );
};

export default ForgotPassword;
