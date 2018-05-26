import React from 'react'
import Link from 'gatsby-link'

import Home from '../components/home'
import Skills from '../components/skills'
import About from '../components/about'
import Network from '../components/network'
import Contact from '../components/contact'

export default ({ data }) => {
  // console.log('From: Index', { data });
  const dataPage = data.allMarkdownRemark.edges
  const aboutData = dataPage[1].node
  const contactData = dataPage[0].node

  return(
    <div>
      <Home />
      {/* <Skills /> */}
      <About data={aboutData}/>
      {/* <Network /> */}
      {/* <Contact data={contactData}/> */}
    </div>
  )
}

export const query = graphql`
  query HomeQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "page" } } }
    ) {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`