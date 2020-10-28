import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
  
    colors: {
      primary: string;
      secondary: string;
  
      background: string;
      text: string;

      webkit: {
        scrollbar: string;
      },

      header: {
        menuIcon: string;
      },

      switches: {
        onColor: string;
      },

      drawer: {
        background: string;
      }
    }
  }
}