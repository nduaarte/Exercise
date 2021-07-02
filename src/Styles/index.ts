import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    white: string;
    background: string;
    title: string;
    text: string;
    button: string;  
    shadow: string;  
    greenShadow: string;  
    yellowShadow: string;  
    yellow: string;  
    yellowText: string;  
    grey: string;  
  }
}

export const Theme: DefaultTheme = {
  white: '#ffffff',
  background: '#F7F8FD',
  title: '#5D6472',
  text: '#5C6660',
  button: '#63A061',
  shadow : '#F0F0F0',
  greenShadow: '#E2F2E1',
  yellowShadow: '#F6F4B4',
  yellow: '#E5D330',
  yellowText: '#747557',
  grey: '#ADAEB1'
}