import { DefaultTheme } from 'styled-components';

const nuTheme: DefaultTheme = {
    isDark: false,

  colors: {
      primary: '#8D00DA',
      primaryPastel: '#9B3BDA',
      box: '#F0F1F5',
      text: '#FFFFFF',
      textNegative: '#000000',
      textAlternative: '#737581'

  },
  fonts: {
     
    thin :'Roboto_100Thin',
    light :'Roboto_300Light',
    regular :'Roboto_400Regular',
    medium :'Roboto_500Medium',
    bold :'Roboto_700Bold',
    black :'Roboto_900Black'

  },
};

export { nuTheme };