import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 32px;
  background-color: ${({ theme }) => theme.background};
`;

export const Title = styled.Text`
  font-family: Jost_600SemiBold;
  font-size: 32px;
  color: ${({ theme }) => theme.title};
`;

export const Vector = styled.Image`
  margin: 30px 0;
`;

export const Description = styled.Text`
  width: 75%;
  margin-bottom: 30px;

  font-family: Jost_400Regular;
  font-size: 17px;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

