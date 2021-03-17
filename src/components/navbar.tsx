import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  position: sticky;
  z-index: 1;
  box-shadow: 0px 0px 16px 0px ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
`

const NavLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.navLink};
  color: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transitions.standard};
  :hover {
    opacity: 0.8;
  }
  :active {
    opacity: 0.4;
    transform: scale(0.95);
  }
`

const NavSeparator = styled.span`
  opacity: 0.4;
  height: 0.5rem;
  width: 0.5rem;
  margin: 0 0.8rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
`

const Navbar = () => (
  <Nav>
    <NavLink to="/" children="Home" />
    <NavSeparator />
    <NavLink to="/projects" children="Projects" />
    <NavSeparator />
    <NavLink to="/resume" children="Resume" />
  </Nav>
)

export default Navbar