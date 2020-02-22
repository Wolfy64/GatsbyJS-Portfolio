import Typography from 'typography'
import lincolnTheme from 'typography-theme-lincoln'

lincolnTheme.headerFontFamily = [
  'Lato',
  'Helvetica Neue',
  'Avenir Next',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif',
]
lincolnTheme.bodyFontFamily = ['Lato', 'Helvetica Neue', 'Georgia', 'serif']
lincolnTheme.bodyWeight = 300
lincolnTheme.boldWeight = 400
lincolnTheme.baseLineHeight = 1.8
lincolnTheme.overrideThemeStyles = () => ({
  a: {
    textShadow: 'none',
    backgroundImage: 'none',
    color: 'hsla(0,0%,0%,0.70)',
  },
  b: {
    color: 'hsla(0,0%,0%,0.70)',
    fontWeight: '400',
  },
  p: {
    letterSpacing: '1px',
  },
  mark: {
    color: 'hsla(0,0%,0%,0.70)',
    padding: '0.2rem 0.4rem',
    borderRadius: '3px',
    backgroundColor: 'hsl(230, 100%, 97%)',
    fontWeight: '400',
    whiteSpace: 'nowrap',
  },
  strong: {
    color: 'hsla(0,0%,0%,0.70)',
    padding: '0 0.2rem',
    borderRadius: '3px',
    backgroundColor: 'hsl(230, 100%, 97%)',
  },
})

const typography = new Typography(lincolnTheme)

export default typography
