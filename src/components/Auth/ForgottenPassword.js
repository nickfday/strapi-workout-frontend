import React, { useCallback, useEffect, useState } from 'react';
import { useRouter, withRouter } from 'next/router';
import { Button, TextField, FormControl, Box } from '@material-ui/core';

import firebaseApp from '../../base.js';

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
        <FormControl margin="normal">
          <TextField
            id="name"
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            margin="normal"
          />

          <Box mt={2}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </FormControl>
      </form>
      {emailSent && <p>An email with instructions has been sent</p>}
    </div>
  );
};

export default ForgottenPassword;
