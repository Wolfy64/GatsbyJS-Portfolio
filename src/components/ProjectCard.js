import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Card = styled.div`
  display: inline-block;
  background: white;
  border-radius: 5px;
  max-width: 270px;
  height: 450px;
  position: relative;
  box-shadow: 0px 0px 20px 0px hsl(230, 80%, 90%);
  transition: all ease-out 300ms;
  :hover {
    transform: scale(1.05);
    transition: all ease-out 300ms;
    box-shadow: 0px 0px 20px 0px hsl(230, 65%, 60%);
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
  border-top: 1px solid hsla(0, 0%, 0%, 0.2);
  text-transform: uppercase;
  font-size: 0.7em;
  font-weight: bolder;
  border-radius: 0 0 5px 5px;
  margin: 1rem;
  padding-top: 1em;
  position: absolute;
  bottom: 0;
  width: -webkit-fill-available;
`

const ProjectCard = ({ cover, project, url }) => {
  const { summary, tags, title } = project.frontmatter
  const { fixed } = cover
  return (
    <Link to={url}>
      <Card>
        <ImgCard fixed={fixed} alt={`Cover: ${title}`} />
        <TitleCard children={title} />
        <SummaryCard children={summary} />
        <TagCard children={tags} />
      </Card>
    </Link>
  )
}

export default ProjectCard
