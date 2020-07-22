import React, { useCallback, useContext } from 'react';
import { useRouter, withRouter } from 'next/router';
import firebaseApp from './base.js';
import { AuthContext } from './auth.js';

const Login = () => {
  const router = useRouter();

  const handleLogin = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebaseApp
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      router.push('/my-account');
    } catch (error) {
      alert(error);
    }
  }, []);

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    router.push('/my-account');
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default withRouter(Login);
