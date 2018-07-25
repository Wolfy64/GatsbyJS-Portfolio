import React from 'react'

const skills = [
  'HTML5',
  'CSS3',
  'Javascript',
  'jQuery',
  'PHP',
  'OOP',
  'Symfony4',
  'MySQL',
  'ORM',
  'MVC',
  'React',
  'GatsbyJS',
  'Wordpress',
  'Bootstrap',
  'JAMStack',
  'Sass',
  'Git',
  'GitHub',
  'REST APIs',
  'Graphql',
  'CLI',
  'VScode',
  'Linux',
  'macOS',
]

const Terminal = () => (
  <div className="terminal">
    <div className="top-bar">
      <div className="circles">
        <div className="circle circle-red" />
        <div className="circle circle-yellow" />
        <div className="circle circle-green" />
      </div>
    </div>

    <div className="window-content">
      <code>
        Last login: {new Date().toString().split(' GMT')[0]} on ttys001{' '}
      </code>
      <br />
      <code>david:~ ls /Users/david/skills:</code>
      <br />
      {skills.map((skill, index) => (
        <code key={index} className="skills">
          {skill}
        </code>
      ))}
    </div>
  </div>
)

export default ({ data }) => (
  <div className="container home">
    <div className="wrapper">
      <h1>
        Hi, I'm David <span className="nowrap">De Wulf</span>
      </h1>
      <span className="title">Fullstack Web Developer</span>
      <Terminal />
    </div>
  </div>
)
