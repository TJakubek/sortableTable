import React, { Dispatch, FC, SetStateAction } from 'react';
import { StyledDiv } from './styled';

const TryAgain: FC<TryAgainInterface> = ({ setError }) => {
  const handleClick = () => {
    setError(null);
  };
  return (
    <StyledDiv>
      <h1>Something went wrong</h1>
      <button onClick={handleClick}>Try again</button>
    </StyledDiv>
  );
};

interface TryAgainInterface {
  setError: Dispatch<SetStateAction<any>>;
}
export default TryAgain;
