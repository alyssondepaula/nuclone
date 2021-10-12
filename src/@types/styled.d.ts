
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
  }
}