import React from 'react';
import {
  Box,
  Button,
  FormControl,
  TextField,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  box: {
    padding: '50px',
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <FormControl margin="normal">
        <TextField
          id="outlined-helperText"
          label="Email"
          defaultValue="Default Value"
          // helperText="Some important text"
          variant="outlined"
        />
        <TextField
          id="outlined-helperText"
          label="Password"
          defaultValue="Default Value"
          // helperText="Some important text"
          variant="outlined"
          type="password"
        />
        <Button variant="contained" color="primary">
          Login
        </Button>
        <Button variant="contained" color="primary">
          Forgotten Password
        </Button>
        <Button variant="contained" color="primary">
          Register
        </Button>
      </FormControl>
    </Box>
  );
};

export default Login;
