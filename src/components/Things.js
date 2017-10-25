import React from "react"
import styled from "react-emotion"


import biztalkImg from "./images/biztalk.svg"
import chromecastImg from "./images/chromecast.svg"
import driveImg from "./images/google-drive.svg"
import dropboxImg from "./images/dropbox.svg"
import facebookImg from "./images/facebook.svg"
import meshbluImg from "./images/meshblu-http.svg"
import nestImg from "./images/nest.svg"
import slackImg from "./images/slack.svg"
import teslaImg from "./images/tesla.svg"
import uberImg from "./images/uber.svg"
import wordpressImg from "./images/wordpress.svg"
import youtubeImg from "./images/youtube.svg"

import Container from "./Container"
import Section from "./Section"

const Wrapper = styled.section`
  ${Section}
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
  ${'' /* position: absolute;
  top: -7rem;
  right: 0; */}
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
  <Wrapper>
    <Container>
      <SectionBody>

        <SectionTitle>Things</SectionTitle>
        <p>
          Octoblu provides a platform to connect smart devices, wearables, sensors, cars, homes, offices, robots and web services together.
        </p>
      </SectionBody>

      <ThingGrid>
        <img title="Chromecast" src={chromecastImg}/>
        <img title="Tesla" src={teslaImg}/>
        <img title="Uber" src={uberImg}/>
        <img title="Google Drive" src={driveImg}/>
        <img title="Dropbox" src={dropboxImg}/>
        <img title="Facebook" src={facebookImg}/>
        <img title="Github (beta)" src="https://icons.octoblu.com/device/github.svg"/>
        <img title="Meshblu (beta)" src="https://icons.octoblu.com/channel/meshblu-http.svg"/>
        <img title="Skype For Business" src="https://icons.octoblu.com/device/skype.svg"/>
        <img title="Johnny-Five" src="https://icons.octoblu.com/device/johnnyfive.svg"/>
        <img title="Slack" src="https://icons.octoblu.com/channel/slack.svg"/>
        <img title="Facebook" src="https://icons.octoblu.com/channel/facebook.svg"/>
        <img title="Youtube" src="https://icons.octoblu.com/channel/youtube.svg"/>
        <img title="Exchange" src="https://cdn.octoblu.com/icons/slurries/exchange.svg"/>
        <img title="Wordpress" src="https://icons.octoblu.com/channel/wordpress.svg"/>
        <img title="Microsoft" src={biztalkImg}/>
        <img title="Google-Drive" src="https://icons.octoblu.com/channel/google-drive.svg"/>
        <img title="Dropbox" src="https://icons.octoblu.com/channel/dropbox.svg"/>
        <img title="Nest" src="https://icons.octoblu.com/channel/nest.svg"/>
        <img title="Philips Hue Light" src="https://icons.octoblu.com/device/hue-light.svg"/>
        <img title="Microsoft Azure ML" src="https://icons.octoblu.com/device/msml.svg"/>
        <img title="Wemo Switch" src="https://icons.octoblu.com/device/wemo-switch.svg"/>
        <img title="Beacon Receiver" src="https://icons.octoblu.com/device/beacon-receiver.svg"/>
      </ThingGrid>
    </Container>
  </Wrapper>
)

export default Things
