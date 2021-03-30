import * as React from 'react'
import styled from 'styled-components'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import Layout from './layout'
import Alink from './aLink'
import Alist from './aList'
import MyButton from './myButton'
import { Node } from '../gatsby/node'

interface Props {
  children: React.ReactNode
  pageContext: Omit<Node, 'slug'>
}

const Container = styled.div`
  .gatsby-image-wrapper {
    margin-bottom: 16px;
    border-radius: ${({ theme }) => theme.radii};
  }

  .gatsby-resp-image-wrapper {
    margin: 8px;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.radii};
    box-shadow: 0px 0px 16px 0px ${({ theme }) => theme.colors.secondary};
  }

  .buttons {
    text-align: center;
    a:not(last) {
      margin-right: 8px;
    }
  }
`

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
`

const Project = ({ pageContext }: Props) => {
  const { frontmatter, body } = pageContext
  const { title, cover, git = '', web = '' } = frontmatter
  const coverImage = cover ? (
    <GatsbyImage image={getImage(cover) as any} alt={title} loading="eager" />
  ) : (
    <StaticImage
      src="../images/projects/default.jpg"
      alt="Project cover"
      height={300}
    />
  )

  return (
    <Layout>
      <Container>
        {coverImage}
        <H1>{title}</H1>
        <MDXProvider components={{ a: Alink, li: Alist }}>
          <MDXRenderer children={body} />
        </MDXProvider>
        <div className='buttons'>
          <MyButton type="git" href={git} />
          <MyButton type="web" href={web} />
        </div>
      </Container>
    </Layout>
  )
}

export default Project
