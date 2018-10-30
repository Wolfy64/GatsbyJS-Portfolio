import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
  display: inline-block;
  margin: 1em;
  padding: 10px;
  outline: none;
  border: 1px solid hsl(230, 65%, 60%);
  border-radius: 3px;
  color: hsl(230, 65%, 60%);
  font-weight: 400;
  transition: all ease-out 300ms;
  :hover {
    box-shadow: 0px 7px 6px 0px hsla(0, 0%, 0%, 0.2);
    transform: translate(0, -3px);
    transition: all ease-out 300ms;
  }

  .fa {
    padding-left: 0.5em;
  }
`
export default props => (
  <Button href={props.href} target="_blank" rel="noopener noreferrer">
    {props.git
      ? 'Check the code'
      : props.web
        ? 'Take a look'
        : props.download
          ? 'Download it'
          : props.children}

    {props.git ? (
      <i className="fa fa-github fa-lg" aria-hidden="true" />
    ) : props.web ? (
      <i className="fa fa-external-link fa-lg" aria-hidden="true" />
    ) : props.download ? (
      <i className="fa fa-file-pdf-o fa-lg" aria-hidden="true" />
    ) : null}
  </Button>
)
