import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { RadioButton } from 'react-native-paper';

import ConfirmButton from '../../Components/ConfirmButton';
import { Container, RadioWrapper, Emoji, Title, Row, RadioText } from './styles';

const Objective: React.FC = () => {
  const { button } = useContext(ThemeContext);
  const [checked, setChecked] = useState('define');

  return (
    <Container>
      <Emoji>😃</Emoji>
      <Title>Qual o{'\n'}seu objetivo ?</Title>
      
      <RadioWrapper>
        <Row onPress={() => setChecked('define')}>
          <RadioButton
            value='define'
            color={button}
            status={checked === 'define' ? 'checked' : 'unchecked'}
          />
          <RadioText>Definir</RadioText>
        </Row>

        <Row onPress={() => setChecked('loseWeight')}>
          <RadioButton
            value='loseWeight'
            color={button}
            status={checked === 'loseWeight' ? 'checked' : 'unchecked'}
          />
          <RadioText>Emagrecer</RadioText>
        </Row>

        <Row onPress={() => setChecked('increase')}>
          <RadioButton
            value='increase'
            color={button}
            status={checked === 'increase' ? 'checked' : 'unchecked'}
          />
          <RadioText>Crescer</RadioText>
        </Row>

        <Row onPress={() => setChecked('onlyExercise')}>
          <RadioButton
            value='onlyExercise'
            color={button}
            status={checked === 'onlyExercise' ? 'checked' : 'unchecked'}
          />
          <RadioText>Apenas me exercitar</RadioText>
        </Row>
      </RadioWrapper>

      <ConfirmButton color='green' />
    </Container>
  );
}

export default Objective;