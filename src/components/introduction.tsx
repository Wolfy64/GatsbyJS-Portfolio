import * as React from 'react'
import styled from 'styled-components'
import { SiteMetadata } from '../gatsby/config'
interface Props {
  name: SiteMetadata['name']
  jobTitle: SiteMetadata['jobTitle']
}

const Name = styled.p`
  text-align: center;
  font-weight: 300;
  font-size: 24px;

  strong {
    white-space: nowrap;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Introduction = ({ name, jobTitle }: Props) => (
  <header>
    <Name >
      Hi, I'm <strong>{name}</strong>
    </Name>
    <p children={jobTitle} />
  </header>
)

export default Introduction
