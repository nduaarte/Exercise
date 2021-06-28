import React from 'react';

import welcome from '../../assets/welcome.png';

import { Container, Title, Vector, Description, Button, ButtonIcon } from './styles';

const Welcome: React.FC = () => {
  return (
    <Container>
      <Title>
        Treine{'\n'}onde quiser de{'\n'}forma correta
      </Title>

      <Vector source={welcome} />

      <Description>
        Você não precisa mais ir à academia. Treinos completos para todas as partes do corpo.
      </Description>

      <Button>
        <ButtonIcon />
      </Button>
    </Container>
  );
}

export default Welcome;