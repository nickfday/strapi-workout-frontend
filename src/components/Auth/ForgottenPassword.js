import React, { useCallback, useEffect, useState } from 'react';
import firebaseApp from '../../base.js';
import { useRouter, withRouter } from 'next/router';

const ForgottenPassword = (props) => {
  console.log(props);
  const router = useRouter();
  const { emailSent, setEmailSent } = useState(false);

  const handleForgottenPassword = useCallback(async (event) => {
    event.preventDefault();
    const { email } = event.target.elements;
    try {
      await firebaseApp.auth().sendPasswordResetEmail(email.value);
      alert('Check Email for password instructions');
      email.value = '';
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <div>
      <h1>Forgotten Password</h1>
      <form onSubmit={handleForgottenPassword}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <button type="submit">Reset Password</button>
      </form>
      {emailSent && <p>An email with instructions has been sent</p>}
    </div>
  );
};

export default ForgottenPassword;
