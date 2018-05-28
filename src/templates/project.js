import React from 'react'

const ProjectUrl = ({ url }) => {

  return (
    <a
      href="www.google.com"
      target="_blank"
      rel="noopener noreferrer"
    >
    
      <button className="button grow">Take a look</button>
    </a>
  )
}

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log(post.projectUrl);
  
  return (
    <div className="container project">
      <div className="wrapper">
        <div className="project-image">
          <img src="https://source.unsplash.com/random/600x600" alt="project-image"/>  
        </div>
        <article
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="content"
        >
        </article>
        
        {true ? <ProjectUrl url={post.frontmatter.projectUrl}/> : ''}
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
        projectUrl
      }
    }
  }
`;

// export const query = graphql`
//   query ProjectQuery($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         slug
//         title
//         date
//         tags
//         projectUrl
//       }
//     }
//   }
// `;