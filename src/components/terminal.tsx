import React from 'react'
import styled from 'styled-components'

import { SiteMetadata } from '../gatsby/config'

interface Props {
  skills: SiteMetadata['skills']
  prompt?: string
}

const Terminal = styled.div`
  width: 288px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`

const Topbar = styled.div`
  display: flex;
  height: 32px;
  padding: 4px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`

const Circle = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin-left: 4px;
  background-color: white;
  opacity: ${({ opacity }: { opacity?: number }) => opacity};
`

const Window = styled.div`
  padding: 8px;
  display: grid;
  grid: auto / 108px 66px 80px;
  gap: 8px;
`

const Code = styled.code`
  font-family: inherit;
  white-space: pre-line;
  background: unset;
  grid-column: ${({ oneLine }: { oneLine?: boolean }) => oneLine && '1/-1'};
  color: ${({ oneLine, theme }) => oneLine && theme.colors.text};
  font-weight: ${({ oneLine, theme }) => oneLine && theme.fontWeights.body};
`

export default ({ skills, prompt }: Props) => {
  const listOfSkills = skills.map((skill, index) => (
    <Code key={index} children={skill} />
  ))

  return (
    <Terminal>
      <Topbar>
        <Circle opacity={0.6} />
        <Circle />
        <Circle />
      </Topbar>
      <Window>
        <Code oneLine children={prompt} />
        {listOfSkills}
      </Window>
    </Terminal>
  )
}
