import React from "react"
import styled from "react-emotion"

import Container from "./Container"

const Section = styled.section`
  background-image: url(http://octoblu.github.io/meshblu/img/team2.png);
  background-size: cover;
  padding: 10rem 0;
  position: relative;
  text-align: center;
  color: #FFF;

  p {
    line-height: 1.5;
    font-size: 1.25rem;
  }
`
const SectionOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  height: 100%;
  width: 100%;

  min-height: 20rem;

  background: rgba(0,0,0,.7);
`



const SectionTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`

const Team = () => (
  <Section>
    <SectionOverlay>
      <Container column>
        <SectionTitle>Our Team</SectionTitle>
        <p>
          We are a group of like-minded geeks brought together for the sole purpose of building SkyNet!
        </p>
      </Container>
    </SectionOverlay>
  </Section>
)

export default Team
