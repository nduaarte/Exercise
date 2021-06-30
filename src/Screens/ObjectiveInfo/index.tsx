import React from 'react';
import { useSelector } from 'react-redux';

import image from '../../assets/objective.png';
import { RootState } from '../../Redux/ObjectiveInfoReducer';
import ConfirmButton from '../../Components/ConfirmButton';
import { Container, Title, Vector, Description } from './styles';

const MetaInfo: React.FC = () => {
  const title = useSelector((state: RootState) => state.ObjectiveInfoReducer.title);
  const description = useSelector((state: RootState) => state.ObjectiveInfoReducer.description);

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