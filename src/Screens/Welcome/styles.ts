import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;

  background-color: ${({ theme }) =>  theme.background};
  padding: 28px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.title};
  font-family: Jost_600SemiBold;
  font-size: 32px;

  margin-top: 20px;
  line-height: 38px;
  text-align: center;
`;

export const Vector = styled.Image`
  margin-top: 50px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.text};
  font-family: Jost_400Regular;
  font-size: 17px;

  margin-top: 50px;
  text-align: center;
  line-height: 25px;
`;

export const Button = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;

  margin-top: 50px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.button};
`;


