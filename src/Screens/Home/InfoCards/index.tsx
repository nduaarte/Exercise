import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FontAwesome5 } from '@expo/vector-icons';


import { Container, ExerciseCard, ExerciseText, WorkoutCard, Quantity, WorkoutText } from './styles';

interface InfoCardsProps {

}

const InfoCards: React.FC<InfoCardsProps> = () => {
  const { button } = useContext(ThemeContext);

  return (
    <Container>
      <ExerciseCard>
        <FontAwesome5 name="running" size={24} color={button} />
        <ExerciseText>Exercite-se 3 vezes por semana</ExerciseText>
      </ExerciseCard>

      <WorkoutCard>
        <Quantity>15</Quantity>
        <WorkoutText>Treinos completos</WorkoutText>
      </WorkoutCard>
    </Container>
  );
}

export default InfoCards;