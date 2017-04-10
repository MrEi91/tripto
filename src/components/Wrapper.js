import React, { Component } from 'react'
import {Scene, Router} from 'react-native-router-flux'

import Profile from './Profile'
import Home from './Home'
import Tour from './Tour'
import DestinationPictures from './DestinationPictures'

const Wrapper = (props) => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Home" component={Home} initial={true}  hideNavBar={true} />
        <Scene key="Tour" component={Tour} title="Tour" />
        <Scene key="DestinationPictures" component={DestinationPictures} title="DestinationPictures" />
        <Scene key="Profile" component={Profile} title="Profile"/>
      </Scene>
    </Router>
  )
}

export default Wrapper
