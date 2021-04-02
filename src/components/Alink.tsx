import * as React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
  href: string
}

const A = styled.a`
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  box-shadow: inset 0 -2px 0 0 ${({ theme }) => theme.colors.secondary};
  padding: 0 4px 2px;
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.transitions.standard};
  :hover {
    border-radius: 4px 4px 0 0;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    transition: ${({ theme }) => theme.transitions.standard};
    &::after {
      content: ' \f08e';
      font-family: 'FontAwesome';
      font-size: 16px;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

const Alink = ({ children, href }: Props) => (
  <A
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    children={children}
  />
)

export default Alink
