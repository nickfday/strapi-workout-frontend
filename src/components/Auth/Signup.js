import React, { useCallback } from 'react';
import { withRouter, Router } from 'next/router';
import Link from 'components/Link';

import { Button, TextField, FormControl, Box } from '@material-ui/core';

import firebaseApp from '../../base';

const SignUp = () => {
  const handleSignUp = useCallback(async (event) => {
    event.preventDefault();
    const { email, password, displayName } = event.target.elements;
    try {
      await firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((result) => {
          return result.user.updateProfile({
            displayName: displayName.value,
          });
        });
      Router.push('/my-account');
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <FormControl margin="normal" fullWidth>
          <TextField
            id="displayName"
            name="displayName"
            label="Name"
            variant="outlined"
            type="text"
            margin="normal"
          />

          {/* <TextField
            id="surname"
            name="surname"
            label="Surname"
            variant="outlined"
            type="text"
            margin="normal"
          /> */}
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
      <p>
        By clicking register I accept the{' '}
        <Link url="/terms-and-conditions">terms and conditions</Link> and{' '}
        <Link url="/privacy-policy">privacy policy</Link>
      </p>
    </div>
  );
};

export default withRouter(SignUp);
