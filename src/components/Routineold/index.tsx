import React from 'react';
import styled from 'styled-components';

export interface RoutineGroupProps {
  routines: RoutineProps[];
}

export interface RoutineProps {
  title: string;
  id: number;
  body: string;
  slug: string;
}

const StyledWrapper = styled.div`
  text-align: center;
`;

const RoutineGroup: React.FC<RoutineGroupProps> = ({ routines }) => {
  console.log(routines);
  return (
    <StyledWrapper data-testid="routine">
      {routines.map((item) => {
        return <Routine {...item} key={item.id} />;
      })}
    </StyledWrapper>
  );
};

export { RoutineGroup };

const Routine: React.FC<RoutineProps> = ({ title, slug, body }) => {
  return (
    <div>
      Routine Single {title} {body} {slug}
    </div>
  );
};

export { Routine };
