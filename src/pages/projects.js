import React from "react";
import Link from "gatsby-link";

// import SiteTemplate from '../templates/siteTemplate'
const Project = () => (
  <div>
    test
  </div>
)

export default ({ data }) => {
  return (
    <div>
      <h1 display={"inline-block"} borderBottom={"1px solid"}>
        Amazing Pandas Eating Things
      </h1>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >
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
      filter: { frontmatter: { project: { eq: true } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            project
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