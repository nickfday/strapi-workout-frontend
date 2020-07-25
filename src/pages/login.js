// import React from 'react';
// import Login from '../components/Auth/Login';

// const Signin = () => {
//   return <Login />;
// };

// export default Signin;

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Paper,
  Tabs,
  Tab,
  Typography,
  Box,
  Container,
} from '@material-ui/core';

import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import ForgottenPassword from '../components/Auth/ForgottenPassword';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fafafa',
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Container>
        <Paper square>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Login" {...a11yProps(0)} />
            <Tab label="Register" {...a11yProps(1)} />
            <Tab label="Forgotten Password" {...a11yProps(2)} />
          </Tabs>
        </Paper>

        <TabPanel value={value} index={0}>
          <Login />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Signup />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ForgottenPassword />
        </TabPanel>
      </Container>
    </div>
  );
}
