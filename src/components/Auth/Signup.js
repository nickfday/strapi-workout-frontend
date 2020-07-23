import React, { useCallback } from 'react';
import { withRouter, Router } from 'next/router';
import firebaseApp from '../../base';

const SignUp = () => {
  const handleSignUp = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      Router.push('/dashboard');
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
