import path from 'path';
// import { createFilePath } from 'gatsby-source-filesystem';
import { GatsbyNode } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface Node {
  id: string
  slug: string
  body: string
  frontmatter: {
    web?: string
    title: string
    templateKey?: 'project'
    tags?: string
    summary?: string
    path?: string
    git?: string
    date?: Date
    cover?: IGatsbyImageData
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
            templateKey
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

  const mdxFiles = request.data.allMdx.nodes.filter(({ frontmatter }) => frontmatter.templateKey)

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

// export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     actions.createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }
