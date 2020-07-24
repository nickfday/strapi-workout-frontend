import React, { useCallback } from 'react';
import { withRouter, Router } from 'next/router';
import { Button, TextField, FormControl, Box } from '@material-ui/core';

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
        <FormControl margin="normal">
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
              Register
            </Button>
          </Box>
        </FormControl>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
