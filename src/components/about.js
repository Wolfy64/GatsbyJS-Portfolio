import React from 'react'
import david from "../images/david.svg";

export default ({ data }) => (
  <div className="container about"
  style={{
    backgroundImage: `url(${david})`,
    backgroundPosition: `bottom left`,
    backgroundRepeat: `no-repeat`,
    // margin-left: 0px;
    /* margin-bottom: 0px; */
    backgroundSize: `41rem`
}}
  >
    <div className="wrapper">  
      <h1>{data.frontmatter.title}</h1>
      <div className="flex-container">
        <div className="profil-image">
          {/* <img src={david} alt="profil picture"/> */}
        </div>  
        <div className="profil-text">
          <article dangerouslySetInnerHTML={{ __html: data.html }} />
        </div>  
      </div>
    </div>
  </div>
)