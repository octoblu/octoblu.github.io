import React from "react"
import styled from "react-emotion"

import Container from "./Container"

const Section = styled.section`
  background: linear-gradient(135deg, #c0cbd0 0%, #e5e8ed 100%);
  background-image: linear-gradient(to left, #1cafc6, #012690);
  background: #0d2481;
  background-image: linear-gradient(to left, #1692bb, #012690);
  padding: 16rem 0;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  text-align: center;
`

const Title = styled.h2`
  font-size: 3.25rem;
  font-weight: 600;
  width: 100%;
`

const SubTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 300;
  width: 100%;
  margin-top: 1rem;
`

const Banner = () => (
  <Section>
    <Container column>
      <Title>Integration of Things</Title>
      <SubTitle>
        Octoblu is a multi-protocol Internet of Things platform that enables you
        to create secure IoT services.
      </SubTitle>
    </Container>
  </Section>
)

export default Banner
