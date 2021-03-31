import path from 'path';
import { GatsbyNode } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface Node {
  id: string
  slug: string
  body: string
  frontmatter: {
    web?: string
    title: string
    template?: 'project'
    tags?: string
    summary?: string
    path?: string
    git?: string
    date?: Date
    cover: IGatsbyImageData
  }
}

export interface DataGraphQL {
  allMdx: {
    nodes: Node[]
  }
}

export const createPages: GatsbyNode['createPages'] = async ({ actions, graphql }) => {
  const maxWidth = 904 // Max Layout minus padding
  const request = await graphql<DataGraphQL>(`
    {
      allMdx {
        nodes {
          id
          body
          slug
          frontmatter {
            web
            title
            template
            tags
            summary
            path
            git
            date
            cover {
              childImageSharp {
                gatsbyImageData(width: ${maxWidth}, height: 300)
              }
            }
          }
        }
      }
    }
  `)

  if (request.errors) throw new Error(request.errors)
  if (!request.data) throw new Error('No data from createPage')

  const mdxFiles = request.data.allMdx.nodes.filter(({ frontmatter }) => frontmatter.template)

  mdxFiles.forEach(({ id, body, slug, frontmatter }) => {
    actions.createPage({
      path: slug,
      component: path.resolve(`src/components/project.tsx`),
      context: {
        id,
        body,
        frontmatter
      }
    })
  })
}

