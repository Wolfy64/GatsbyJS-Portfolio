import React from 'react'
import styled from 'styled-components'

import A from './UI/A'

const About = styled.article`
  text-align: justify;
  padding: 5em 0;
  background: white;
  border-radius: 5px;
  box-shadow: 0 6px 34px 0px hsl(230, 80%, 90%);

  h1 {
    text-align: center;
    font-weight: 300;
    margin: 0em;
  }

  p {
    padding: 1em;
    max-width: 600px;
    margin: auto;
    text-align: justify;
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

export default () => (
  <About>
    <h1>About Me</h1>
    <p>
      I’m a <mark>web developer</mark>, who changed careers to do a cool job.
      <br />I have just completed a{' '}
      <mark>Bachelor's Degree in Web Development</mark> with {OpenClassrooms}.
      <br />
      Throughout this course I have learned how to effectively work
      independently and the importance of self-motivation, allowing me to be
      efficient as well as highly adaptable, one of the greatest assets for a
      profile in today’s working society.
      <br /> I would like to work as a <mark>Javascript web developer.</mark>
    </p>
  </About>
)
