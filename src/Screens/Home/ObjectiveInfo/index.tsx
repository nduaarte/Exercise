import React from 'react';

import { Container, SubTitlte, Title, Description } from './styles';

interface ObjectiveInfoProps {

}

const ObjectiveInfo: React.FC<ObjectiveInfoProps> = () => {
  return (
    <Container>
      <SubTitlte>Seu objetivo</SubTitlte>
      <Title>Definir Corpo</Title>

      <Description>
        Além dos exercícios semanais
        é preciso manter uma alimentação
        balanceada. Consumindo carboidratos em
        todas as refeições, incluindo salada e
        pelo menos 3 frutas por dia.
      </Description>
    </Container>
  );
}

export default ObjectiveInfo;