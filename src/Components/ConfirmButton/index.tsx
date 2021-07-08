import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, TextButton } from './styles';

interface ButtonCofirmProps extends TouchableOpacityProps {
  text?: string;
  color: 'blue' | 'green';
}

const ConfirmButton: React.FC<ButtonCofirmProps> = ({ text='Confirmar', color, onPress }) => {
  const hasGreen = color === 'green' ? true : false;

  return(
    <Container hasGreen={hasGreen} onPress={onPress}>
      <TextButton>{text}</TextButton>
    </Container>
  );
}

export default ConfirmButton;