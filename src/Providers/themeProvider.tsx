import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { useAppSelector } from '../hooks/useAppSelector';
import themes from '../styles/themes';


const ThemeCustomProvider: React.FC = ({children}) => {

  const isDark: boolean = useAppSelector(state=> state.user.isDark)

  return (

  
  <ThemeProvider theme={isDark ? themes.nuDarkTheme : themes.nuTheme}>
   {children}
  </ThemeProvider>
  );
}

export default ThemeCustomProvider;