import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image";
import project1 from '../img/project1.jpg'
import project3 from '../img/project3.jpg'
import project4 from '../img/project4.jpg'
import project5 from '../img/project5.jpg'

export default ({ data }) => (
  <div>
    <div className="container projects">
      <div className="wrapper">
        <h1>My Projects</h1>

        {data.allMarkdownRemark.edges.map(({ node }) => {

<<<<<<< HEAD
            return (
              <div key={node.id}>
                
                <Link to={node.frontmatter.slug}>
                  <div className="flex-container project-box grow">
                    
                    <div className="project-image">
                      <img src={`/static/img/${node.frontmatter.img}`} alt="Project's image" />
                    </div>
=======
          // To find the relative path (image src) for each image 
          const images = data.allImageSharp.edges.map( ({node}) =>  node.original.src )
          const regex = new RegExp(`${node.frontmatter.img}\\W`,'gi');             
          const imgSrc = images.find((e) => e.match(regex))
          
          return (
            <div key={node.id}>
              
              <Link to={node.frontmatter.slug}>
                <div className="flex-container project-box grow">
                  
                  <div className="project-image">
                    <img src={imgSrc} alt="Project's image" />
                  </div>
>>>>>>> dev_1.0.1

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
          )            
        })}

      </div>
    </div>

  </div>
)

export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {type: {eq: "project"}}}) {
      edges {
        node {
          html
          frontmatter {
            title
            date(formatString: "MMM. YYYY ")
            slug
            tags
            excerpt
            img
          }
        }
      }
    }
    allImageSharp {
      edges {
        node {
          original {
            src
          }
        }
      }
    }
  }
`