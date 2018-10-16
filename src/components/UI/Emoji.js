import React from 'react'

export default props => (
  <span
    className="emoji"
    role="img"
    arial-label={props.label ? props.label : 'emoji'}
    arial-hidden={props.label ? 'true' : 'true'}
  >
    {props.symbol}
  </span>
)
