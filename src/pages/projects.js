import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import ProjectCard from '../components/Card'
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
  },
}) => {
  const Projects = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <ProjectCard key={edge.node.id} project={edge.node} />)

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
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            cover
            title
            summary
            tag
          }
        }
      }
    }
  }
`
