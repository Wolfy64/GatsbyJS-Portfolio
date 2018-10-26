import styled from 'styled-components'

export default styled.div`
  max-width: 930px;
  margin: auto;
  padding: 0 1em;

  @media (max-width: 374px) {
    padding: 0.5em;

    article,
    .markdown,
    .gatsby-image-wrapper {
      margin: 0;
      border-radius: 0;
      box-shadow: none;
    }
  }
`
