import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

class Tour extends Component{
  render () {
    return (
      <View style={styles.Header}>
        <Image style={styles.imageHeader} source={{uri:"https://alidesta.files.wordpress.com/2015/04/bandung.jpg"}}/>
      </View>
    )
  }
}

const styles = {
  Header: {
    height: '50%',
    width: '100%',
  },
  imageHeader: {
    height: '100%',
    width:'100%',
    resizeMode:'cover',
  }
}

export default Tour
