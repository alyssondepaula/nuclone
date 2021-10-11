import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import themes from './src/styles/themes';

export default function App() {
  return (
    
     <ThemeProvider theme={themes.nuTheme}>
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>
     </ThemeProvider>

  );
}