import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Activate = () => {
  const { uid, token } = useParams();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const activateAccount = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user/activate/${uid}/${token}/`);
        setMessage(response.data.message);
        if (response.data.redirect_url) {
            navigate(response.data.redirect_url);
        }
      } catch (error) {
        setMessage('Error: ' + error.response.data.error);
      }
    };
    activateAccount();
  }, [uid, token]);

  return <p>{message}</p>;
};

export default Activate;
