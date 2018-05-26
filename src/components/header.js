import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <div>
    <ul>
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/about">ABOUT</Link></li>
      <li><Link to="/projects">PROJECTS</Link></li>
      <li><Link to="/contact">CONTACT</Link></li>
    </ul>
  </div>
)

export default ({ siteTitle }) => (
  <div className="container navbar">
    <div className="wrapper">
      <Navbar/>
    </div>  
  </div>
)
