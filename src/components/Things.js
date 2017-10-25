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
import beaconImg from "./images/beacon-receiver.svg"
import githubImg from "./images/github.svg"
import hueLightImg from "./images/hue-light.svg"
import johnnyfiveImg from "./images/johnnyfive.svg"
import msmlImg from "./images/msml.svg"
import skypeImg from "./images/skype.svg"
import youtubeImg from "./images/youtube.svg"
import wemoSwitchImg from "./images/wemo-switch.svg"


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
        <img title="Github (beta)" src={githubImg}/>
        <img title="Meshblu" src={meshbluImg}/>
        <img title="Skype For Business" src={skypeImg}/>
        <img title="Johnny-Five" src={johnnyfiveImg}/>
        <img title="Slack" src={slackImg}/>
        <img title="Youtube" src={youtubeImg}/>
        <img title="Wordpress" src={wordpressImg}/>
        <img title="Microsoft" src={biztalkImg}/>
        <img title="Dropbox" src={dropboxImg}/>
        <img title="Nest" src={nestImg}/>
        <img title="Philips Hue Light" src={hueLightImg}/>
        <img title="Microsoft Azure ML" src={msmlImg}/>
        <img title="Wemo Switch" src={wemoSwitchImg}/>
        <img title="Beacon Receiver" src={beaconImg}/>
      </ThingGrid>
    </Container>
  </Wrapper>
)

export default Things
