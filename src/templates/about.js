import React from 'react'

export default ({ data }) => (
  <div>
    <div className="container about">
      <div className="wrapper">
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </div>
  </div>
)

export const query = graphql`
  query HomeQuery {
    markdownRemark(frontmatter: {type: {eq: "about"}}) {
      html
      frontmatter {
        title
      }
    }
  }
`;