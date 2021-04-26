import * as React from 'react'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import Layout from './layout'
import Alink from './alink'
import CodeBlock from './codeBlock'
import { Node } from '../gatsby/node'

interface Props {
  children: React.ReactNode
  pageContext: Omit<Node, 'slug'>
}

const Container = styled.div`
  img {
    display: inline;
    border-radius: ${({ theme }) => theme.radii};
  }

  .center {
    display: block;
    margin: 16px auto;
  }
`

const Memo = ({ pageContext: { body } }: Props) => {
  return (
    <Layout>
      <Container>
        <MDXProvider
          components={{
            a: Alink,
            pre: CodeBlock,
          }}
        >
          <MDXRenderer children={body} />
        </MDXProvider>
      </Container>
    </Layout>
  )
}

export default Memo
