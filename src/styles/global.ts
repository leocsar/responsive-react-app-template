import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: 350ms;
  }

  html,
  body {
    background: ${props => props.theme.colors.background};
    font-size: clamp(16px, 2vw, 16px);
    color: ${props => props.theme.colors.text};
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  ::-webkit-scrollbar {
    width: .25rem;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.webkit.scrollbar};
    border-radius: 15rem;
  }
`;