import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <nav class="navbar-fixed">
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
  </nav>
)
