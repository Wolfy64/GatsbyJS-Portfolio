import { ThemeType } from './theme/theme';

declare module 'styled-components' {
  // extends the global DefaultTheme with our ThemeType.
  export interface DefaultTheme extends ThemeType {}
}