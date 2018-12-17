import React from 'react'
import styled from 'styled-components'

import Terminal from './Terminal'
import BusinessCard from './BusinessCard'

const Title = styled.h1`
  text-align: center;
  font-weight: 100;
  font-size: 2.5em;
  span {
    white-space: nowrap;
    font-weight: 300;
    color: hsl(230, 65%, 60%);
  }
`

const SubTitle = styled.p`
  text-align: center;
  font-weight: 100;
  font-size: 2em;
`

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap-reverse;
  justify-content: space-between;
`

export default () => (
  <header>
    <Title>
      Hi, I'm <span>David De Wulf</span>
    </Title>
    <SubTitle>Web Developer</SubTitle>
    <Wrapper>
      <BusinessCard />
      <Terminal />
    </Wrapper>
  </header>
)
