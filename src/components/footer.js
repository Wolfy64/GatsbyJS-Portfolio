import React from 'react'
import Link from 'gatsby-link'
import mail from "../images/mail.svg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import twitter from "../images/twitter.svg";


const Footer = () => (
  <div className="container footer">
    <div className="wrapper">
      <p className="name">David De Wulf</p>
      <p>Developed by me with the ❤️of code</p>
      <ul>
        <li><a href="#"></a><img src={mail} alt="mail" className="icon"/></li>
        <li><a href="#"></a><img src={linkedin} alt="linkedin" className="icon"/></li>
        <li><a href="#"></a><img src={github} alt="github" className="icon"/></li>
        <li><a href="#"></a><img src={twitter} alt="twitter" className="icon"/></li>
      </ul>
      <hr/>
      <p>This site was made with the excellent Gatsby.js and is hosted on Netlify. You can look at its code here.</p>
      <p>Icons made by <a href="https://www.flaticon.com/authors/simpleicon" title="SimpleIcon">SimpleIcon</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></p>
      <hr/>
    </div>   
  </div>
)

export default Footer
