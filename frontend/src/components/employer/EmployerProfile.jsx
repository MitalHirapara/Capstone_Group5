import React, { useState, useEffect } from "react";
import axios from "axios";

const EmployerProfile = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    companyURL: "",
    companyDescription: "",
    companySize: "",
    industry: "",
    location: "",
  });
  const [logo, setLogo] = useState(null);
  const [banner, setBanner] = useState(null);

  const fetchProfile = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/employer-profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` },
      });
      setFormData(response.data);
      setLogo(response.data.logo);
      setBanner(response.data.banner);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (type === "logo") setLogo(file);
    if (type === "banner") setBanner(file);
  };

  const handleSave = async () => {
    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => payload.append(key, value));
    if (logo) payload.append("logo", logo);
    if (banner) payload.append("banner", banner);

    try {
      await axios.post("http://localhost:8000/api/employer-profile", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-gray-800 font-bold sm:text-2xl lg:text-3xl lg:leading-tight dark:text-neutral-200 hs-text-center mx-auto">
        Company Profile
      </h1>
      <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <form>
          <div className="bg-white rounded-xl shadow dark:bg-neutral-900">
            <div className="relative h-40 rounded-t-xl bg-no-repeat bg-cover bg-center">
              {banner && (
                <img
                  src={URL.createObjectURL(banner)}
                  alt="Banner"
                  className="w-full h-full object-cover rounded-t-xl"
                />
              )}
              <div className="absolute top-0 end-0 p-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "banner")}
                  className="hidden"
                  id="upload-banner"
                />
                <label
                  htmlFor="upload-banner"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border bg-white text-gray-800 shadow-sm cursor-pointer"
                >
                  Upload banner
                </label>
              </div>
            </div>

            <div className="pt-0 p-4 sm:pt-0 sm:p-7">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-5">
                {logo && (
                  <img
                    src={URL.createObjectURL(logo)}
                    alt="Logo"
                    className="size-24 mx-auto sm:mx-0 rounded-full ring-4 ring-white mt-2"
                  />
                )}
                <div className="mt-4 sm:mt-auto sm:mb-1.5 flex justify-center sm:justify-start gap-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "logo")}
                    className="hidden"
                    id="upload-logo"
                  />
                  <label
                    htmlFor="upload-logo"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border bg-white text-gray-800 shadow-sm cursor-pointer"
                  >
                    Upload logo
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter company name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Company Email
                </label>
                <input
                  type="email"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter company Email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Company URL
                </label>
                <input
                  type="text"
                  name="companyURL"
                  value={formData.companyURL}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter Company URL"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Company Description
                </label>
                <input
                  type="text"
                  name="companyDescription"
                  value={formData.companyDescription}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter Company Description"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Company Size
                </label>
                <input
                  type="number"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter Company Size"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Industry
                </label>
                <input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter Industry"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter Location"
                />
              </div>
                 

              <div className="mt-5 flex justify-center">
                <button
                  type="button"
                  onClick={handleSave}
                  className="py-3 px-4 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployerProfile;
