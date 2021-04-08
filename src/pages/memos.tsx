import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Alist from '../components/aList'
import Alink from '../components/aLink'

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

const Container = styled.div`
  max-width: 576px;
  margin: auto;
  display: grid;
  gap: 16px;

  /* a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    padding: 4px 8px;

    :hover {
      color: #ffffff;
      font-weight: ${({ theme }) => theme.fontWeights.heading};
      background: ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.radii};
    }
  } */
`

const Li = styled(Alist)`
  margin-left: 1em;
`

const Section = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radii};
`

const InternalLink = styled(Link)`
  text-decoration: none;
  padding: 0 4px 2px;
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.transitions.standard};
  :hover {
    border-radius: 4px;
    color: white;
    background: ${({ theme }) => theme.colors.primary};
    transition: ${({ theme }) => theme.transitions.standard};
  }
`

const H2 = styled.h2`
  list-style-type: none;
  display: inline-block;
  padding: 8px;
  background: white;
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  border-radius: ${({ theme }) => theme.radii} 0 ${({ theme }) => theme.radii} 0;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
`

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
        <p>
          This is my{' '}
          <Alink href="https://joelhooks.com/digital-garden">
            digital garden
          </Alink>{' '}
          a bunch of notes sorted by tag.
        </p>
        {categories.map((category, index) => {
          if (category === 'PAGE_TEST') return
          return (
            <Section key={index}>
              <H2>{category}</H2>
              <ul>
                {nodes.map(({ id, slug, frontmatter }) => {
                  if (category !== frontmatter.category) return
                  return (
                    <Li key={id}>
                      <InternalLink to={`/${slug}`}>
                        {frontmatter.title}
                      </InternalLink>
                    </Li>
                  )
                })}
              </ul>
            </Section>
          )
        })}
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
