import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Home from '../components/Home'
import About from '../components/About'

const Main = styled.main`
  display: grid;
  grid-template-columns: 20px 1fr 20px;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'ML Home MR'
    'ML About MR';

  h1,
  p {
    text-align: center;
  }
`

export default () => (
  <Layout>
    <Main>
      <Home />
      <About />
    </Main>
  </Layout>
)
