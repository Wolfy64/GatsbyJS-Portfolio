import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
  display: inline-block;
  margin: 0 1em;
  border: none;
  border-radius: 3px;
  padding: 10px;
  outline: none;
  background-color: hsl(230, 65%, 60%);
  box-shadow: 0 6px 34px 0px hsl(230, 80%, 90%);
  color: white;
  font-weight: 400;
  transition: all ease-out 300ms;
  :hover {
    transform: scale(1.05);
    transition: all ease-out 300ms;
    box-shadow: 0 6px 34px 0px hsl(230, 65%, 60%);
  }
`
export default props => (
  <Button href={props.href} target="_blank" rel="noopener noreferrer">
    {props.git ? 'Check the code' : props.web ? 'Take a look' : props.children}
  </Button>
)
