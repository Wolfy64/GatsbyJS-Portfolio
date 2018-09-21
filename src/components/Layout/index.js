import React from 'react'
import Head from './Head'
import Navbar from './Navbar'
import Footer from './Footer'

export default ({ children }) => (
  <React.Fragment>
    <Head />
    <Navbar />
    {children}
    <Footer />
  </React.Fragment>
)
