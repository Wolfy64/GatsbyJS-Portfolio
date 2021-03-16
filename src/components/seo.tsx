import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import { SiteMetadata } from '../gatsby/config'

type UrlProps = {
  site: {
    siteMetadata: SiteMetadata
  }
}

const SEO = () => {
  const {
    site: {
      siteMetadata: {
        name,
        description,
        url,
        type,
        image,
        themeColor,
        colorScheme,
        lang,
        twitterUsername
      },
    },
  } = useStaticQuery<UrlProps>(query)

  return (
    <Helmet>
      <html lang={lang} />
      <title>{name}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="author" content={name} />
      <meta name="publisher" content={name} />
      <meta name="creator" content={name} />
      <meta name="theme-color" content={themeColor} />
      <meta name="color-scheme" content={colorScheme} />

      {/* Meta Open Graph */}
      <meta property="og:title" content={name} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={name} />

      {/* Meta Twitter */}
      <meta name="twitter:title" content={name} />
      <meta name="twitter:creater" content={name} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={name} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:card" content="summary_large_image" />

      <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    </Helmet>
  )
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        name
        description
        url
        type
        image
      }
    }
  }
`
