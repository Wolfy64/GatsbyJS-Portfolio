import React from 'react'
import styled from 'styled-components'

import profil from '../images/profil.jpg'
import SocialNetwork from '../components/SocialNetwork'

const Card = styled.div`
  align-self: center;
  width: 300px;
  margin: 2em 0;
  /* transition: all ease-out 300ms;
  :hover {
    transform: scale(1.05);
    transition: all ease-out 300ms;
    article {
      box-shadow: 0 6px 34px 0px hsl(230, 80%, 70%);
      transition: all ease-out 300ms;
    }
  } */
  @media (max-width: 850px) {
    margin: 2em auto;
  }
`

const Profil = styled.figure`
  img {
    border-radius: 50%;
    display: block;
    width: 100px;
    height: 100px;
    margin: auto;
    margin-bottom: -80px;
    box-shadow: 0px -3px 5px 0px hsl(230, 80%, 90%);
  }
`

const Summary = styled.article`
  border-radius: 5px;
  box-shadow: 0 6px 34px 0px hsl(230, 80%, 90%);
  height: 200px;
  p {
    text-align: center;
    padding-top: 3em;
    margin: 1em;
  }
`

export default () => (
  <Card>
    <Profil>
      <img src={profil} alt="David De Wulf" />
    </Profil>
    <Summary>
      <p>Looking for a Front End position</p>
      <SocialNetwork />
    </Summary>
  </Card>
)
