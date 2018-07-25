import React from 'react'
import background from '../img/about.jpg'

export default ({ data }) => (
  <div>
    <div
      className="container about"
      style={{
        backgroundColor: `#fafafa`,
        backgroundImage: `url( ${background} )`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `top`,
      }}
    >
      <div className="wrapper">
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <article
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </div>
  </div>
)

export const query = graphql`
  query HomeQuery {
    markdownRemark(frontmatter: { type: { eq: "about" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
