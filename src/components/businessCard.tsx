import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

interface Props {
  children: React.ReactNode
}

const Card = styled.div`
  width: 304px;
  text-align: center;
  margin: 52px 0px 16px;
`

const ImageWrapper = styled.div`
  margin: -52px 24px;
  height: 104px;
  width: 104px;
  border-radius: 50%;
  padding: 1px;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.primary} 50%,
    ${({ theme }) => theme.colors.white} 50%
  );

  .gatsby-image-wrapper {
    border-radius: 50%;
    background: white;
  }
`

const Container = styled.div`
  display: grid;
  gap: 16px;
  padding: 64px 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii};
`

export default ({ children }: Props) => (
  <Card>
    <ImageWrapper>
      <StaticImage
        src="../images/icon.png"
        alt="David De Wulf"
        loading="eager"
        placeholder="tracedSVG"
        width={104}
        height={104}
      />
    </ImageWrapper>
    <Container children={children} />
  </Card>
)
