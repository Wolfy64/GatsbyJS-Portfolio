import * as React from 'react'
import styled from 'styled-components'

import Alink from './aLink'
import LinkAsButton from './linkAsButton'

const Article = styled.article`
  max-width: 624px;
  padding: 8px;
  align-self: end;
  border-radius: ${({ theme }) => theme.radii};
`

const H1 = styled.h1`
  margin-bottom: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primary};
`

const P = styled.p`
  :first-letter {
    font-size: 1.5em;
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.fontWeights.heading};
    color: ${({ theme }) => theme.colors.primary};
  }

  :not(:last-child) {
    margin-bottom: 16px;
  }
`

const Footer = styled.div`
  display: flex;
  justify-content: center;

  a:not(:last-child) {
    margin-right: 16px;
  }
`

const c0d3 = <Alink href="https://c0d3.com/" children="c0d3.com" />
const OpenClassrooms = (
  <Alink href="https://openclassrooms.com/en/" children="OpenClassrooms" />
)

const About = () => (
  <Article>
    <H1>A little bit about myself</H1>
    <P>
      I have always been passionate about coding, which is why after 15 years as
      an Optician I have decided to seize the opportunity to turn my passion
      into a career and got a <mark>Web Development Bachelors</mark> with
      {OpenClassrooms}.
    </P>

    <P>
      Throughout hackathons, open source projects and online certifications I
      was then able to contribute to team projects and join ever-expanding
      developer communities like {c0d3} without ever stopping to learn.
    </P>

    <P>
      Always looking to improve my set of skills, I am genuinely curious,
      particularly meticulous and have an eye for detail which is why I am
      committed to building a clean, reusable, and easily maintainable
      well-commented code.
    </P>

    <Footer>
      <LinkAsButton
        to="/projects"
        classFA="fas fa-rocket"
        children="Projects"
      />
      <LinkAsButton
        to="/resume"
        classFA="fas fa-user-tie"
        children="Resume"
      />
    </Footer>
  </Article>
)

export default About
