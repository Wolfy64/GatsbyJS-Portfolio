import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <div>
    <ul>
      <li><Link to="/">DAVID</Link></li>
      <li><Link to="/projects">PROJECTS</Link></li>
      <li><Link to="/contact">CV</Link></li>
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
