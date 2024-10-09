import React, { useState } from 'react';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/user/forgot-password/', { email })
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Enter your email" required />
      <button type="submit">Send Password Reset Email</button>
    </form>
  );
}

export default ForgotPassword;
