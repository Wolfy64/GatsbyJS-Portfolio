export type ThemeType = typeof theme;

const theme = {
  space: [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
    512
  ],
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  },
  // fontSizes: [
  //   12,
  //   14,
  //   16,
  //   20,
  //   24,
  //   32,
  //   48,
  //   64,
  //   96
  // ],
  fontSizes: {
    navLink: '1.8rem',
    paragraph: '1.6rem'
  },
  radii: '8px',
  fontWeights: {
    body: 300,
    heading: 400,
    bold: 400
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: '#2b2b2b',
    background: '#fff',
    primary: 'hsl(230, 65%, 60%)',
    secondary: 'hsl(230 65% 96%)',
    white: 'hsl(240, 11%, 96%)',
    muted: '#ff0000'
  },
  transitions: {
    standard: '0.3s ease-out'
  }
}

export default theme