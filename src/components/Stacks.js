import React from "react"
import styled from "react-emotion"

import Container from "./Container"

const Section = styled.section`
  padding: 5rem 0;
`

const StackList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-flow: wrap;
  width: 100%;
  margin-left: -2.5rem;
`

const Stack = styled.li`
  background: #FFF;
  padding: 1.25rem;
  max-width: 21rem;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin: 0 1.25rem 2.5rem;
  height: 12rem;
`

const StackTitle = styled.h4`
  color: #03288f;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
`

const StackBody = styled.p`
  line-height: 1.5;
  font-size: 0.9rem;
`

const Features = () => (
  <Section>
    <Container>

      <StackList>
        <Stack>
          <StackTitle>api-octoblu</StackTitle>
          <StackBody>A collection of services that provide rest APIs for the Octoblu Web Application</StackBody>
        </Stack>

        <Stack>
          <StackTitle>flows</StackTitle>
        </Stack>
        <Stack>
          <StackTitle>meshblu-core</StackTitle>
        </Stack>
        <Stack>
          <StackTitle>octoblu</StackTitle>
        </Stack>
      </StackList>
    </Container>
  </Section>
)

export default Features
