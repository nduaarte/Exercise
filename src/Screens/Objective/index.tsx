import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface ObjectiveProps {
  children: ReactNode;
}

function Objective({ children }: ObjectiveProps) {
  return (
    <Container>
      <Text>Objective</Text>
      {children}
    </Container>
  );
};

export default Objective;
