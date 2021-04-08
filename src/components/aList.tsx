import * as React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
  [props: string]: unknown
}

const Li = styled.li`
  padding-left: 0.5em;
  ::marker {
    content: '\f120';
    font-size: 0.7em;
    font-family: 'FontAwesome';
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Alist = (props: Props) => <Li {...props} />

export default Alist
