import React from "react"
import styled from "react-emotion"

import Container from "./Container"

const Section = styled.section`
  background: #FFF;
  color: #000;
  padding: 10rem 0;
  position: relative;
`

const SectionTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 2rem;
`

const SectionBody = styled.div`
  max-width: 24rem;

  p {
    line-height: 1.5;
    font-size: 1.25rem;
  }
`

const ThingGrid = styled.div`
  position: absolute;
  top: -7rem;
  right: 0;
  max-width: 22.5rem;
  ${'' /* background: #FFF; */}
  ${'' /* box-shadow: 0 2px 10px rgba(0,0,0,0.2); */}

  img {
    width: 3rem;
    height: 3rem;
    margin: 0.75rem;
  }
`


const Things = () => (
  <Section>
    <Container>
      <SectionBody>

        <SectionTitle>Things</SectionTitle>
        <p>
          Octoblu provides a platform to connect smart devices, wearables, sensors, cars, homes, offices, robots and web services together.
        </p>
      </SectionBody>

      <ThingGrid>
        <img title="Beacon Receiver" src="https://icons.octoblu.com/device/beacon-receiver.svg"/>
        <img title="BLE Heartrate" src="https://icons.octoblu.com/device/ble-heartrate.svg"/>
        <img title="Lightblue Bean" src="https://icons.octoblu.com/device/bean.svg"/>
        <img title="Automatic" src="https://icons.octoblu.com/channel/automatic.svg"/>
        <img title="Tesla" src="https://icons.octoblu.com/channel/tesla.svg"/>
        <img title="Uber" src="https://icons.octoblu.com/channel/uber.svg"/>
        <img title="Github (beta)" src="https://icons.octoblu.com/device/github.svg"/>
        <img title="Meshblu (beta)" src="https://icons.octoblu.com/channel/meshblu-http.svg"/>
        <img title="Skype For Business" src="https://icons.octoblu.com/device/skype.svg"/>
        <img title="M2X" src="https://icons.octoblu.com/channel/m2x.svg"/>
        <img title="SendGrid (beta)" src="https://icons.octoblu.com/device/sendgrid.svg"/>
        <img title="Nest" src="https://icons.octoblu.com/channel/nest.svg"/>
        <img title="Wit.ai" src="https://icons.octoblu.com/channel/witai.svg"/>
        <img title="Chromecast" src="https://icons.octoblu.com/device/chromecast.svg"/>
        <img title="Philips Hue Light" src="https://icons.octoblu.com/device/hue-light.svg"/>
        <img title="Wemo Switch" src="https://icons.octoblu.com/device/wemo-switch.svg"/>
        <img title="Johnny-Five" src="https://icons.octoblu.com/device/johnnyfive.svg"/>
        <img title="Microsoft Azure ML" src="https://icons.octoblu.com/device/msml.svg"/>
        <img title="Particle" src="https://icons.octoblu.com/channel/particle.svg"/>
      </ThingGrid>
    </Container>
  </Section>
)

export default Things
