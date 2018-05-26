import React from 'react'

export default ({ data }) => (
  <div className="container contact">
    <div className="wrapper">
      <h1>{data.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </div>
  </div>
)
