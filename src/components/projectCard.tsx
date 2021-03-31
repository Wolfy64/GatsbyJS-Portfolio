import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import styled from 'styled-components'

interface Props {
  cover: IGatsbyImageData
  summary: string
  tags: string
  title: string
  url: string
}

const Card = styled.section`
  display: grid;
  grid-template-rows: 160px 64px 160px 40px;
  background: white;
  position: relative;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  transition: ${({ theme }) => theme.transitions.standard};
  :hover {
    transform: scale(1.05);
    transition: ${({ theme }) => theme.transitions.standard};
    box-shadow: 0px 0px 16px 0px ${({ theme }) => theme.colors.secondary};
  }
`

const TitleCard = styled.h1`
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
  border-top: 1px solid #edf0fc;
`

const SummaryCard = styled.main`
  padding: 0 16px;
  font-size: 16px;
`

const TagCard = styled.footer`
  display: grid;
  border-top: 1px solid #edf0fc;
  text-transform: uppercase;
  font-size: 14px;
  margin: 0 8px;
  text-align: center;
  align-items: center;
`

const ProjectCard = ({ cover, summary, tags, title, url }: Props) => {
  return (
    <Link to={`/${url}`}>
      <Card>
        <GatsbyImage image={getImage(cover)!} alt={title} loading="eager" />
        <TitleCard children={title} />
        <SummaryCard children={summary} />
        <TagCard children={tags} />
      </Card>
    </Link>
  )
}

export default ProjectCard
