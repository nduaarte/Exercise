import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 232px;
  height: 56px;
  
  border-radius: 16px;
  background-color: ${({ theme }) =>  theme.button};
`;

interface ButtonProps {
  color: string;
}

export const TextButton = styled.Text<ButtonProps>`
  font-family: Jost_600SemiBold;
  font-size: 18px;
  color: ${({ theme }) => theme.white};
`;
