import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  align-items: center;
  border-radius: 8px;

  background-color: ${({ theme }) =>  theme.shadow};
`;

export const SubTitlte = styled.Text`
  font-family: Jost_600SemiBold;
  font-size: 18px;
  color: ${({ theme }) => theme.button};
`;

export const Title = styled.Text`
  font-family: Jost_600SemiBold;
  font-size: 32px;
  color: ${({ theme }) => theme.title};

  margin-bottom: 10px;
`;

export const Description = styled.Text`
  font-family: Jost_400Regular;
  font-size: 17px;

  text-align: center;
  line-height: 25px;
  color: ${({ theme }) => theme.text};
`;

