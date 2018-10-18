import React from 'react'

import Layout from '../components/Layout'
import Home from '../components/Home'
import About from '../components/About'
import Container from '../components/UI/Container'

export default () => (
  <Layout>
    <Container>
      <Home />
      <About />
    </Container>
  </Layout>
)
