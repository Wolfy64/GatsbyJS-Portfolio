import React from 'react'
import Link from 'gatsby-link'
import mailIcon from '../img/mail.svg'
import linkedinIcon from '../img/linkedin.svg'
import githubIcon from '../img/github.svg'
import twitterIcon from '../img/twitter.svg'

const mail = 'mailto:contact@dewulfdavid.com'
const linkedin = 'https://www.linkedin.com/in/dewulfdavid/'
const github = 'https://github.com/Wolfy64'
const twitter = 'https://twitter.com/TweetWolf64'
const sourceCode = 'https://github.com/Wolfy64/GatsbyJS-Portfolio'

export default () => (
  <div className="container footer">
    <div className="wrapper">
      <p className="name">David De Wulf</p>
      <p>Developed by me with the ❤️of code</p>
      <ul>
        <li>
          <a href={mail}>
            <img src={mailIcon} alt="mail" className="icon grow" />
          </a>
        </li>
        <li>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="linkedin" className="icon grow" />
          </a>
        </li>
        <li>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="github" className="icon grow" />
          </a>
        </li>
        <li>
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="twitter" className="icon grow" />
          </a>
        </li>
      </ul>
      <hr/>
      <p>
        This site was made with the excellent Gatsby.js and is hosted on Netlify. 
        You can look at its code
        <a
          href={sourceCode}
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer">
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
          CC 3.0 BY
        </a>
      </p>
      <hr/>
    </div>   
  </div>
)
