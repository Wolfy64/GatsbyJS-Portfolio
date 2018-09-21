import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './navbar'

export default ({ children }) => (
  <React.Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>David De Wulf</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" />
    </Helmet>
    <Navbar />
    <div>{children}</div>
  </React.Fragment>
)
