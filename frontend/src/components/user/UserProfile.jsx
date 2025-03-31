import React, { useEffect, useState } from "react";
import axios from "axios";

const UserProfile = () => {
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    bio: "",
    experience: "",
    skills: "",
    location: "",
    phone: "",
    profile_photo: "",
  });

  const [photoPreview, setPhotoPreview] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/user/profile/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((response) => {
        
        setProfile(response.data);
        setPhotoPreview(response.data.profile_photo);
        setLoading(false);
      })
      .catch((error) => {
        console.log(localStorage.getItem("access_token"));
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);

      setProfile((prevState) => ({
        ...prevState,
        profile_photo: file,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (const key in profile) {
      formData.append(key, profile[key]);
    }

    axios
      .post("http://localhost:8000/user/profile/", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        alert("Profile updated successfully!");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to update profile.");
      });
  };

  if (loading) return <p>Loading...</p>;

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

        <form onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
            {/* Profile Photo */}
            <div className="sm:col-span-3">
              <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                Profile photo
              </label>
            </div>
            <div className="sm:col-span-9">
              <div className="flex items-center gap-5">
                {photoPreview ? (
                  <img
                    className="inline-block size-16 rounded-full ring-2 ring-white dark:ring-neutral-900"
                    src={photoPreview}
                    alt="Avatar"
                  />
                ) : (
                  <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                )}
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="profile-photo-upload"
                    onChange={handlePhotoChange}
                  />
                  <label
                    htmlFor="profile-photo-upload"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 cursor-pointer"
                  >
                    Upload photo
                  </label>
                </div>
              </div>
            </div>

            {/* Username */}
            <div className="sm:col-span-3">
              <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                Username
              </label>
            </div>
            <div className="sm:col-span-9">
              <input
                type="text"
                className="text-gray-800 w-full px-4 py-2 border rounded-lg border-gray-300"
                value={profile.username}
                readOnly
              />
            </div>

            {/* Email */}
            <div className="sm:col-span-3">
              <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                Email
              </label>
            </div>
            <div className="sm:col-span-9">
              <input
                type="email"
                className="text-gray-800 w-full px-4 py-2 border rounded-lg border-gray-300"
                value={profile.email}
                readOnly
              />
            </div>

            {/* Other fields */}
            {["bio", "experience", "skills"].map((field) => (
              <div className="sm:col-span-12" key={field}>
                <label className="block text-sm text-gray-800 mt-2.5 dark:text-neutral-200 capitalize">
                  {field}
                </label>
                <textarea
                  name={field}
                  value={profile[field]}
                  onChange={handleChange}
                  rows="3"
                  className="text-gray-800 w-full px-4 py-2 border rounded-lg border-gray-300"
                />
              </div>
            ))}
          </div>
        
          <div className="sm:col-span-3">
              <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                Location
              </label>
            </div>
            <div className="sm:col-span-9">
              <input
                type="text"
                className="text-gray-800 w-full px-4 py-2 border rounded-lg border-gray-300"
                value={profile.location}
                name= "location"
                onChange={handleChange}
              />
            </div>

            <div className="sm:col-span-3">
              <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
                Phone 
              </label>
            </div>
            <div className="sm:col-span-9">
              <input
                type="number"
                className="text-gray-800 w-full px-4 py-2 border rounded-lg border-gray-300"
                value={profile.phone}
                name= "phone"
                onChange={handleChange}
              />
            </div>

          <div className="mt-5 flex justify-end gap-x-2">
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
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
