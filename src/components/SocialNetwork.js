import React from 'react'
import styled from 'styled-components'

import mailIcon from '../images/mail.svg'
import linkedinIcon from '../images/linkedin.svg'
import githubIcon from '../images/github.svg'
import twitterIcon from '../images/twitter.svg'

const mail = 'mailto:contact.dewulf@gmail.com'
const linkedin = 'https://www.linkedin.com/in/dewulfdavid/'
const github = 'https://github.com/Wolfy64'
const twitter = 'https://twitter.com/TweetWolf64'

const SocialNetwork = styled.aside`
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0;
  }

  li {
    margin: 0;
    padding: 0.5em;
  }

  img {
    width: 50px;
    height: auto;
    border: 1px solid hsla(0, 0%, 0%, 0.73);
    border-radius: 3px;
    padding: 10px;
    transition: all ease-out 300ms;
    :hover {
      box-shadow: 0px 7px 6px 0px hsla(0, 0%, 0%, 0.2);
      transform: translate(0, -3px);
      transition: all ease-out 300ms;
    }
  }
`

export default () => (
  <SocialNetwork>
    <ul>
      <li>
        <a href={mail}>
          <img src={mailIcon} alt="mail" />
        </a>
      </li>
      <li>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="linkedin" />
        </a>
      </li>
      <li>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="github" />
        </a>
      </li>
      <li>
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="github" />
        </a>
      </li>
    </ul>
  </SocialNetwork>
)
