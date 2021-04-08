import * as React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'

import Layout from '../components/layout'
import Alist from '../components/aList'

dayjs.extend(relativeTime)
dayjs.extend(updateLocale)
dayjs.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: '1 year',
    yy: '%d years',
  },
})

const SKILLS = [
  {
    key: 'Languages',
    value: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'PHP'],
  },
  {
    key: 'Frameworks',
    value: ['React', 'Redux', 'Node', 'Express', 'Gatsby', 'Next', 'Apollo'],
  },
  {
    key: 'UI Design',
    value: ['Ant Design', 'Boostrap', 'Styled Component', 'Story Book'],
  },
  {
    key: 'Database',
    value: ['MySQL', 'NoSQL'],
  },
  {
    key: 'Protocol',
    value: ['REST', 'GraphQL', 'Web Sockets'],
  },
  {
    key: 'Tests',
    value: ['Jest', 'React Testing Library', 'Cypress'],
  },
  {
    key: 'VCS',
    value: ['GitHub', 'GitLab', 'BitBucket'],
  },
  {
    key: 'CI-CD',
    value: ['CircleCI', 'GitHub', 'Actions'],
  },
]

const Article = styled.article`
  overflow: hidden;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii};
  :not(:last-child) {
    margin-bottom: 16px;
  }
`

const Container = styled.div`
  display: grid;
  padding: 8px;
`

const H2 = styled.h2`
  font-size: 20px;
  font-weight: 400;
  padding-left: 8px;
  line-height: 28px;
  width: 286px;
  margin: unset;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
`

const H3 = styled.h3`
  display: unset;
  font-size: 16px;
  padding-right: 8px;
  margin: unset;
  color: ${({ theme }) => theme.colors.primary};
`

const Time = styled.time`
  display: inline-block;
`

const Ul = styled.ul`
  margin: unset;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 8px;
  line-height: 32px;

  :nth-child(odd) {
    background: ${({ theme }) => theme.colors.secondary};
  }
`

const Li = styled.li`
  list-style-type: none;

  :not(:last-child) {
    padding-right: 8px;
  }
`

const Section = styled.section`
  margin-bottom: 16px;
  p {
    margin: unset;
  }
`

