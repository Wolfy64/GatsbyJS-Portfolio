import React from 'react'
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
`
const Wrapper = styled.div`
  display: flex;
`
const Image = styled.div`
  flex: 1;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border-radius: 15px
`
const Text = styled.article`
  flex: 2;
`
export default ({ data }) => {
  console.log("From Page: ",{data});
  
  const post = data.markdownRemark
  // const html = post.html.split('[SPLIT]');
  // const html = post.html;
  const {title} = post.frontmatter

  return (
    <div>
      <h1>PAGE - Template container</h1>
      <Title>{title}</Title>
      <Wrapper>
        <Image>
          <img src="https://source.unsplash.com/random/200x300" alt="" />
        </Image>
        <Text>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </Text>
      </Wrapper>
    </div>
  )
}

export const query = graphql`
  query PageQuery($slug: String!) {
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