import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    white: string;
    background: string;
    title: string;
    text: string;
    button: string;  
  }
}

export const Theme: DefaultTheme = {
  white: '#ffffff',
  background: '#F7F8FD',
  title: '#5D6472',
  text: '#5C6660',
  button: '#63A061'
}