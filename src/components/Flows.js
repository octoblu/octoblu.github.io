import React from "react"
import styled from "react-emotion"
import flowImg from './images/hue-slack-belkin.png'

import Container from "./Container"


const Section = styled.section`
  background: #fff;
  position: relative;
  min-height: 675px;
  display: flex;
`

const SectionTitle = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #fff;
`

const SectionBody = styled.div`
  color: #fff;
  max-width: 24rem;
  ${'' /* padding: 6rem 0; */}

  p {
    line-height: 1.5;
    font-size: 1.25rem;
  }
`

const Stripes = styled.div`
  position: absolute;
  width: 100%;
  z-index: 0;

  & > * {
    position: absolute;
    width: 100%;
  }

  svg {
    height: 675px;
    width: 100%;
  }
`

const BackgroundStripe = styled.div`
  svg path {
    fill: rgba(11, 36, 129, 0.07);
  }
`

const ForegroundStripe = styled.div`
  svg path {
    fill: #0d2481;
  }
`

const Browser = styled.div`
  ${'' /* border: 1px solid rgba(0, 0, 0, 0.31); */}
  ${'' /* border-top-width: 3rem; */}
  width: 30rem;
  height: 20rem;
  background: rgba(255, 255, 255, 0);

  img {
    width: 478px;
  }
`

const FlowsContainer = styled(Container)`
  flex: 1;
  display: flex;
  align-self: center;
  align-items: center;
`

const Flows = () => (
  <Section>
    <Stripes>
      <BackgroundStripe>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2400 708"
          preserveAspectRatio="none"
        >
          <path fill="#ffffff" d="M0.5,80.5l2400-80v628l-2400,80V80.5Z" />
        </svg>
      </BackgroundStripe>
      <ForegroundStripe>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2400 708"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient_color" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#f44c67" />
              <stop offset="100%" stopColor="#fb377f" />
            </linearGradient>
          </defs>
          <path fill="#ffffff" d="M0,140L2400,0V568L0,708V140Z" />
        </svg>
      </ForegroundStripe>
    </Stripes>

    <FlowsContainer>
      <SectionBody>
        <SectionTitle>Flows</SectionTitle>
        <p>
          Octoblu’s drag-and-drop designer makes automation simple. It's
          powerful enough to handle complex interactions, yet simple enough for
          non-engineers to use. Just drag, drop, and deploy, without ever
          writing a single line of code.
        </p>
      </SectionBody>

      <Browser>
        <img src={flowImg} />
      </Browser>
    </FlowsContainer>
  </Section>
)

export default Flows
