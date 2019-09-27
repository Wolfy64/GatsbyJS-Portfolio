import React from 'react'
import styled from 'styled-components'

const SKILLS = [
  'ReactJS',
  'NodeJS',
  'GatsbyJS',
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',
  'GraphQL',
  'NoSQL',
  'MySQL',
  'API',
  'Git',
]

const Terminal = styled.div`
  width: 450px;
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
  background-color: hsl(230, 65%, 60%);
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
  background-color: white;
  position: absolute;
  opacity: ${props => props.opacity};
  left: ${props => props.margin};
`

const Window = styled.div`
  margin: 0px;
  padding: 10px;
  width: 100%;
  color: hsla(0, 0%, 0%, 0.7);
  border-radius: 0px 0px 5px 5px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0 1em;
`

const Code = styled.code`
  grid-column: ${props => (props.skills ? 'auto' : '1 / -1')};
  word-spacing: ${props => props.skills && '15px'};
  color: ${props => props.skills && 'hsl(230, 65%, 60%)'};
`

export default () => (
  <Terminal>
    <Topbar>
      <Circle margin="5px" opacity={0.6} />
      <Circle margin="20px" />
      <Circle margin="35px" />
    </Topbar>
    <Window>
      <Code children={`Last login: ${new Date().toString().slice(0, 15)}`} />
      {SKILLS.map((skill, index) => (
        <Code key={index} skills children={skill} />
      ))}
    </Window>
  </Terminal>
)
