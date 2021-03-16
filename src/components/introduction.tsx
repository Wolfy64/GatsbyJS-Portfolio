import * as React from 'react'
import styled from 'styled-components'
import { SiteMetadata } from '../gatsby/config'
interface Props {
  name: SiteMetadata['name']
  jobTitle: SiteMetadata['jobTitle']
}

const Header = styled.header`
  font-size: 24px;

  p {
    text-align: center;
    font-weight: 100;
    font-size: inherit;
    line-height: 32px;
  }

  strong {
    white-space: nowrap;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Introduction = ({ name, jobTitle }: Props) => (
  <Header>
    <p>
      Hi, I'm <strong>{name}</strong>
    </p>
    <p>{jobTitle}</p>
  </Header>
)

export default Introduction
