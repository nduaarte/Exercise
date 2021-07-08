import styled from 'styled-components/native';

interface ContainerProps {
  hasGreen: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  justify-content: center;
  width: 232px;
  height: 56px;
  
  border-radius: 16px;
  background-color: ${({ hasGreen }) => hasGreen ? ({ theme }) => theme.button : ({ theme }) => theme.button2};
`;

export const TextButton = styled.Text`
  font-family: Jost_600SemiBold;
  font-size: 18px;
  color: ${({ theme }) => theme.white};
`;
