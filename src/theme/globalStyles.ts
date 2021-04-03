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
    line-height: 24px;
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: ${({ theme }) => theme.fontWeights.body};
    color: ${({ theme }) => theme.colors.text};
  }

  body {
    font-size: ${({ theme }) => theme.fontSizes.paragraph}
  }

  h1,h2,h3,h4,h5,h6,p,table,ul,ol, hr {
    margin-bottom: 16px;
  }

  img, svg { 
    display: block;
    max-width: 100%;
  }

  mark, strong, code { 
    border-radius: 4px;
    padding: 2px 4px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    background-color:${({ theme }) => theme.colors.secondary}
  }

  ul, ol {
    margin-left: 1em;
    ul,ol {
      margin-bottom: unset;
    }
  }

  hr {
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colors.secondary}
  }

  blockquote {
    padding: 0 1em;
    color: ${({ theme }) => theme.colors.primary};
    border-left: .25em solid ${({ theme }) => theme.colors.secondary};
  }

  table { 
    display: block;
    width: 100%;
    max-width: 100%;
    overflow: auto;
    border-spacing: 0;
    border-collapse: collapse;
    margin-top: 0;
  }

  thead { 
    display: table-header-group;
    text-align: center;
    background-color: white;
  }

  tbody {
    display: table-row-group;
    text-align: left;

    tr:nth-child(even){
      background-color: hsl(210deg 29% 97%);
    }
  }

  th, td {
    padding: 6px 13px;
    text-align: inherit;
    background-color: inherit;
    border: 1px solid #dfe2e5;
  }
`;

export default GlobalStyle;