import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Container from '../components/UI/Container'

export default function Template({ data }) {
  console.log('DATA', data)
  const { fluid } = data.projectCover.childImageSharp
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Container>
        <Img fluid={fluid} alt={`Cover: ${frontmatter.title}`} />
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!, $cover: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        templateKey
        title
      }
    }
    projectCover: file(relativePath: { eq: $cover }) {
      childImageSharp {
        fluid(maxWidth: 930, maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
