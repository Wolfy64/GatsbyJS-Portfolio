import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Card = styled.div`
  display: inline-block;
  background: white;
  border-radius: 5px;
  max-width: 270px;
  box-shadow: 0 6px 34px 0px hsl(230, 80%, 90%);
  transition: all ease-out 300ms;
  :hover {
    transform: scale(1.05);
    transition: all ease-out 300ms;
    box-shadow: 0 6px 34px 0px hsl(230, 65%, 60%);
  }

  hr{ margin: 0 1em; },
`
const ImgCard = styled(Img)`
  border-radius: 5px 5px 0px 0px;
`

const TitleCard = styled.h1`
  font-size: 1em;
  margin: 1rem;
`

const SummaryCard = styled.p`
  font-size: 0.8em;
  margin: 1rem;
`

const TagCard = styled.p`
  text-transform: uppercase;
  font-size: 0.7em;
  font-weight: bolder;
  border-radius: 0 0 5px 5px;
  margin: 1rem;
`

const ProjectCard = ({ project, cover }) => {
  const { path, summary, tag, title } = project.frontmatter
  const { fixed } = cover
  return (
    <Link to={path}>
      <Card>
        <ImgCard fixed={fixed} alt={`Cover: ${title}`} />
        <TitleCard children={title} />
        <SummaryCard children={summary} />
        <hr />
        <TagCard children={tag} />
      </Card>
    </Link>
  )
}

export default ProjectCard
