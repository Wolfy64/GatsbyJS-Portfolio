import React from 'react'
import styled from 'styled-components'

import mailIcon from '../images/mail.svg'
import linkedinIcon from '../images/linkedin.svg'
import githubIcon from '../images/github.svg'
import twitterIcon from '../images/twitter.svg'
import Emoji from './UI/Emoji'

const mail = 'mailto:contact.dewulf@gmail.com'
const linkedin = 'https://www.linkedin.com/in/dewulfdavid/'
const github = 'https://github.com/Wolfy64'
const twitter = 'https://twitter.com/TweetWolf64'
const sourceCode = 'https://github.com/Wolfy64/GatsbyJS-Portfolio'

const Footer = styled.footer.attrs({
  className: 'container',
})`
  padding: 10px 0;

  ul {
    display: flex;
    margin-bottom: 0px;
  }

  li {
    list-style: none;
    padding: 9px 12px 9px 12px;
  }

  a {
    color: #555;
  }

  p {
    color: $grey;
    line-height: unset;
    margin-left: 1rem;
  }
`

const Icon = styled.img`
  width: 50px;
  height: auto;
  border-radius: 0px;
  box-shadow: none;
  border: 1px solid;
  padding: 10px;
  &&:hover {
    box-shadow: 0px 7px 6px 0px #cec8c8;
    transform: translate(0, -3px);
    transition: all 0.3s ease;
  }
`

export default () => (
  <Footer>
    <p>David De Wulf</p>
    <p>
      Developed by me with the <Emoji symbol="❤️" /> of code
    </p>
    <ul>
      <li>
        <a href={mail}>
          <Icon src={mailIcon} alt="mail" />
        </a>
      </li>
      <li>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <Icon src={linkedinIcon} alt="linkedin" />
        </a>
      </li>
      <li>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <Icon src={githubIcon} alt="github" />
        </a>
      </li>
      <li>
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <Icon src={twitterIcon} alt="twitter" />
        </a>
      </li>
    </ul>
    <hr />
    <p>
      This site was made with the excellent{' '}
      <a
        href="https://www.gatsbyjs.com/"
        title="Gatsby.js"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby.js
      </a>{' '}
      and is hosted on{' '}
      <a
        href="https://www.netlify.com/"
        title="Netlify"
        target="_blank"
        rel="noopener noreferrer"
      >
        Netlify
      </a>{' '}
      Netlify. You can look at its code{' '}
      <a
        href={sourceCode}
        title="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        here.
      </a>
      <br />
      Icons made by{' '}
      <a
        href="https://www.flaticon.com/authors/simpleicon"
        title="SimpleIcon"
        target="_blank"
        rel="noopener noreferrer"
      >
        SimpleIcon{' '}
      </a>
      from{' '}
      <a
        href="https://www.flaticon.com/"
        title="Flaticon"
        target="_blank"
        rel="noopener noreferrer"
      >
        www.flaticon.com{' '}
      </a>
      is licensed by{' '}
      <a
        href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0"
        target="_blank"
        rel="noopener noreferrer"
      >
        CC BY 3.0
      </a>
    </p>
    <hr />
  </Footer>
)
