import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: 350ms;
  }

  body {
    background: ${props => props.theme.colors.background};
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  ::-webkit-scrollbar {
    width: 05px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.webkit.scrollbar};
    border-radius: 25px;
  }
`;