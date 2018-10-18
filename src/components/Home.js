import React from 'react'
import styled from 'styled-components'
import Terminal from './Terminal'

const Header = styled.header`
  grid-column: ML-end / MR-start;
`

export default () => (
  <Header>
    <h1>Hi, I'm David De Wulf</h1>
    <p>Web Developer</p>
    <Terminal />
  </Header>
)
