import React from 'react'
import Link from 'gatsby-link'
import Home from '../components/home'
import About from '../templates/about'

export default ({ data }) => (
  <div>
    <Home />
    <About data={data}/>
  </div>
)

export const query = graphql`
  query IndexQuery {
    markdownRemark(frontmatter:{type:{eq:"about"}}) {
      html
      frontmatter{
        title
        type
      }
    }
  }
`