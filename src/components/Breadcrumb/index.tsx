import React from 'react';
import { Typography, Breadcrumbs } from '@material-ui/core';
import styled from 'styled-components';
import Link from 'components/Link';

interface BreadcrumbProps {
  currentTitle: string;
  previousTitle: string;
  previousSlug: string;
}

const StyledBreadcrumb = styled(Breadcrumbs)`
  &&& {
    margin-top: 29px;
    float: right;
  }
`;

// const BreadcrumbHeading: React.FC<BreadcrumbHeadingsProps> = ({
//   currentTitle,
//   previousTitle,
//   previousSlug,
//   title,
// }) => {
//   return (
//     <Grid container spacing={2} justify="space-between">
//       <Grid item xs={6} md={6}>
//         <h1>{title}</h1>
//       </Grid>

//       <Grid item xs={6} md={3}>
//         <StyledBreadcrumb
//           currentTitle={currentTitle}
//           previousSlug={previousSlug}
//           previousTitle={previousTitle}
//         ></StyledBreadcrumb>
//       </Grid>
//     </Grid>
//   );
// };

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  currentTitle,
  previousTitle,
  previousSlug,
}) => {
  return (
    <StyledBreadcrumb aria-label="breadcrumb">
      <Link url={previousSlug}>{previousTitle}</Link>
      <Typography color="textPrimary">{currentTitle}</Typography>
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;

// export { BreadcrumbHeading };
