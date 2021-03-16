import * as React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import BusinessCard from '../components/businessCard'
import SocialNetwork from '../components/socialNetwork'
import Introduction from '../components/introduction'
import Terminal from '../components/terminal'
import About from '../components/about'
import { SiteMetadata } from '../gatsby/config'

type UrlProps = {
  site: {
    siteMetadata: SiteMetadata
  }
}

const Container = styled.div`
  display: grid;
  grid: auto / repeat(auto-fit, minmax(304px, 1fr));
  justify-items: center;
  align-items: center;
  gap: 16px;
`

const IndexPage = () => {
  const {
    site: {
      siteMetadata: { name, jobTitle, prompt, skills },
    },
  } = useStaticQuery<UrlProps>(query)

  return (
    <Layout>
      <Container>
        <aside>
          <BusinessCard>
            <Introduction name={name} jobTitle={jobTitle} />
            <SocialNetwork />
          </BusinessCard>
          <Terminal prompt={prompt} skills={skills} />
        </aside>
        <About />
      </Container>
    </Layout>
  )
}

export default IndexPage

const query = graphql`
  query indexPage {
    site {
      siteMetadata {
        name
        jobTitle
        prompt
        skills
      }
    }
  }
`
