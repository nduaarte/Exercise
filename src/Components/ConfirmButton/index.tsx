import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, TextButton } from './styles';

interface ButtonCofirmProps extends TouchableOpacityProps {
  text?: string;
  color: 'blue' | 'green';
}

const ConfirmButton: React.FC<ButtonCofirmProps> = ({ text='Confirmar', color, ...rest }) => {
  return(
    <Container {...rest}>
      <TextButton color={color}>{text}</TextButton>
    </Container>
  );
}

export default ConfirmButton;