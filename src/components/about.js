import React from 'react'

export default ({ data }) => (
  <div className="container about">
    <div className="wrapper">  
      <h1>{data.frontmatter.title}</h1>
      <div className="flex-container">
        <div className="profil-image">
          <img src="https://source.unsplash.com/random/300x300" alt="profil picture"/>
        </div>  
        <div className="profil-text">
          <article dangerouslySetInnerHTML={{ __html: data.html }} />
        </div>  
      </div>
    </div>
  </div>
)