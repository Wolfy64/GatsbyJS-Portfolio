import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'

interface Memo {
  id: string
  frontmatter: {
    title: string
    category: string
  }
  slug: string
}
interface UrlProps {
  allMdx: {
    nodes: Memo[]
  }
}

const Container = styled.div``

const MemoPage = () => {
  const {
    allMdx: { nodes },
  } = useStaticQuery<UrlProps>(query)

  const filterCategories = new Set(
    nodes.map(({ frontmatter: { category } }) => category)
  )
  const categories = Array.from(filterCategories).sort()

  return (
    <Layout>
      <Container>
        {categories.map((category, index) => (
          <section key={index}>
            <h2>{category}</h2>
            <ul>
              {nodes.map(({ id, slug, frontmatter }) => {
                if (category !== frontmatter.category) return
                return (
                  <li key={id}>
                    <Link to={`/${slug}`}>{frontmatter.title}</Link>
                  </li>
                )
              })}
            </ul>
          </section>
        ))}
      </Container>
    </Layout>
  )
}

export default MemoPage

const query = graphql`
  {
    allMdx(filter: { frontmatter: { template: { eq: "memo" } } }) {
      nodes {
        id
        slug
        frontmatter {
          title
          category
        }
      }
    }
  }
`
