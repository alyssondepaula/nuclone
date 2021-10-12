
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    isDark: boolean;

    colors: {

      primary: string;
      primaryPastel: string;
      box: string;
      text: string;
      textNegative: string;

    };

    fonts: {
     
      thin: string;
      light: string;
      regular: string;
      medium: string;
      bold: string;
      black: string;
  
    };
  }
}