import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { useFonts, Jost_600SemiBold, Jost_400Regular, Jost_500Medium } from '@expo-google-fonts/jost';

import { Theme } from './src/Styles';

import Welcome from './src/Screens/Welcome'
import Objective from './src/Screens/Objective'

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
    <ThemeProvider theme={Theme} >
      <StatusBar />
      <Objective />
    </ThemeProvider>
  );
}