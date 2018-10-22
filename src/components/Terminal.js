import React from 'react'
import styled from 'styled-components'

const SKILLS = [
  'JavaScript-ReactJS',
  'HTML5-CSS3',
  'REST-APIs',
  'GraphQL',
  'PHP-Symfony4',
  'MySQL-NoSQL',
  'Git-GitHub',
]

const Terminal = styled.div`
  max-width: 500px;
  height: 300px;
  margin: 2em 0;
  box-shadow: 0 6px 34px 0px hsl(230, 80%, 90%);
  border-radius: 5px;
  background: white;
  @media (max-width: 850px) {
    margin: 2em auto;
  }
`

const Topbar = styled.div`
  background-color: hsl(230, 80%, 70%);
  border-radius: 5px 5px 0px 0px;
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
  background-color: ${props => props.color || 'white'};
  position: absolute;
  left: ${props => props.margin};
`

const Window = styled.div`
  margin: 0px;
  padding: 10px;
  width: 100%;
  display: inline-block;
  color: hsla(0, 0%, 0%, 0.7);
  border-radius: 0px 0px 5px 5px;
`

const Code = styled.code`
  display: block;
  font-family: 'Lato';
  word-spacing: ${props => (props.skills ? '15px' : null)};
  color: ${props => props.skills};
`

export default () => (
  <Terminal>
    <Topbar>
      <Circle margin="5px" color="hsl(230, 80%, 90%)" />
      <Circle margin="20px" />
      <Circle margin="35px" />
    </Topbar>
    <Window>
      <Code children={`Last login: ${new Date().toString().slice(0, 15)}`} />
      <Code skills="hsl(230, 80%, 70%)">
        {SKILLS.reduce((output, skill) => (output += `${skill}\n`), '')}
      </Code>
    </Window>
  </Terminal>
)
