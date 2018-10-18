import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Card = styled.div`
  display: grid;
  background: white;
  border-radius: 5px;
  max-width: 270px;
  box-shadow: 0 6px 34px rgba(83, 40, 255, 0.15);
  transition: linear 300ms;

  h1,
  p {
    margin: 0;
  }

  header,
  article,
  footer {
    margin: 1em;
  }

  a {
  }
  &&:hover {
    transform: scale(1.1);
    transition: linear 300ms;
    box-shadow: 0 6px 34px rgba(83, 40, 255, 0.41);
  }
  .cover {
    border-radius: 5px 5px 0px 0px;
    margin: 0;
  }
  .title {
    font-size: 1em;
  }
  .summary {
    font-size: 0.8em;
  }
  .tag {
    text-transform: uppercase;
    font-size: 0.7em;
    font-weight: bolder;
  }
`

const PostCard = ({ project }) => (
  <Card>
    <Link className="link" to={project.frontmatter.path}>
      <section>
        <img className="cover" src={project.frontmatter.cover} alt="Project" />
        <header>
          <h1 className="title">{project.frontmatter.title}</h1>
        </header>
        <article>
          <p className="summary">{project.frontmatter.summary}</p>
        </article>
        <hr />
        <footer>
          <p className="tag">{project.frontmatter.tag}</p>
        </footer>
      </section>
    </Link>
  </Card>
)

export default PostCard
