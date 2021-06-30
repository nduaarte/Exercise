import React, { useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import data from '../../services/data';
import RadioButtons from './RadioButtons';
import ConfirmButton from '../../Components/ConfirmButton';
import { Container, Emoji, Title } from './styles';

const Objective: React.FC = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const [objective, setObjective] = useState('define');
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    async function handleChoose() {
      await AsyncStorage.setItem('@Moving:objective', objective);
    }

    switch (objective) {
      case 'define':
        return setIndex(0);
      case 'loseWeight':
        return setIndex(1);
      case 'increase':
        return setIndex(2);
      case 'onlyExercise':
        return setIndex(3);
    }

    handleChoose();
  }, [index]);

  function dispatchToNavigate() {
    console.log(index);

    const title = data.objectives[index].title;
    const description = data.objectives[index].description;
    dispatch({ type: 'UPDATE_TITLE', value: title });
    dispatch({ type: 'UPDATE_DESCRIPTION', value: description });

    navigate('ObjectiveInfo');
  }

  return (
    <Container>
      <Emoji>😃</Emoji>
      <Title>Qual o{'\n'}seu objetivo ?</Title>

      <RadioButtons
        objective={objective}
        setDefine={() => setObjective('define')}
        setloseWeight={() => setObjective('loseWeight')}
        setIncrease={() => setObjective('increase')}
        setOnlyExercise={() => setObjective('onlyExercise')}
      />

      <ConfirmButton color='green' onPress={dispatchToNavigate} />
    </Container>
  );
}

export default Objective;