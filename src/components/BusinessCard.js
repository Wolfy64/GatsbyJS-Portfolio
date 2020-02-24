import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import SocialNetwork from '../components/SocialNetwork'
import A from '../components/UI/A'

const Card = styled.aside`
  align-self: center;
  width: 300px;
  margin: 2em 0;
  @media (max-width: 850px) {
    margin: 2em auto;
  }

  p {
    text-align: center;
    padding-top: 75px;
    margin: 0.5em 0em;
    white-space: nowrap;
  }

  .gatsby-image-wrapper {
    margin: auto auto -80px auto;
    background-color: white;
    box-shadow: 0px 0px 20px 0px hsl(230, 80%, 90%);
    border-radius: 50%;
  }
`

const Summary = styled.div`
  border-radius: 5px;
  box-shadow: 0px 0px 20px 0px hsl(230, 80%, 90%);
  height: 200px;
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        imageOne: file(relativePath: { eq: "david.jpg" }) {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Card>
        <Img
          alt="David De Wulf"
          fixed={data.imageOne.childImageSharp.fixed}
          style={{ display: 'inherit' }}
        />
        <Summary>
          <p>
            {`Software Engineer at `}
            <A href="https://hwyhaul.com">HwyHaul</A>
          </p>
          <SocialNetwork />
        </Summary>
      </Card>
    )}
  />
)
