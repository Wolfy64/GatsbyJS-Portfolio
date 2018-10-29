import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// To Ride of path (/image/uploads) and file extension (.something)
const REGEX = /(^\/images\/uploads\/)|(.\w+$)/gi

const Grid = styled.div`
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: repeat(auto-fill, 270px);
  grid-gap: 2em 1em;
  padding: 5em;
`

const ProjectsList = ({
  data: {
    allMarkdownRemark: { edges },
    allImageSharp,
  },
}) => {
  const Projects = edges
    // You can filter your posts based on some criteria
    // .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => {
      const { id, frontmatter, fields } = edge.node

      // Get cover name
      // Ex:/image/uploads/my-pic.png => my-pic
      const coverName = frontmatter.cover.replace(REGEX, '')

      // Find Fixed src image by index
      const index = allImageSharp.edges
        .map(img => img.node.fixed)
        .findIndex(img => img.src.includes(coverName))

      return (
        <ProjectCard
          key={id}
          url={frontmatter.templateKey + fields.slug}
          project={edge.node}
          cover={allImageSharp.edges[index].node}
        />
      )
    })

  return (
    <Layout>
      <h1 style={{ textAlign: 'center' }}>My Projects</h1>
      <Grid>{Projects}</Grid>
    </Layout>
  )
}

export default ProjectsList

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "project" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            templateKey
            cover
            title
            summary
            tags
          }
        }
      }
    }
    allImageSharp {
      edges {
        node {
          fixed(width: 270, height: 170) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`
