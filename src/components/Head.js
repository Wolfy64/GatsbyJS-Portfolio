import React from 'react'
import { Helmet } from 'react-helmet'

export default () => (
  <Helmet>
    <meta charSet="utf-8" />
    <html lang="en" />
    <meta
      name="description"
      content="David De Wulf Porfolio Javascript Web Developer"
    />
    <meta name="author" content="David De Wulf" />
    <meta name="publisher" content="David De Wulf" />
    <meta name="creator" content="David De Wulf" />
    <meta property="og:title" content="David De Wulf Portfolio" />
    <meta
      property="og:description"
      content="David De Wulf Porfolio Javascript Web Developer"
    />
    <meta property="og:image" content="%PUBLIC_URL%/images/logo.png" />
    <meta property="og:url" content="https://dewulfdavid.com" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="David De Wulf Portfolio" />
    <meta name="twitter:title" content="David De Wulf Portfolio" />
    <meta
      name="twitter:description"
      content="David De Wulf Porfolio Javascript Web Developer"
    />
    <meta name="twitter:image" content="%PUBLIC_URL%/images/logo.png" />
    <meta name="twitter:image:alt" content="logo" />
    <meta name="twitter:url" content="https://dewulfdavid.com" />
    <meta name="twitter:card" content="summary_large_image" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <title>David De Wulf</title>
  </Helmet>
)
