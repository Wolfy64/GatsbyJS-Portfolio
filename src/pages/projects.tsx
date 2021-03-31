import * as React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import ProjectCard from '../components/projectCard'

interface Project {
  id: string
  frontmatter: {
    title: string
    tags: string
    summary: string
    cover: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
  slug: string
}
interface UrlProps {
  allMdx: {
    nodes: Project[]
  }
}

const Container = styled.div`
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: repeat(auto-fill, 280px);
  gap: 32px;

  a {
    text-decoration: none;
  }
`

const ProjectsPage = () => {
  const {
    allMdx: { nodes },
  } = useStaticQuery<UrlProps>(query)

  return (
    <Layout>
      <Container>
        {nodes.map(
          ({ id, slug, frontmatter: { summary, tags, title, cover } }) => {
            return (
              <ProjectCard
                key={id}
                url={slug}
                summary={summary}
                tags={tags}
                title={title}
                cover={cover}
              />
            )
          }
        )}
      </Container>
    </Layout>
  )
}

export default ProjectsPage

const query = graphql`
  {
    allMdx(
      filter: { frontmatter: { templateKey: { eq: "project" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        id
        slug
        frontmatter {
          title
          tags
          summary
          cover {
            childImageSharp {
              gatsbyImageData(width: 280, height: 160)
            }
          }
        }
      }
    }
  }
`
