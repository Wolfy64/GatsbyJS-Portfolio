import React from 'react'

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <h1>Project - Template container</h1>
      <h1>{post.frontmatter.title}</h1>
      <div style={{
        background: 'red',
      }}>
        <h1>PUTAIN CA MARCHE !!!!</h1>  
        <img src="https://source.unsplash.com/random/200x200" alt=""/>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
    }
  }
`;