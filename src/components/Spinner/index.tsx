import React, { FC } from 'react';
import { StyledDiv } from './styled';

const Spinner: FC = () => {
  return (
    <StyledDiv viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </StyledDiv>
  );
};

export default Spinner;
