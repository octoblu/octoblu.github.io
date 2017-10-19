import React from 'react'

import Banner from "../components/Banner"
import Flows from "../components/Flows"
import Header from "../components/Header"
import Meshblu from "../components/Meshblu"
import Team from "../components/Team"
import Things from "../components/Things"
import OpenSource from "../components/OpenSource"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Things />
        <Meshblu />
        <Flows />
        <OpenSource />
        <Team />
      </div>
    )
  }
}
