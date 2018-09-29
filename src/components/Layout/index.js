import React from 'react'
import styled from 'styled-components'
import Head from './Head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3 1fr);
  grid-template-areas:
    'Navbar'
    'Main'
    'Footer';
`

export default ({ children }) => (
  <Layout>
    <Head />
    <Navbar />
    {children}
    <Footer />
  </Layout>
)
