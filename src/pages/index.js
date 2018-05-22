import React from "react";
import Link from "gatsby-link";

// import SiteTemplate from '../templates/siteTemplate'

const Home = () => (
  <div className="home">
    I am David De Wulf a fullstack web developer
  </div>
)

export default ({ data }) => {
  return (
    <div>
      <Home></Home>
    </div>
  )
}