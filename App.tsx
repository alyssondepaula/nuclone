import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import themes from './src/styles/themes';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  return (
    
    <Provider store={store}>
     <ThemeProvider theme={themes.nuTheme}>
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>
     </ThemeProvider>
     </Provider>

  );
}