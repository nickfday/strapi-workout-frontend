import styled from '../../utils/styled';

interface RootProps {
  someProp: boolean;
}

export const Root = styled.div<RootProps>`
  display: ${({ someProp }) => (someProp ? 'block' : 'inline')}; // edit me
`;

// to reference theme
export const SomeElement = styled.div`
  width: ${({ theme }) => theme.space[16]};
`;
