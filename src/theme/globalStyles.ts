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
    /* line-height: 24px; */
    /* letter-spacing: 0.6px; */
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: ${({ theme }) => theme.fontWeights.body};
    color: ${({ theme }) => theme.colors.text};
  }

  body {
    font-size: ${({ theme }) => theme.fontSizes.paragraph}
  }

  img, svg { 
    display: block;
  }

  mark { 
    border-radius: 4px;
    padding: 2px 4px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    background-color:${({ theme }) => theme.colors.secondary}
  }
`;

export default GlobalStyle;