import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 60px;
`;

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const RadioText = styled.Text`
  font-family: Jost_500Medium;
  font-size: 18px;
  color: ${({ theme }) =>  theme.title};

  margin-left: 5px;
`;