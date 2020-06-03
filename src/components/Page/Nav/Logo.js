import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  padding-top: 17px;
  padding-bottom: 10px;
  font-size: 18px;
`;

const Logo = (props) => {
  return <StyledLogo>Workout Log</StyledLogo>;
};

export default Logo;
