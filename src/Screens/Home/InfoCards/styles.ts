import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const ExerciseCard = styled.View`
  width: 90%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  background-color: ${({ theme }) => theme.greenShadow};
  padding: 18px;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export const ExerciseText = styled.Text`
  font-family: Jost_600SemiBold;
  font-size: 16px;
  color: ${({ theme }) => theme.text};

  margin-left: 12px;
`;

export const WorkoutCard = styled.View`
  width: 90%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  background-color: ${({ theme }) => theme.yellowShadow};
  border: 1px solid ${({ theme }) => theme.yellow};
  padding: 18px;
  border-radius: 5px;
`;

export const Quantity = styled.Text`
  font-family: Jost_500Medium;
  font-size: 22px;
  color: ${({ theme }) => theme.yellow};
`;

export const WorkoutText = styled.Text`
  font-family: Jost_600SemiBold;
  font-size: 16px;
  color: ${({ theme }) => theme.yellowText};

  margin-left: 12px;
`;

