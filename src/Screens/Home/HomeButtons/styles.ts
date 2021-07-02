import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  margin-top: 60px;
`;

export const ToggleButton = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 10px;
`;

export const ToggleButtonText = styled.Text`
  font-family: Jost_500Medium;
  font-size: 15px;
  color: ${({ theme }) => theme.grey};
`;

