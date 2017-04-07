import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

import Profile from './Profile'
import Home from './Home'

const Wrapper = (props) => {
  return (
    <View style={{ flex: 1 }}>
      { props.scene === 'HOME' && <Home /> }
    </View>
  )
}

const mapStateToProps = (state) => {
  return ({
    scene: state.scene
  })
}

export default connect(mapStateToProps, null)(Wrapper)
