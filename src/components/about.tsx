import * as React from 'react'
import styled from 'styled-components'

import Alink from './aLink'

const Article = styled.article`
  max-width: 624px;
  padding: 8px;
  border-radius: ${({ theme }) => theme.radii};

  h1 {
    margin-bottom: 16px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.primary};
  }

  p:not(:last-child) {
    margin-bottom: 16px;
  }
`

const c0d3 = <Alink href="https://c0d3.com/" children="c0d3.com" />
const OpenClassrooms = (
  <Alink href="https://openclassrooms.com/en/" children="OpenClassrooms" />
)

const About = () => (
  <Article>
    <h1>A little bit about myself</h1>
    <p>
      I have always been passionate about coding, which is why after 15 years as
      an Optician I have decided to seize the opportunity to turn my passion
      into a career and got a <mark>Web Development Bachelors</mark> with
      {OpenClassrooms}.
    </p>

    <p>
      Throughout hackathons, open source projects and online certifications I
      was then able to contribute to team projects and join ever-expanding
      developer communities like {c0d3} without ever stopping to learn.
    </p>

    <p>
      Always looking to improve my set of skills, I am genuinely curious,
      particularly meticulous and have an eye for detail which is why I am
      committed to building a clean, reusable, and easily maintainable
      well-commented code.
    </p>
  </Article>
)

export default About
