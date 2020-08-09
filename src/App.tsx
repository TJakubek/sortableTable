import React, { FC, useState } from 'react';
import { StyledContainer } from './App.styled';
import './App.styled.ts';
import Splash from './containers/Splash';
import Table from './containers/Table';
import TryAgain from './containers/TryAgain';

function App() {
  const [tableData, setTableData] = useState<null | Data[]>(null);
  const [error, setError] = useState();

  return (
    <StyledContainer>
      {!tableData && !error && (
        <Splash setTableData={setTableData} setError={setError} />
      )}
      {tableData && <Table tableData={tableData} />}
      {error && <TryAgain setError={setError} />}
    </StyledContainer>
  );
}

export default App;
