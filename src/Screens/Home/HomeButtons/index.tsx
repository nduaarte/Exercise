import React from 'react';

import ConfirmButton from '../../../Components/ConfirmButton';
import { Container, ToggleButton, ToggleButtonText } from './styles';

interface HomeButtonsProps {

}

const HomeButtons: React.FC<HomeButtonsProps> = () => {
  return (
    <Container>
      <ConfirmButton color='green' text='Começar um treino' />
      
      <ToggleButton>
        <ToggleButtonText>Alternar Objetivo</ToggleButtonText>
      </ToggleButton>
    </Container>
  );
}

export default HomeButtons;