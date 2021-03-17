import * as React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

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
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii};
  font-size: 16px;
  margin-bottom: 16px;
  line-height: 24px;

  h2 {
    font-size: 20px;
    font-weight: 400;
    padding-left: 8px;
    line-height: 28px;
    width: 304px;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    display: unset;
    font-size: 16px;
    padding-right: 8px;
    color: ${({ theme }) => theme.colors.primary};
  }

  ul {
    list-style: none;
  }

  .container {
    display: grid;
    gap: 8px;
    padding: 8px;
  }

  .category {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 8px;
    line-height: 32px;

    :nth-child(odd) {
      background: ${({ theme }) => theme.colors.secondary};
    }

    li:not(:last-child) {
      padding-right: 8px;
    }
  }

  .summary {
    li {
      :before {
        content: '\f120';
        padding-right: 4px;
        font-family: 'FontAwesome';
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`

const Skills = styled(Article)``

const Work = styled(Article)``

const OSS = styled(Article)``

const Education = styled(Article)``

const Languages = styled(Article)`
  div {
    div {
      display: flex;
    }
  }
`

const Hobbi = styled(Article)``

const ResumePage = () => {
  const displaySkills = SKILLS.map(({ key, value }) => {
    const listOfSkills = value.map((skill) => <li key={skill}>{skill}</li>)
    return (
      <ul key={key} className="category">
        <h3>{key}:</h3>
        {listOfSkills}
      </ul>
    )
  })

  return (
    <Layout>
      <Skills>
        <h2>Skills &amp; Expertise</h2>
        {displaySkills}
      </Skills>

      <Work>
        <h2>Work Experiences</h2>

        <div className="container">
          <div>
            <h3>PayPal</h3>
            <span>as Software Engineer - Jun 2020 - Present ● </span>
            <span className="workExperience"> 3 months</span>
          </div>

          <div>
            <h3>Hwy Haul Startup</h3>
            <span>as React Engineer - Apr 2019 - May 2020 ● a year</span>
            <br />
            <mark>
              Building software to enable shippers and drivers to connect
              seamlessly in today’s \$800 billion trucking industry.
            </mark>

            <p>
              We use React - Redux - Sass - Ant Design - Google API and Twilio
              chat-sms.
            </p>

            <ul className="summary">
              <li>
                Maintain and develop new features on three web portals: OPS,
                Shipper, and Carrier portal.
              </li>
              <li>
                Improved codebase by resolving complex bugs and refactoring old
                components resulting in improved web performance, user
                happiness, and more maintainable codebase.
              </li>
              <li>
                Implemented chat-sms using Twilio SDK, which is currently used
                as the main communication method between all Drivers / OPS.
              </li>
              <li>
                Currently one of OPS's favourite features improves communication
                between all Drivers / OPS.
              </li>
              <li>
                Implemented and optimized forms to fulfill complex trucking
                logistics requirements.
              </li>
              <li>
                Designed and implemented a new UI layout on Google Maps to allow
                realtime truck tracking and monitoring. Currently a key feature
                used by all clients.
              </li>
            </ul>
          </div>

          <div>
            <h3>Biarritz Optique</h3>
            <span>as Optician Salesman - June 2001 - Aug 2016 ● 15 years</span>
          </div>
        </div>
      </Work>

      <OSS>
        <h2>OSS Contributions</h2>
        <div className="container">
          <div>
            <h3>c0d3.com</h3>June 2019 - June 2020 ● a year
            <br />
            <mark>
              An online learning platform that teaches people how to become
              great software engineers for free.
            </mark>
            <p>
              cod3.com v2.0 will be used for our public launch, which will get
              exponentially higher traffic than the current 400 beta users.
            </p>
            <ul className="summary">
              <li>
                v1: Migrated front end to use ApolloClient containers instead of
                complex Query / Mutation components for better readability.
              </li>
              <li>
                v1: Reduced complex loading logic in the single page app and
                decreased load time significantly.
              </li>
              <li>
                v1: Fixed bugs and helped maintain CLI tool on npm, used by 400
                students for daily submission of their work.
              </li>
              <li>
                v1: Fixed broken tests for better code coverage and re-enabled
                functional tests (cypress).
              </li>
              <li>
                v2: Helped set the technical foundation for a version 2 rebuild
                using TypeScript and NextJS.
              </li>
              <li>
                v2: Researched and integrated story book for UI Component
                documentation as well as snapshot testing.
              </li>
            </ul>
          </div>

          <div>
            <h3>MyProxy</h3>Aug 2019 - June 2020 ● 9 months
            <br />
            <mark>
              An alternative to Nginx that allows automatic domain provider
              integration, ssl support for all domains, dynamic port proxy and
              automatic git deployment.
            </mark>
            <ul className="summary">
              <li>
                Led development efforts in TypeScript, testing environments,
                system setup, etc.
              </li>
              <li>
                Implemented domain providers _(GoDaddy and Name.com)_ to
                retrieve and manage DNS settings for user's domains.
              </li>
              <li>
                Implemented automatic SSL certification negotiation for root and
                wildcard subdomains for the domain names that the user selects.
              </li>
              <li>
                Implemented admin cookie and password management with sha256
                encryption.
              </li>
              <li>
                Set up CircleCI for automatic tests, builds, and deployment
                during development workflow.
              </li>
              <li>
                Created contributing standards for new domain providers to add
                support in MyProxy for their own domains and refactored existing
                code and ensure a smooth contributing experience for developers.
              </li>
              <li>
                Launched "MyProxy" which currently powers 3 production
                applications, including freedomains.dev, a faster and free
                Heroku alternative.
              </li>
            </ul>
          </div>
        </div>
      </OSS>

      <Education>
        <h2>Education</h2>
        <div className="container">
          <div>
            <h3>2018 - Bachelor’s Degree</h3>
            <p>
              "Multimedia Project Manager &amp; Development" (Web Development)
              from IESA multimédia School (Paris, FR) in partnership with Open
              Classrooms
            </p>
          </div>

          <div>
            <h3>2003 - CAP Degree</h3>
            <p>
              “Optic Technician &amp; Dispenser” CFA Muret Optics - Optical
              Sciences (Toulouse, FR)
            </p>
          </div>
        </div>
      </Education>

      <Languages>
        <h2>Languages</h2>
        <div className="container">
          <div>
            <h3>French</h3>
            <p>Mother tongue</p>
          </div>
          <div>
            <h3>English</h3>
            <p>Conversational &amp; Professional</p>
          </div>
        </div>
      </Languages>

      <Hobbi>
        <h2>Hobbi</h2>
        <div className="container">
          <p>I am passionate about traveling and learning new technologies.</p>
          <p>
            Krav Maga (Black belt) - Muay Thai - Snowboarding - Surf - Hiking
          </p>
        </div>
      </Hobbi>
    </Layout>
  )
}

export default ResumePage
