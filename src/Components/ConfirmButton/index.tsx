import React from 'react';

import { Container, TextButton } from './styles';

interface ButtonCofirmProps {
  text?: string;
  color: 'blue' | 'green';
}

const ConfirmButton: React.FC<ButtonCofirmProps> = ({ text='Confirmar', color }) => {
  return(
    <Container>
      <TextButton color={color} >{text}</TextButton>
    </Container>
  );
}

export default ConfirmButton;