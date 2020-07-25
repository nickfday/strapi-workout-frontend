import React, { useCallback, useContext } from 'react';
import { Button, TextField, FormControl, Box } from '@material-ui/core';

import { useRouter, withRouter } from 'next/router';
import firebaseApp from '../../base.js';
import { AuthContext } from './auth';

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
        <FormControl margin="normal" fullWidth>
          <TextField
            id="name"
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            margin="normal"
          />

          <TextField
            id="name"
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            margin="normal"
          />
          <Box mt={2}>
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </Box>
        </FormControl>

        {/* <button type="submit">Log in</button> */}
      </form>
    </div>
  );
};

export default withRouter(Login);
