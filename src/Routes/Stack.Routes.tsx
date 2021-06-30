import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../Screens/Welcome';
import Objective from '../Screens/Objective';
import ObjectiveInfo from '../Screens/ObjectiveInfo';

const StackRoutes: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator headerMode='none'>
        <Screen name='Welcome' component={Welcome} />
        <Screen name='Objective' component={Objective} />
        <Screen name='ObjectiveInfo' component={ObjectiveInfo} />
      </Navigator>
    </NavigationContainer>
  );
}

export default StackRoutes;