const ResumePage = () => {
  const workExperience = dayjs('2020-06-01').toNow(true)
  const displaySkills = SKILLS.map(({ key, value }) => {
    const listOfSkills = value.map((skill) => <Li key={skill}>{skill}</Li>)
    return (
      <Ul key={key} className="category">
        <H3>{key}:</H3>
        {listOfSkills}
      </Ul>
    )
  })

  return (
    <Layout>
      <Article>
        <H2>Article &amp; Expertise</H2>
        {displaySkills}
      </Article>

      <Article>
        <H2>Work Experiences</H2>

        <Container>
          <Section>
            <H3>PayPal</H3>
            <span>
              as Software Engineer -{' '}
              <Time>Jun 2020 - Present • {workExperience} </Time>
            </span>
          </Section>

          <Section>
            <H3>Hwy Haul Startup</H3>
            <span>
              as React Engineer - <Time>Apr 2019 - May 2020 • 1 year</Time>
            </span>
            <br />
            <mark>
              Building software to enable shippers and drivers to connect
              seamlessly in today’s $800 billion trucking industry.
            </mark>

            <p>
              We use React - Redux - Sass - Ant Design - Google API and Twilio
              chat-sms.
            </p>

            <ul>
              <Alist>
                Maintain and develop new features on three web portals: OPS,
                Shipper, and Carrier portal.
              </Alist>
              <Alist>
                Improved codebase by resolving complex bugs and refactoring old
                components resulting in improved web performance, user
                happiness, and more maintainable codebase.
              </Alist>
              <Alist>
                Implemented chat-sms using Twilio SDK, which is currently used
                as the main communication method between all Drivers / OPS.
              </Alist>
              <Alist>
                Currently one of OPS's favourite features improves communication
                between all Drivers / OPS.
              </Alist>
              <Alist>
                Implemented and optimized forms to fulfill complex trucking
                logistics requirements.
              </Alist>
              <Alist>
                Designed and implemented a new UI layout on Google Maps to allow
                realtime truck tracking and monitoring. Currently a key feature
                used by all clients.
              </Alist>
            </ul>
          </Section>

          <Section>
            <H3>Biarritz Optique</H3>
            <span>
              as Optician Salesman -{' '}
              <Time>June 2001 - Aug 2016 • 15 years</Time>
            </span>
          </Section>
        </Container>
      </Article>

      <Article>
        <H2>OSS Contributions</H2>
        <Container>
          <Section>
            <H3>c0d3.com</H3>
            <Time>June 2019 - June 2020 • 1 year</Time>
            <br />
            <mark>
              An online learning platform that teaches people how to become
              great software engineers for free.
            </mark>
            <p>
              cod3.com v2.0 will be used for our public launch, which will get
              exponentially higher traffic than the current 400 beta users.
            </p>
            <ul>
              <Alist>
                v1: Migrated front end to use ApolloClient containers instead of
                complex Query / Mutation components for better readability.
              </Alist>
              <Alist>
                v1: Reduced complex loading logic in the single page app and
                decreased load Time significantly.
              </Alist>
              <Alist>
                v1: Fixed bugs and helped maintain CLI tool on npm, used by 400
                students for daily submission of their work.
              </Alist>
              <Alist>
                v1: Fixed broken tests for better code coverage and re-enabled
                functional tests (cypress).
              </Alist>
              <Alist>
                v2: Helped set the technical foundation for a version 2 rebuild
                using TypeScript and NextJS.
              </Alist>
              <Alist>
                v2: Researched and integrated story book for UI Component
                documentation as well as snapshot testing.
              </Alist>
            </ul>
          </Section>

          <Section>
            <H3>MyProxy</H3>
            <Time>Aug 2019 - June 2020 • 9 months</Time>
            <br />
            <mark>
              An alternative to Nginx that allows automatic domain provider
              integration, ssl support for all domains, dynamic port proxy and
              automatic git deployment.
            </mark>
            <ul>
              <Alist>
                Led development efforts in TypeScript, testing environments,
                system setup, etc.
              </Alist>
              <Alist>
                Implemented domain providers _(GoDaddy and Name.com)_ to
                retrieve and manage DNS settings for user's domains.
              </Alist>
              <Alist>
                Implemented automatic SSL certification negotiation for root and
                wildcard subdomains for the domain names that the user selects.
              </Alist>
              <Alist>
                Implemented admin cookie and password management with sha256
                encryption.
              </Alist>
              <Alist>
                Set up CircleCI for automatic tests, builds, and deployment
                during development workflow.
              </Alist>
              <Alist>
                Created contributing standards for new domain providers to add
                support in MyProxy for their own domains and refactored existing
                code and ensure a smooth contributing experience for developers.
              </Alist>
              <Alist>
                Launched "MyProxy" which currently powers 3 production
                applications, including freedomains.dev, a faster and free
                Heroku alternative.
              </Alist>
            </ul>
          </Section>
        </Container>
      </Article>

      <Article>
        <H2>Education</H2>
        <Container>
          <Section>
            <H3>2018 - Bachelor’s Degree</H3>
            <p>
              "Multimedia Project Manager &amp; Development" (Web Development)
              from IESA multimédia School (Paris, FR) in partnership with Open
              Classrooms
            </p>
          </Section>

          <Section>
            <H3>2003 - CAP Degree</H3>
            <p>
              “Optic Technician &amp; Dispenser” CFA Muret Optics - Optical
              Sciences (Toulouse, FR)
            </p>
          </Section>
        </Container>
      </Article>

      <Article>
        <H2>Languages</H2>
        <Container>
          <Section>
            <H3>French</H3>
            <p>Mother tongue</p>
          </Section>
          <Section>
            <H3>English</H3>
            <p>Conversational &amp; Professional</p>
          </Section>
        </Container>
      </Article>

      <Article>
        <H2>Hobbi</H2>
        <Container>
          <p>I am passionate about traveling and learning new technologies.</p>
          <p>
            Krav Maga (Black belt) - Muay Thai - Snowboarding - Surf - Hiking
          </p>
        </Container>
      </Article>
    </Layout>
  )
}

export default ResumePage
