import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { RadioButton } from 'react-native-paper';


import { Container, Wrapper, RadioText } from './styles';

interface RadioButtonsProps {
  objective: number;
  setDefine: () => void;
  setloseWeight: () => void;
  setIncrease: () => void;
  setOnlyExercise: () => void;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({ 
  objective, 
  setDefine, 
  setloseWeight, 
  setIncrease, 
  setOnlyExercise 
}) => {
  const { button } = useContext(ThemeContext);

  return (
    <Container>
      <Wrapper onPress={setDefine}>
        <RadioButton
          value='define'
          color={button}
          status={objective === 1 ? 'checked' : 'unchecked'}
        />
        <RadioText>Definir</RadioText>
      </Wrapper>

      <Wrapper onPress={setloseWeight}>
        <RadioButton
          value='loseWeight'
          color={button}
          status={objective === 2 ? 'checked' : 'unchecked'}
        />
        <RadioText>Emagrecer</RadioText>
      </Wrapper>

      <Wrapper onPress={setIncrease}>
        <RadioButton
          value='increase'
          color={button}
          status={objective === 3 ? 'checked' : 'unchecked'}
        />
        <RadioText>Crescer</RadioText>
      </Wrapper>

      <Wrapper onPress={setOnlyExercise}>
        <RadioButton
          value='onlyExercise'
          color={button}
          status={objective === 4 ? 'checked' : 'unchecked'}
        />
        <RadioText>Apenas me exercitar</RadioText>
      </Wrapper>
    </Container>
  );
}

export default RadioButtons;