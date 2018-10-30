import React from 'react'
import styled from 'styled-components'

import SocialNetwork from '../components/SocialNetwork'

const Footer = styled.footer`
  background-color: hsl(230, 100%, 97%);
  margin-top: 3em;
  padding: 1em;
  text-align: center;

  p {
    margin: 0;
  }

  @media (max-width: 374px) {
    margin-top: 0;
  }
`

export default () => (
  <Footer>
    <SocialNetwork />
    <p>
      Developed by me with the <span children="💙" /> of code.
    </p>
  </Footer>
)
