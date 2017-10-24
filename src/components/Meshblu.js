import React from "react"
import styled from "react-emotion"

import Container from "./Container"

const Section = styled.section`
  background: #000;
  padding: 10rem 0;
  position: relative;
  text-align: center;
  color: #fff;

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
  background: #fff;
  color: #000;
  text-decoration: none;
  padding: 1.5rem 2.5rem;
  margin-top: 1.5rem;

  &:hover {
    background: #ffafa3;
  }
`

const Meshblu = () => (
  <Section>
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
  </Section>
)

export default Meshblu
