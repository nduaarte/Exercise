import React from 'react';
import styled from 'styled-components/native';

import ObjectiveInfo from './ObjectiveInfo';
import InfoCards from './InfoCards';
import HomeButtons from './HomeButtons';

const Home: React.FC = () => {
  return (
    <Container>
      <ObjectiveInfo />
      <InfoCards />
      <HomeButtons />
    </Container>
  );
}

export default Home;

const Container = styled.View`
  flex: 1;
  padding: 30px 20px;
`;
