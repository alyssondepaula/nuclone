
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    isDark: boolean;

    colors: {

      primary: string;
      primaryPastel: string;
      gray: string;
      white: string;

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