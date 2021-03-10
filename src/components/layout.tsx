import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../theme/globalStyles'
import theme from '../theme/theme'
import SEO from './seo'
import Navbar from './navbar'
import Footer from './footer'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <ThemeProvider theme={theme} >
    <GlobalStyle />
    <SEO />
    <Navbar />
    {children}
    <Footer />
  </ThemeProvider>
)

export default Layout