import React from 'react'
import styled from 'styled-components'

import A from './UI/A'

const About = styled.article`
  text-align: left;
  padding: 5em 0;
  background: white;
  border-radius: 5px;
  box-shadow: 0px 0px 20px 0px hsl(230, 80%, 90%);

  h1 {
    text-align: center;
    font-weight: 300;
    margin: 0em;
  }

  p {
    padding: 1em;
    max-width: 800px;
    margin: auto;
    text-align: left;
  }

  @media (max-width: 374px) {
    h1 {
      margin: 0;
    }
  }
`

const OpenClassrooms = (
  <A href="https://openclassrooms.com/en/for-business" name="OpenClassrooms" />
)

const WesBos = <A href="https://wesbos.com/" name="WesBos" />
const Udemy = (
  <A
    href="https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=bO172KEfJPLbcxTvXq89ISNc8Fw%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjhKM7ZLbWhoEBEeykHjQBkKbm1SGKyRI7tetvudNgkjcbldZP5agYUbhl4j3lK6w"
    name="Udemy"
  />
)

const FreeCodeCamp = (
  <A
    href="https://www.freecodecamp.org/certification/wolfy64/responsive-web-design"
    name="FreeCodeCamp"
  />
)
const C0d3 = <A href="https://c0d3.com/" name="c0d3.com" />
const Here = <A href="mailto:contact.dewulf@gmail.com" name="HERE" />

export default () => (
  <About>
    <h1>About Me</h1>
    <p>
      I have always been passionate about coding, which is why after 15 years as
      an optician I have decided to seize the opportunity to turn my passion
      into a career through a <mark>Computing Sciences Bachelors.</mark>
      <br />
      Throughout hackathons, Open Source projects and online certifications (
      {OpenClassrooms}, {WesBos}, {Udemy}, {FreeCodeCamp} …etc).
      <br />I have since then been able to build my own projects, contribute to
      team projects and join ever-expanding developer communities like {
        C0d3
      }{' '}
      without ever stopping to learn.
    </p>
    <p>
      Always looking to improve my set of skills, I am genuinely curious,
      particularly meticulous and have an eye for detail which is why I am
      committed to building a clean, reusable, and easily maintainable
      well-commented code.
    </p>
    <p>
      I am currently specialized in Front-end development and actively working
      on projects including building a <mark>FullStack App with ReactJS</mark>{' '}
      on the front-end on my spare time.
    </p>
    <p>
      Interested in collaborating? Please reach out {Here}.<br />I look forward
      to speaking with you soon, be it hiring or building a website remotely.
    </p>
  </About>
)
