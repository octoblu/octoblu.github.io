import React from "react"
import styled from "react-emotion"

import Container from "./Container"
import Section from "./Section"

const Wrapper = styled.div`
  ${Section}

  background: #ffafa3;
  color: #333;
  text-align: center;

  p {
    line-height: 1.5;
    font-size: 1.25rem;
  }
`

const SectionTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`

const Link = styled.a`
  text-decoration: none;
  padding: 1.5rem 2.5rem;
  margin-top: 1.5rem;
  background: #333;
  color: #FFF;

  &:hover {
    background-color: #111;
  }
`

const OpenSource = () => (
  <Wrapper>
    <Container column>
      <SectionTitle>Open Source</SectionTitle>
      <p>
        Our entire platform is open source under an MIT license.
      </p>

      <Link href="http://github.com/octoblu/octoblu" title="octoblu">Get Started</Link>
    </Container>
  </Wrapper>
)

export default OpenSource
