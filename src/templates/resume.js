import React from 'react'
import styled from "styled-components";
import resume from '../img/resume.pdf'

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <div className="container resume">
      <div className="wrapper">
        <h1>{ post.frontmatter.title }</h1>
        <article dangerouslySetInnerHTML={{ __html: post.html }} />
        <a
<<<<<<< HEAD
            href="/static/img/resume.pdf"
=======
            href={resume}
>>>>>>> dev_1.0.1
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button grow">Download it</button>
        </a>

      </div>
    </div>
  )
}

export const query = graphql`
  query ResumeQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        date
      }
    }
  }
`;