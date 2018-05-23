import React from "react";
import Link from "gatsby-link";

const Project = () => (
  <div>
    test
  </div>
)

export default ({ data }) => {
  // console.log('From: project.js', {data});
  
  return (
    <div>
      <h1 display={"inline-block"}>
        Projets
      </h1>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.id}>
          <Link to={node.fields.slug}>
            {node.frontmatter.project ? <Project></Project> : `FALSE`}
            <h3>
              {node.frontmatter.title}{" "}
              <span color="#BBB">— {node.frontmatter.date}</span>
            </h3>
            <p>
              {node.excerpt}
            </p>
          </Link>
        </div>
      )}
    </div>
  )
}

export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`