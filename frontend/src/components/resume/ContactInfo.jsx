import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectContactInfo,
    updateContactInfo,
} from "../../store/resume/resumeSlice";

const ContactInfo = () => {
    const dispatch = useDispatch();
    const contactInfo = useSelector(selectContactInfo);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateContactInfo({ [name]: value }));
    };

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">Contact Information</h2>
            <div className="space-y-2">
                <div>
                    <label className="block text-sm font-medium text-slate-950">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        // value={contactInfo.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="form-input block w-full"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={contactInfo.email}
                        onChange={handleInputChange}
                        className="form-input block w-full"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={contactInfo.phone}
                        onChange={handleInputChange}
                        className="form-input block w-full"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">
                        Location
                    </label>
                    <input
                        type="text"
                        name="location"
                        value={contactInfo.location}
                        onChange={handleInputChange}
                        className="form-input block w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
