import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-bottom: 3em;
  font-weight: 400;
  background-color: hsl(230, 65%, 60%);
  box-shadow: 0px 0px 20px 0px hsl(230, 65%, 60%);
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 1;
  a {
    color: white;
    margin: 0px 10px;
    text-transform: uppercase;
    transition: all ease-out 300ms;
    &:hover {
      opacity: 0.8;
      transition: all ease-out 300ms;
    }
    &:active {
      transform: scale(0.95);
      opacity: 0.6;
    }
  }
`
const NavSeparator = styled.span`
  height: 0.3em;
  width: 0.3em;
  opacity: 0.35;
  border-radius: 50%;
  background-color: white;
`

export default () => (
  <Nav>
    <Link to="/">Home</Link>
    <NavSeparator />
    <Link to="/projects/">Projects</Link>
    <NavSeparator />
    <Link to="/resume/">Resume</Link>
  </Nav>
)
