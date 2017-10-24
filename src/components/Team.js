import React from "react"
import styled from "react-emotion"

import Container from "./Container"
import Section from "./Section"

const Wrapper = styled.div`
  ${Section}

  background-image: url(http://octoblu.github.io/meshblu/img/team2.png);
  background-size: cover;
  background-attachment: fixed;

  p {
    line-height: 1.5;
    font-size: 1.25rem;
  }
`
const SectionOverlay = styled.div`
  ${Section}

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  text-align: center;
  color: #FFF;
  
  height: 100%;
  width: 100%;


  background: rgba(0,0,0,.7);
`

const SectionTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`

const Team = () => (
  <Wrapper>
    <SectionOverlay>
      <Container column>
        <SectionTitle>Our Team</SectionTitle>
        <p>
          We are a group of like-minded geeks brought together for the sole purpose of building SkyNet!
        </p>
      </Container>
    </SectionOverlay>
  </Wrapper>
)

export default Team
