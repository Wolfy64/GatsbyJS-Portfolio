import React from 'react'
import styled from 'styled-components'
import Terminal from './Terminal'

const Title = styled.h1`
  text-align: center;
  font-weight: 100;
  font-size: 2.5em;
  span {
    white-space: nowrap;
  }
`

const SubTitle = styled.p`
  text-align: center;
  font-weight: 100;
  font-size: 2em;
`

export default () => (
  <header>
    <Title>
      Hi, I'm <span>David De Wulf</span>
    </Title>
    <SubTitle>Web Developer</SubTitle>
    <Terminal />
  </header>
)
