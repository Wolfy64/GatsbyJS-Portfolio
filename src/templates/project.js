import React from 'react'

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log(post);
  
  return (
    <div className="container project">
      <div className="wrapper">
        <div className="project-image">
          <img src={`/img/${post.frontmatter.img}`} alt="Project's image" />  
        </div>
        <h1>{ post.frontmatter.title }</h1>
        <article dangerouslySetInnerHTML={{ __html: post.html }} />
        { post.frontmatter.projectUrl &&
          <a
            href={ post.frontmatter.projectUrl }
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button grow">Take a look</button>
          </a>
        }
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
        projectUrl
      }
    }
  }
`;
