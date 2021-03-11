import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import GlobalStyle from '../theme/globalStyles'
import theme from '../theme/theme'
import SEO from './seo'
import Navbar from './navbar'
import Footer from './footer'

interface Props {
  children: React.ReactNode
}

const Container = styled.main`
  display: grid;
  grid-gap: 32px;
  padding: 32px 8px;
  max-width: 920px;
  min-height: calc(100vh - 140px);
`

const Layout = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SEO />
    <Navbar />
    <Container children={children} />
    <Footer />
  </ThemeProvider>
)

export default Layout
