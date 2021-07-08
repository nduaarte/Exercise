import React from 'react';

import data from '../../services/data';
import ConfirmButton from '../../Components/ConfirmButton';
import { Container, WarningWrapper, Title, WarningText } from './styles';

const BeforeStart: React.FC = () => {
  const { warning } = data;

  return (
    <Container>
      <WarningWrapper>
        <Title>Antes de começar</Title>
        <WarningText>{warning}</WarningText>
      </WarningWrapper>

      <ConfirmButton color='blue' text='Iniciar exercícios' />
    </Container>
  );
}

export default BeforeStart;