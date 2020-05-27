import styled from 'styled-components';

const StyledWrapper = styled.div`
  color: #fff;
  height: 200px;
  .textArea {
    color: #fff;
    height: 200px;
    background: rgba(0, 0, 0, 0.5);
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

const StyledBanner = styled('div')<{ url: string }>`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ url }) => url});
  background-size: cover;
  height: 100%;
  width: 100%;
`;

const StyledHeading = styled.h1`
  margin-top: 70px;
`;

const StyledVideo = styled('video')`
  width: 100%;
  object-fit: fill;
  max-height: 400px;
`;

export { StyledWrapper, StyledBanner, StyledHeading, StyledVideo };
