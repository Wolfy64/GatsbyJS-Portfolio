import * as React from 'react'
import { Link } from 'gatsby'
import styled, { StyledComponent, DefaultTheme } from 'styled-components'

interface Props {
  children: React.ReactNode
  to: string
  classFA?: string
  [props: string]: unknown
}

interface externalLink extends Omit<Props, 'to'> {
  href: string
}

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 8px;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.radii};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  transition: ${({ theme }) => theme.transitions.standard};
  background: ${({ theme }) => theme.colors.background};
  :hover {
    box-shadow: 0px 7px 6px 0px hsla(0, 0%, 0%, 0.2);
    transform: translate(0, -3px);
  }
` as StyledComponent<typeof Link | 'a', DefaultTheme>

const FontAwesome = styled.i`
  padding-left: 8px;
`

const LinkAsButton = ({ to = '', children, classFA = '', ...props }: Props) => {
  const isAnExternalLink = to.startsWith('http')
  if (!to || !children) return null

  const externalLink: externalLink = {
    as: 'a',
    target: '_blank',
    rel: 'noopener noreferrer',
    href: to,
    ...props,
  }

  if (isAnExternalLink) delete externalLink.to
  const properProps = isAnExternalLink ? externalLink : { to, ...props }

  return (
    <StyledLink {...properProps}>
      {children}
      {classFA ? <FontAwesome className={classFA} aria-hidden="true" /> : null}
    </StyledLink>
  )
}

export default LinkAsButton
