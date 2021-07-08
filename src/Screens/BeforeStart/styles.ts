import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.background};
`;

export const WarningWrapper = styled.View`
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;

  background-color: ${({ theme }) => theme.blueShadow};
`;

export const Title = styled.Text`
  font-family: Jost_600SemiBold;
  font-size: 32px;
  color: ${({ theme }) => theme.title};
  margin-bottom: 10px;
`;

export const WarningText = styled.Text`
  font-family: Jost_400Regular;
  text-align: center;
  line-height: 25px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

