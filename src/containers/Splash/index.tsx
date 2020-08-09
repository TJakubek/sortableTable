import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';
import Spinner from 'src/components/Spinner';
import TableDataUrl from 'src/enums/url';
import { StyledContainer } from './styled';

const Splash: FC<SplashProps> = ({ setTableData, setError }) => {
  useEffect(() => {
    fetch(TableDataUrl.URL)
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(new Error('something went wrong'));
        }
        return response.json();
      })
      .then((data: ApiData[]) => {
        const retrievedData = data.map(
          ({
            address,
            company,
            email,
            id,
            name,
            phone,
            username,
            website,
          }) => ({
            city: address.city,
            company: company.name,
            email,
            id,
            name,
            phone,
            username,
            website,
          })
        );
        setTableData(retrievedData);
      })
      .catch((e) => {
        setError(e);
      });
  }, [setError, setTableData]);

  return (
    <StyledContainer>
      <Spinner />
    </StyledContainer>
  );
};

interface SplashProps {
  setError: Dispatch<SetStateAction<any>>;
  setTableData: Dispatch<SetStateAction<Data[] | null>>;
}

export default Splash;
