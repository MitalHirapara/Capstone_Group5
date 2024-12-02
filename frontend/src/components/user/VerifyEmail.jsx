import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function VerifyEmail() {
    const { token } = useParams();
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/verify-email/${token}/`)
            .then((response) => {
                setMessage("Email verified successfully! You can now log in.");
                setTimeout(() => navigate("/login"), 2000);
            })
            .catch((error) => {
                console.error(error);
                setMessage("Email verification failed.");
            });
    }, [token, navigate]);

    return <div>{message}</div>;
}

export default VerifyEmail;
