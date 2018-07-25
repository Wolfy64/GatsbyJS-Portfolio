import React from 'react'
import background from '../img/about.jpg'

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

export default ({ data }) => (
  <div>
    <div
      className="container about"
      style={{
        backgroundColor: `#fafafa`,
        backgroundImage: `url( ${background} )`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `bottom`,
      }}
    >
      <div className="wrapper">
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <article
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </div>
  </div>
)

export const query = graphql`
  query HomeQuery {
    markdownRemark(frontmatter: { type: { eq: "about" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
