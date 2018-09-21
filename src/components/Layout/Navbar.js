import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Nav = styled.nav.attrs({
  className: 'grey darken-3',
})`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
`

export default () => (
  <Nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/projects/">Projects</Link>
      </li>
      <li>
        <Link to="/resume/">Resume</Link>
      </li>
    </ul>
  </Nav>
)
