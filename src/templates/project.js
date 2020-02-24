import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Container from '../components/UI/Container'
import Button from '../components/UI/Button'

const ImgCover = styled(Img)`
  margin: 2em auto;
  border-radius: 5px;
  box-shadow: 0px 0px 20px 0px hsl(230, 80%, 90%);
`

const Wrapper = styled.article`
  padding: 2em 0;
  border-radius: 5px;
  box-shadow: 0px 0px 20px 0px hsl(230, 80%, 90%);
  text-align: center;

  h1 {
    text-align: center;
    margin: 1em 0;
  }

  .markdown {
    padding: 1em;
    max-width: 800px;
    margin: auto;
    text-align: justify;

    a {
      transition: all ease-out 300ms;
      border-bottom: 1px solid hsla(230, 90%, 50%, 0.1);
      box-shadow: inset 0 -2px 0 0 hsla(230, 90%, 50%, 0.1);
      padding: 0 0.2rem;
      :hover {
        border-radius: 3px;
        background: hsl(230, 100%, 97%);
        transition: all ease-out 300ms;
      }
    }
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
          {frontmatter.git && <Button git href={frontmatter.git} />}
          {frontmatter.web && <Button web href={frontmatter.web} />}
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
        git
        web
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
