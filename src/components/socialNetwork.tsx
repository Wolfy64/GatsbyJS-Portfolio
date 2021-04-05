import * as React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import { SiteMetadata } from '../gatsby/config'
import SvgMail from '../images/svgMail'
import SvgLinkedIn from '../images/svgLinkedIn'
import SvgGithub from '../images/svgGithub'
import SvgTwitter from '../images/svgTwitter'

type UrlProps = {
  site: {
    siteMetadata: SiteMetadata
  }
}

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: unset;
`

const Li = styled.li`
  list-style: none;
  :not(:last-child) {
    margin-right: 8px;
  }

  svg {
    width: 48px;
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    fill: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.radii};
    transition: ${({ theme }) => theme.transitions.standard};
    :hover {
      box-shadow: 0px 7px 6px 0px hsla(0, 0%, 0%, 0.2);
      transform: translate(0, -3px);
    }
  }
`

const SocialNetwork = () => {
  const {
    site: {
      siteMetadata: { mail, linkedin, github, twitter },
    },
  } = useStaticQuery<UrlProps>(query)

  return (
    <Ul>
      <Li>
        <a href={mail} children={<SvgMail />} />
      </Li>
      <Li>
        <a href={linkedin} target="_blank" children={<SvgLinkedIn />} />
      </Li>
      <Li>
        <a href={github} target="_blank" children={<SvgGithub />} />
      </Li>
      <Li>
        <a href={twitter} target="_blank" children={<SvgTwitter />} />
      </Li>
    </Ul>
  )
}

export default SocialNetwork

const query = graphql`
  query SocialNetwork {
    site {
      siteMetadata {
        mail
        linkedin
        github
        twitter
      }
    }
  }
`
