import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Container from '../components/UI/Container'

const ImgCover = styled(Img)`
  margin: 2em auto;
  border-radius: 5px;
  box-shadow: 0 6px 34px 0px hsl(230, 80%, 90%);
`

const Wrapper = styled.article`
  padding: 2em 0;
  border-radius: 5px;
  box-shadow: 0 6px 34px 0px hsl(230, 80%, 90%);

  h1 {
    text-align: center;
    margin: 1em 0;
  }

  .markdown {
    padding: 1em;
    max-width: 600px;
    margin: auto;
    text-align: justify;
  }
`

export default function Template({ data }) {
  const { fluid } = data.projectCover.childImageSharp
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Container>
        <ImgCover fluid={fluid} alt={`Cover: ${frontmatter.title}`} />
        <Wrapper>
          <h1>{frontmatter.title}</h1>
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Wrapper>
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
