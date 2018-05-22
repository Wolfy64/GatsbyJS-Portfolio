import React from 'react'
import Link from 'gatsby-link'

const Navbar = ({data}) => (
  <div className="navbar">
    <ul>
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/about">ABOUT</Link></li>
      <li><Link to="/projects">PROJECTS</Link></li>
      <li><Link to="/contact">CONTACT</Link></li>
      <li><Link to="/cv">CV</Link></li>
    </ul>
  </div>
)

const Header = ({ siteTitle }) => (
  <div className="header">
    <Navbar></Navbar>
  </div>
)

export default Header
