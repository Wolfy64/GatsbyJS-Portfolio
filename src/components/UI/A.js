import React from 'react'
import styled from 'styled-components'

const A = styled.a`
  transition: all ease-out 300ms;
  border-bottom: 1px solid hsla(230, 90%, 50%, 0.1);
  box-shadow: inset 0 -2px 0 0 hsla(230, 90%, 50%, 0.1);
  padding: 0 0.2rem;
  white-space: nowrap;
  :hover {
    border-radius: 3px;
    background: hsl(230, 100%, 97%);
    transition: all ease-out 300ms;
  }
`
export default props => (
  <A href={props.href} target="_blank" rel="noopener noreferrer">
    {props.name || props.children}
  </A>
)
