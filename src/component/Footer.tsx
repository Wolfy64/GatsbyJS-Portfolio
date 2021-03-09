import * as React from 'react'
import styled from 'styled-components'

import SocialNetwork from './SocialNetwork'

const Wrapper = styled.footer`
  height: 92px;
  display: grid;
  background-color: ${({ theme }) => theme.colors.secondary};
`

const Footer = () => <Wrapper children={<SocialNetwork />} />

 export default Footer;