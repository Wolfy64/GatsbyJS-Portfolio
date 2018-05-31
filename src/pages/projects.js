import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image";

export default ({ data }) => {
  console.log('From: project', { data })
  
  return (
    <div>
      <div className="container projects">
        <div className="wrapper">
          <h1>My Projects</h1>
          
          {data.allMarkdownRemark.edges.map(({ node }) => 

            <div key={node.id}>
              
              <Link to={node.frontmatter.slug}>
                <div className="flex-container project-box grow">
                  
                  <div className="project-image">
                    <img src={`/img/${node.frontmatter.img}`} alt="Project's image" />
                  </div>

                  <div className="project-details">
                    <h2 className="title">{node.frontmatter.title}</h2>
                    <p className="subtitle">
                      {node.frontmatter.date} - {node.frontmatter.tags}</p>
                    <hr/>
                    <p className="body">
                      {node.frontmatter.excerpt}
                    </p>
                  </div>

                </div>  
              </Link>

            </div>

          )}
    
        </div>
      </div>

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
          html
          frontmatter {
            title
            date(formatString: "MMM. YYYY ")
            slug
            tags
            excerpt
            img
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
