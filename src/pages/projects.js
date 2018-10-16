import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

const ProjectsList = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <ProjectCard key={edge.node.id} post={edge.node} />)

  return <Layout>{Posts}</Layout>
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
            title
          }
        }
      }
    }
  }
`
