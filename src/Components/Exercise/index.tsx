import React, { useEffect, useState } from 'react';
import { ImageSourcePropType } from 'react-native';

import ConfirmButton from '../ConfirmButton';
import { Container, InfoWrapper, Title, SubTitle, ExerciseImage, Description, TimerWrapper, Timer } from './styles';

interface ExerciseProps {
  exercisedPart?: string;
  exerciseName?: string;
  exampleImage?: ImageSourcePropType;
  description?: string;
}

const Exercise: React.FC<ExerciseProps> = ({ exercisedPart, exerciseName, exampleImage, description }) => {
  const [timing, setTiming] = useState(33);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval: number;

    if (!isPaused) {
      interval = setInterval(() => {
        setTiming((timing: number) => timing - 0.1);
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <Container>
      <InfoWrapper>
        <Title>{exercisedPart}</Title>
        <SubTitle>{exerciseName}</SubTitle>
        {/* <ExerciseImage source={exampleImage} /> */}
        <Description>{description}</Description>
      </InfoWrapper>

      <TimerWrapper>
        <Timer>{timing.toFixed(1)}</Timer>
      </TimerWrapper>

      <ConfirmButton
        onPress={() => setIsPaused(!isPaused)}
        text={isPaused ? 'Iniciar contagem' : 'Pausar'}
        color='blue'
      />
    </Container>
  );
}

export default Exercise;