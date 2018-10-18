import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: black;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  ul {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 20px;
    list-style: none;
    margin: 0;
  }

  li {
    margin: 0;
    align-self: center;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
  }
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
