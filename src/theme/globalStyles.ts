import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    font-family: ${({ theme }) => theme.fonts.body}
  }

  body {
    font-size: ${({ theme }) => theme.fontSizes.paragraph}
  }

  img { 
    display: block;
  }
`;

export default GlobalStyle;