import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { useFonts, Jost_600SemiBold, Jost_400Regular, Jost_500Medium } from '@expo-google-fonts/jost';

import { store } from './src/Redux';
import { Theme } from './src/Styles';

import StackRoutes from './src/Routes/Stack.Routes';
import Screen from './src/Screens/Home';

export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_500Medium,
    Jost_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store} >
      <ThemeProvider theme={Theme} >
        <StatusBar />
        
        <Screen />
      </ThemeProvider>
    </Provider>
  );
}