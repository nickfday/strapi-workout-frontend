import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { Container } from '@material-ui/core';

const ConsentBanner = (props) => {
  return (
    <CookieConsent debug={true} style={{ bottom: '70px' }}>
      <Container>
        This website uses cookies to enhance the user experience.
      </Container>
    </CookieConsent>
  );
};

export default ConsentBanner;
