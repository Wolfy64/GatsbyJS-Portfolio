import * as React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
  [props: string]: unknown
}

const Li = styled.li`
    margin: 8px;
    :before {
      content: '\f120';
      font-size: 0.7em;
      padding-right: 4px;
      font-family: 'FontAwesome';
      color: ${({ theme }) => theme.colors.primary};
    }
`

const Alist = (props: Props) => <Li {...props} />

export default Alist
