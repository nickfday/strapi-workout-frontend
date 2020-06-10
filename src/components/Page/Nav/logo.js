import React from 'react';
import styled from 'styled-components';
import Link from 'src/components/Link';

const StyledLogo = styled.div`
  font-size: 18px;
  a {
    text-decoration: none;
  }
`;

const Logo = (props) => {
  return (
    <StyledLogo>
      <Link url="/" noUnderline>
        Workout Log
      </Link>
    </StyledLogo>
  );
};

export default Logo;
