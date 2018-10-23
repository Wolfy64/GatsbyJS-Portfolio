import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import SocialNetwork from '../components/SocialNetwork'

const Card = styled.aside`
  align-self: center;
  width: 300px;
  margin: 2em 0;
  @media (max-width: 850px) {
    margin: 2em auto;
  }

  p {
    text-align: center;
    padding-top: 3em;
    margin: 1em;
  }

  .gatsby-image-wrapper {
    margin: auto auto -80px auto;
  }
`

const Summary = styled.div`
  border-radius: 5px;
  box-shadow: 0 6px 34px 0px hsl(230, 80%, 90%);
  height: 200px;
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        imageOne: file(relativePath: { eq: "david.png" }) {
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
          <p>Looking for a Front End position</p>
          <SocialNetwork />
        </Summary>
      </Card>
    )}
  />
)
