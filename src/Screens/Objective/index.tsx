import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import RadioButtons from './RadioButtons';
import ConfirmButton from '../../Components/ConfirmButton';
import { Container, Emoji, Title } from './styles';

const Objective: React.FC = () => {
  const { navigate } = useNavigation();
  const [objectiveId, setObjectiveId] = useState(1);

  useEffect(() => {
    async function handleChoose() {
      await AsyncStorage.setItem('@Moving:objectiveId', objectiveId.toString());
    }

    handleChoose();
  }, [objectiveId]);

  return (
    <Container>
      <Emoji>😃</Emoji>
      <Title>Qual o{'\n'}seu objetivo ?</Title>

      <RadioButtons
        objective={objectiveId}
        setDefine={() => setObjectiveId(1)}
        setloseWeight={() => setObjectiveId(2)}
        setIncrease={() => setObjectiveId(3)}
        setOnlyExercise={() => setObjectiveId(4)}
      />

      <ConfirmButton color='green' onPress={() => navigate('ObjectiveInfo')} />
    </Container>
  );
}

export default Objective;