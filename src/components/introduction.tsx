import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  font-size: 32px;

  h1 {
    text-align: center;
    font-weight: 100;
    font-size: inherit;
  }

  h2 {
    text-align: center;
    font-weight: 100;
    font-size: inherit;
  }

  strong {
    white-space: nowrap;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.primary};
  }
`

export default () => (
  <Header>
    <h1>
      Hi, I'm <strong>David De Wulf</strong>
    </h1>
    <h2>Software Engineer</h2>
  </Header>
)
