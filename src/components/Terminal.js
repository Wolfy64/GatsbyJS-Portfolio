import React from 'react'
import styled from 'styled-components'

import Emoji from './UI/Emoji'

const Terminal = styled.div`
  max-width: 600px;
  margin: auto;
  margin-top: 3rem;
  text-align: initial;
`
const Topbar = styled.div`
  border-radius: 5px 5px 0 0;
  background: #ebebeb;
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: center;
  position: relative;
`
const Circle = styled.div`
  height: 10px;
  width: 10px;
  display: inline-block;
  border-radius: 50%;
  margin-left: 5px;
  background-color: ${props => props.color};
  position: absolute;
  left: ${props => props.margin};
`
const Window = styled.div`
  margin: 0px;
  padding: 10px;
  width: 100%;
  min-height: 300px;
  display: inline-block;
  background: ${props => props.bgColor};
  border-radius: 0 0 2px 2px;
  color: ${props => props.textColor};
`
const Code = styled.code`
  font-family: 'Raleway', 'sans-serif';
  word-spacing: ${props => (props.skills ? '15px' : null)};
  color: ${props => props.skills};
`

const SKILLS = [
  'JavaScript-ReactJS',
  'HTML5-CSS3',
  'REST-APIs',
  'GraphQL',
  'PHP-Symfony4',
  'MySQL-NoSQL',
  'Git-GitHub',
]

export default () => (
  <div className="container">
    <Terminal>
      <Topbar>
        <Circle color="#fe5f55;" margin="5px" />
        <Circle color="#ffbd2e" margin="20px" />
        <Circle color="#29ca3f" margin="35px" />
        <Emoji symbol="👨🏻‍💻 David - Skills" />
      </Topbar>
      <Window bgColor="#002c36" textColor="#f2f2f2">
        <Code>
          Last login: {new Date().toString().slice(0, 15)}
          <br />
        </Code>

        <Code skills="#79b6f2">
          {SKILLS.reduce((output, skill) => (output += `${skill}\n`), '')}
        </Code>
      </Window>
    </Terminal>
  </div>
)
