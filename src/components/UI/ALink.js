import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  color: #333;
  text-decoration: none;
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid rgba(11, 38, 228, 0.12157);
  box-shadow: inset 0 -2px 0 0 rgba(11, 38, 228, 0.12157);
  padding: 0.2rem;
  :hover {
    color: #fff;
    border-radius: 3px;
    background: rgba(11, 38, 228, 0.439216);
  }
`
export default props => (
  <Link href={props.href} target="_blank" rel="noopener noreferrer">
    {props.name}
  </Link>
)
