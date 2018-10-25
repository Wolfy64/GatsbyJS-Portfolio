import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import Container from '../components/UI/Container'

const Grid = styled.div`
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: repeat(auto-fill, 270px);
  grid-gap: 3em;
  padding: 5em;
`

const ProjectsList = ({
  data: {
    allMarkdownRemark: { edges },
    projectCover: { childImageSharp },
  },
}) => {
  const Projects = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => (
      <ProjectCard
        key={edge.node.id}
        url={edge.node.frontmatter.templateKey + edge.node.fields.slug}
        project={edge.node}
        cover={childImageSharp}
      />
    ))

  return (
    <Layout>
      <Container>
        <h1 style={{ textAlign: 'center' }}>My Projects</h1>
        <Grid>{Projects}</Grid>
      </Container>
    </Layout>
  )
}

export default ProjectsList

export const pageQuery = graphql`
  query($cover: String) {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            templateKey
            date(formatString: "MMMM DD, YYYY")
            cover
            title
            summary
            tags
          }
        }
      }
    }
    projectCover: file(relativePath: { eq: $cover }) {
      childImageSharp {
        fixed(width: 270, height: 170) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
