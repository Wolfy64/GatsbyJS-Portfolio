import * as React from 'react'
import styled from 'styled-components'

interface Props {
  children?: React.ReactNode
  href: string
  type: 'git' | 'web' | 'download' | 'none'
}

const Button = styled.a`
  display: inline-block;
  padding: 8px;
  margin: 4px;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.radii};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  transition: ${({ theme }) => theme.transitions.standard};
  :hover {
    box-shadow: 0px 7px 6px 0px hsla(0, 0%, 0%, 0.2);
    transform: translate(0, -3px);
    transition: ${({ theme }) => theme.transitions.standard};
  }

  .fa {
    padding-left: 8px;
  }
`
const MyButton = ({ href, type = 'none', children }: Props) => {
  if(!href) return null;
  const githubIcon = <i className="fa fa-github fa-sm" aria-hidden="true" />
  const webIcon = <i className="fa fa-external-link fa-sm" aria-hidden="true" />
  const downloadIcon = (
    <i className="fa fa-file-pdf-o fa-sm" aria-hidden="true" />
  )
  const button = {
    git: { text: 'Check the code', icon: githubIcon },
    web: { text: 'Take a look', icon: webIcon },
    download: { text: 'Download it', icon: downloadIcon },
    none: { text: children, icon: null },
  }

  return (
    <Button className='myButton' href={href} target="_blank" rel="noopener noreferrer">
      {button[type].text}
      {button[type].icon}
    </Button>
  )
}

export default MyButton
