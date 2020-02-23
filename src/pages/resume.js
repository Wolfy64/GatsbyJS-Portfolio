import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Container from '../components/UI/Container'
// import Button from '../components/UI/Button'
// import resume from '../images/resume_david.pdf'

const Wrapper = styled.article`
  margin: 2em 0em;
  padding: 2em 0;
  border-radius: 5px;
  box-shadow: 0px 0px 20px 0px hsl(230, 80%, 90%);
  text-align: center;

  h2 {
    color: hsl(230, 65%, 60%);
    margin-bottom: 0.2em;
  }

  h3 {
    color: inherit;
    font-variant: petite-caps;
    font-weight: 300;
    margin: 0.3em 0em;
  }

  hr {
    background-color: hsl(230, 80%, 90%);
  }

  li {
    margin: 0;
  }

  p {
    margin-bottom: 1em;
  }

  .markdown {
    text-align: left;
    font-size: 0.9em;
    padding: 1em;
    max-width: 800px;
    margin: auto;

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

const Resume = ({ data }) => (
  <Layout>
    <h1 style={{ textAlign: 'center' }}>My Resume</h1>
    <Container>
      <Wrapper>
        <div
          className="markdown"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        {/* <Button href={resume} download /> */}
      </Wrapper>
    </Container>
  </Layout>
)

export default Resume

export const pageQuery = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/resume/" } }) {
      html
      fields {
        slug
      }
    }
  }
`
