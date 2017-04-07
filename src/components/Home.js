import React from 'react'
import { View } from 'react-native'

import Header from './Header'
import Cities from './Cities'

const Home = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Header/>
    </View>
  )
}

export default Home
