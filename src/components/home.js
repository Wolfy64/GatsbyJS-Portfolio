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
      <code>HTML5</code>
      <code>CSS3</code>
      <code>Javascript</code>
      <code>jQuery</code>
      <code>PHP</code>
      <code>OOP</code>
      <code>Symfony4</code>
      <code>MySQL</code>
      <code>ORM</code>
      <code>MVC</code>
      <code>React</code>
      <code>GatsbyJS</code>
      <code>Wordpress</code>
      <code>Bootstrap</code>
      <code>JamStack</code>
      <code>Sass</code>
      <code>Git</code>
      <code>GitHub</code>
      <code>REST APIs</code>
      <code>Graphql</code>
      <code>CLI</code>
      <code>VScode</code>
      <code>Linux</code>
      <code>macOS</code>
    </div>

  </div>
)

export default ({ data }) => (
  <div className="container home">
    <div className="wrapper">
      <h1>Hi, I'm David De Wulf</h1>
      <span className="title">Fullstack Web Developer</span>
      <Terminal/>
    </div>  
  </div>
)