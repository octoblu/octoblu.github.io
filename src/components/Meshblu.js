import React from "react"
import styled from "react-emotion"

import Container from "./Container"
import Section from "./Section"

const Wrapper = styled.section`
  ${Section}

  text-align: center;

  p {
    line-height: 1.5;
    font-size: 1.25rem;
  }
`

const SectionTitle = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`

const Link = styled.a`
  background: #0b63a7;
  color: #FFF;
  text-decoration: none;
  padding: 1.5rem 2.5rem;
  margin-top: 1.5rem;

  &:hover {
    background: #042990;
  }
`

const Meshblu = () => (
  <Wrapper>
    <Container column>
      <SectionTitle>Meshblu</SectionTitle>
      <p>
        Meshblu is a secure cross-protocol, machine-to-machine instant messaging
        platform with an open plugin architecture for connectors.
      </p>
      <Link href="http://octoblu.github.io/meshblu/" title="Meshblu">
        Learn More
      </Link>
    </Container>
  </Wrapper>
)

export default Meshblu
