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

const c0d3 = <A href="https://c0d3.com/" name="c0d3.com" />
const HwyHaul = <A href="https://hwyhaul.com" name="Hwy Haul" />
const openEmail = (
  <A
    href="mailto:contact.dewulf@gmail.com"
    name="So, interested in collaborating?"
  />
)

export default () => (
  <About>
    <h1>About Me</h1>
    <p>
      I have always been passionate about coding, which is why after 15 years as
      an Optometrist I have decided to seize the opportunity to turn my passion
      into a career and got a <mark>Computing Sciences Bachelors.</mark>
      <br />
      Throughout hackathons, open source projects and online certifications I
      was then able to contribute to team projects and join ever-expanding
      developer communities like {c0d3} without ever stopping to learn.
      <br />
      Always looking to improve my set of skills, I am genuinely curious,
      particularly meticulous and have an eye for detail which is why I am
      committed to building a clean, reusable, and easily maintainable
      well-commented code.
    </p>
    <p>
      I am currently working as a <mark>Front-end Developer</mark> at {HwyHaul}{' '}
      startup and on my spare time actively working on open source projects for{' '}
      {c0d3}.
      <br />
      I look forward to speaking with you soon, be it hiring or building a
      website remotely.
      <br />
      {openEmail}
    </p>
  </About>
)
