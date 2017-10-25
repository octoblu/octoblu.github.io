import React from "react"
import styled from "react-emotion"

import Container from "./Container"
import Section from "./Section"

const Wrapper = styled.div`
  ${Section}

  background: #000;
  color: #FFF;
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
  background: #FFF;
  color: #000;


  &:hover {
    background-color: #CCC;
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
