import React from 'react'
import styled from 'styled-components'

import Mark from './UI/Mark'
import ALink from './UI/ALink'

const Article = styled.article`
  grid-column: ML-end / MR-start;
`

const OpenClassrooms = (
  <ALink
    href="https://openclassrooms.com/en/for-business"
    name="OpenClassrooms"
  />
)

export default () => (
  <Article>
    <h1>ABOUT</h1>
    <p>
      I’m a <Mark>web developer,</Mark> who changed careers to do a cool job. I
      have just completed a <Mark>Bachelor's Degree in Web Development</Mark>{' '}
      with {OpenClassrooms}. Throughout this course I have learned how to
      effectively work independently and the importance of self-motivation,
      allowing me to be efficient as well as highly adaptable, one of the
      greatest assets for a profile in today’s working society. I would like to
      work as a Javascript full-stack web developer.
    </p>
  </Article>
)
