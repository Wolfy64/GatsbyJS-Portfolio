import React from "react";

const Terminal = () => (
  <div className="terminal">
  
    <div className="top-bar">
      <div className="circles">
        <div className="circle circle-red"></div>
        <div className="circle circle-yellow"></div>
        <div className="circle circle-green"></div>
      </div>
    </div>
    
    <div className="window-content">
      <code>Last login: Fri May 25 11:13:18 on ttys001 </code>
      <br/>
      <code>david:~ ls /Users/david/skills:</code>
      <br />
      <code className="skills">HTML5</code>
      <code className="skills">CSS3</code>
      <code className="skills">Javascript</code>
      <code className="skills">jQuery</code>
      <code className="skills">PHP</code>
      <code className="skills">OOP</code>
      <code className="skills">Symfony4</code>
      <code className="skills">MySQL</code>
      <code className="skills">ORM</code>
      <code className="skills">MVC</code>
      <code className="skills">React</code>
      <code className="skills">GatsbyJS</code>
      <code className="skills">Wordpress</code>
      <code className="skills">Bootstrap</code>
      <code className="skills">JAMStack</code>
      <code className="skills">Sass</code>
      <code className="skills">Git</code>
      <code className="skills">GitHub</code>
      <code className="skills">REST APIs</code>
      <code className="skills">Graphql</code>
      <code className="skills">CLI</code>
      <code className="skills">VScode</code>
      <code className="skills">Linux</code>
      <code className="skills">macOS</code>
    </div>

  </div>
)

export default ({ data }) => (
  <div className="container home">
    <div className="wrapper">
      <h1>Hi, I'm David <span className="nowrap">De Wulf</span></h1>
      <span className="title">Fullstack Web Developer</span>
      <Terminal/>
    </div>  
  </div>
)