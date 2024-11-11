import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectCertifications,
    updateCertifications,
} from "../../store/resume/resumeSlice";

const Certifications = () => {
    const dispatch = useDispatch();
    const certifications = useSelector(selectCertifications);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateCertifications({ [name]: value }));
    };

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">Certifications</h2>
            <div className="space-y-2">
                <div>
                    <label className="block text-sm font-medium">
                        Certification
                    </label>
                    <input
                        type="text"
                        name="certification"
                        value={certifications.certification}
                        onChange={handleInputChange}
                        className="form-input block w-full"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">
                        Institution
                    </label>
                    <input
                        type="text"
                        name="certInstitution"
                        value={certifications.certInstitution}
                        onChange={handleInputChange}
                        className="form-input block w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Certifications;
