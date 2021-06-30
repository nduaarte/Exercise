import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import welcome from '../../assets/welcome.png';

import { Container, Title, Vector, Description, Button } from './styles';

const Welcome: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Title>
        Treine{'\n'}onde quiser de{'\n'}forma correta
      </Title>

      <Vector source={welcome} resizeMode='contain' />

      <Description>
        Você não precisa mais ir à{'\n'}academia. Treinos completos para{'\n'}todas as partes do corpo.
      </Description>

      <Button onPress={() => navigate('Objective')}>
        <AntDesign name="right" size={20} color="#ffff" />
      </Button>
    </Container>
  );
}

export default Welcome;