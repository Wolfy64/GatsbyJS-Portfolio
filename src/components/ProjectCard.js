import React from 'react'
import { Link } from 'gatsby'
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
const ImgCard = styled.img`
  border-radius: 5px 5px 0px 0px;
  margin: 0;
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

const ProjectCard = ({ project }) => (
  <Link className="link" to={project.frontmatter.path}>
    <Card>
      <ImgCard src={project.frontmatter.cover} alt="Project" />
      <TitleCard children={project.frontmatter.title} />
      <SummaryCard children={project.frontmatter.summary} />
      <hr />
      <TagCard children={project.frontmatter.tag} />
    </Card>
  </Link>
)

export default ProjectCard
