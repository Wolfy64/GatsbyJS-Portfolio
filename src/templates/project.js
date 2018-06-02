import React from 'react'
import project1 from '../img/project1.jpg'
import project3 from '../img/project3.jpg'
import project4 from '../img/project4.jpg'
import project5 from '../img/project5.jpg'

export default ({ data }) => {
  const post = data.markdownRemark;
  const images = {
    project1,
    project3,
    project4,
    project5,
  }

  return (
    <div className="container project">
      <div className="wrapper">
        <div className="project-image">
<<<<<<< HEAD
          <img src={`/static/img/${post.frontmatter.img}`} alt="Project's image" />  
        </div>
        <h1>{ post.frontmatter.title }</h1>
        <article dangerouslySetInnerHTML={{ __html: post.html }} />
        { post.frontmatter.projectUrl &&
=======

>>>>>>> dev_1.0.1
          <a
            href={ post.frontmatter.projectUrl }
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={images[`${post.frontmatter.img}`]} alt="Project's image" />  
          </a>          
        </div>
        <h1>{ post.frontmatter.title }</h1>
        <article dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="project-button">

          {post.frontmatter.projectUrl &&
            <a
              href={post.frontmatter.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button grow">Take a look</button>
            </a>          
          }

          {post.frontmatter.git &&
            <a
              href={post.frontmatter.git}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button grow">Check the code</button>
            </a>          
          }

        </div>


      </div>
    </div>
  );
};

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        date
        tags
        img
        git
        projectUrl
      }
    }
  }
`;
