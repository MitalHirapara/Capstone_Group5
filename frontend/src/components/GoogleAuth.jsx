import React from 'react';

function GoogleAuth() {
  const googleLoginUrl = 'http://localhost:8000/accounts/google/login/';

  return (
    <div>
      <a href={googleLoginUrl}>
        <button>Login with Google</button>
      </a>
    </div>
  );
}

export default GoogleAuth;
