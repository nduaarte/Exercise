import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import image from '../../assets/objective.png';
import ConfirmButton from '../../Components/ConfirmButton';
import { Container, Title, Vector, Description } from './styles';

const MetaInfo: React.FC = () => {
  const [objectiveI, setObjectiveId] = useState<string>();

  useEffect(() => {
    async function loadStorageObjectiveId() {
      const ID = await AsyncStorage.getItem('@Moving:objectiveId');

      setObjectiveId(ID || '');
    }
  
    loadStorageObjectiveId();
  }, []);

  return (
    <Container>
      <Title>{title}</Title>
      <Vector source={image} />
      <Description>{description}</Description>
      <ConfirmButton color='green' onPress={() => {}} />
    </Container>
  );
}

export default MetaInfo;