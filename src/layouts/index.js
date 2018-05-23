import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from "styled-components";
import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'

const Container = styled.div`
  margin: 3rem auto;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background: pink;
`;

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <Container>{children()}</Container>
    <Footer/>
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