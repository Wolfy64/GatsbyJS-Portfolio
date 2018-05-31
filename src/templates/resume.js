import React from 'react'
import styled from "styled-components";

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <div>
      <div className="wrapper resume">
        <h1>{ post.frontmatter.title }</h1>
        <article dangerouslySetInnerHTML={{ __html: post.html }} />
        <a
            href="/static/img/resume.pdf"
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