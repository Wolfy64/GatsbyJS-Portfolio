import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from "styled-components"
import Header from '../components/header'
import Footer from '../components/footer'
import './sass/index.scss'
import './sass/style.scss'

const Layout = ({ children, data }) => (
  <div>
    
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'David De Wulf - Portfolio' },
        { name: 'author', content: 'David De Wulf' },
        { name: 'creator', content: 'David De Wulf' },
        { name: 'publisher', content: 'David De Wulf' },
        { name: 'generator', content: 'GatsbyJS' },
        { name: 'keywords', content: 'Web Developer, Fullstack, Front end,Back end' },
        { property: 'og:title', content: 'Portfolio - David De Wulf' },
        { property: 'og:type', content: 'website' },
        { property: 'og:local', content: 'en_US' },
        { property: 'og:description', content: 'David De Wulf - Portfolio' },
        { property: 'og:url', content: 'https://dewulfdavid.com/' },
        { property: 'og:site_name', content: 'David De Wulf' },
      ]}
    >
      <html lang="en-US" />   
    </Helmet>  
    <Header siteTitle={data.site.siteMetadata.title} />
    {children()}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`