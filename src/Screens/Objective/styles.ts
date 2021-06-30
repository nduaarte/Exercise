import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) =>  theme.background};
  padding: 24px;
`;


export const Emoji = styled.Text`
  font-size: 46px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-family: Jost_600SemiBold;
  font-size: 28px;
  color: ${({ theme }) => theme.title};

  line-height: 32px;
  text-align: center;
  margin-bottom: 30px;
`;



