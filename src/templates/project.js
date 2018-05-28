import React from 'react'

export default ({ data }) => {
  const post = data.markdownRemark;
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
        <a href=""><button className="button grow">Take a look</button></a>
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
      }
    }
  }
`;