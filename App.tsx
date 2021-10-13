import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { Provider } from 'react-redux';
import store from './src/store';
import { useFonts, 
         Roboto_100Thin,
         Roboto_300Light,
         Roboto_400Regular,
         Roboto_500Medium,
         Roboto_700Bold,
         Roboto_900Black
       } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import ThemeCustomProvider from './src/Providers/themeProvider';

export default function App() {


  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black
  });

  if (!fontsLoaded){ return <AppLoading /> }

  return (
    
    <Provider store={store}>
     <ThemeCustomProvider>
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>
     </ThemeCustomProvider>
     </Provider>

  );
}