import React, { useEffect, useState } from "react";

const UserProfile = () => {
  return (
    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">
      <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
            Profile
          </h2>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            Manage your account settings.
          </p>
        </div>

        <form>
          <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
            <div className="sm:col-span-3">
              <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                Profile photo
              </label>
            </div>

            <div className="sm:col-span-9">
              <div className="flex items-center gap-5">
                <img
                  className="inline-block size-16 rounded-full ring-2 ring-white dark:ring-neutral-900"
                  src="https://preline.co/assets/img/160x160/img1.jpg"
                  alt="Avatar"
                />
                <div className="flex gap-x-2">
                  <div>
                    <button
                      type="button"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    >
                      <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" x2="12" y1="3" y2="15" />
                      </svg>
                      Upload photo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Full name
              </label>
              <div className="hs-tooltip inline-block">
                <svg
                  className="hs-tooltip-toggle ms-1 inline-block size-3 text-gray-400 dark:text-neutral-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                  role="tooltip"
                >
                  Displayed on CareerTrail as Name!!
                </span>
              </div>
            </div>

            <div className="sm:col-span-9">
              <div className="sm:flex">
                <input
                  id="af-account-full-name"
                  type="text"
                  className="text-gray-800 w-full px-4 py-2 border rounded-lg border-gray-300"
                  placeholder="John"
                />
                <input
                  type="text"
                  className="text-gray-800 w-full px-4 py-2 border rounded-lg border-gray-300"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Email
              </label>
            </div>

            <div className="sm:col-span-9">
              <input
                id="af-account-email"
                type="email"
                className="text-gray-800 w-full px-4 py-2 border rounded-lg border-gray-300"
                placeholder="johndoe@gmail.com"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Location
              </label>
            </div>

            <div className="sm:col-span-9">
              <div className="space-y-2">
                <input
                  id="af-account-password"
                  type="text"
                  className="text-gray-800 w-full px-4 py-2 border rounded-lg border-gray-300"
                  placeholder="Enter your location"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <div className="inline-block">
                <label
                  className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
                >
                  Phone
                </label>
                <span className="text-sm text-gray-400 dark:text-neutral-600">
                  (Optional)
                </span>
              </div>
            </div>

            <div className="sm:col-span-9">
              <div className="sm:flex">
                <input
                  id="af-account-phone"
                  type="text"
                  className="text-gray-800 w-full px-4 py-2 border rounded-lg border-gray-300"
                  placeholder="+x(xxx)xxx-xx-xx"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                BIO
              </label>
            </div>

            <div className="sm:col-span-9">
              <textarea
                id="af-account-bio"
                className="text-gray-800 w-full px-4 py-2 border rounded-lg border-gray-300"
                rows="4"
                placeholder="Type your message..."
              ></textarea>
            </div>
            <div className="sm:col-span-3">
              <label
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
              Experience
              </label>
            </div>

            <div className="sm:col-span-9">
              <textarea
                id="af-account-experience"
                className="text-gray-800 w-full px-4 py-2 border rounded-lg border-gray-300"
                rows="6"
                placeholder="Describe your work experience."
              ></textarea>
            </div>

            <div className="sm:col-span-3">
              <label
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Skills
              </label>
            </div>

            <div className="sm:col-span-9">
              <textarea
                id="af-account-skills"
                className="text-gray-800 w-full px-4 py-2 border rounded-lg border-gray-300"
                rows="6"
                placeholder="List your skills."
              ></textarea>
            </div>
          </div>
          

          <div className="mt-5 flex justify-end gap-x-2">
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            >
              Cancel
            </button>
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UserProfile;