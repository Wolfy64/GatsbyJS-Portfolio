import * as React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import Layout from './layout'
import Alink from './aLink'
import Alist from './aList'
import LinkAsButton from './linkAsButton'
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
`

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
`

const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const MyLinkAsButton = styled(LinkAsButton)`
  margin: 8px;
`

const Project = ({ pageContext }: Props) => {
  const { frontmatter, body } = pageContext
  const { title, cover, git = '', web = '' } = frontmatter

  return (
    <Layout>
      <Container>
        <GatsbyImage image={getImage(cover)!} alt={title} loading="eager" />
        <H1>{title}</H1>
        <MDXProvider components={{ a: Alink, li: Alist }}>
          <MDXRenderer children={body} />
        </MDXProvider>
        <Footer>
          <MyLinkAsButton
            to={git}
            classFA="fa fa-github fa-sm"
            children="Check the code"
          />

          <MyLinkAsButton
            to={web}
            classFA="fa fa-external-link fa-sm"
            children="Take a look"
          />
        </Footer>
      </Container>
    </Layout>
  )
}

export default Project
