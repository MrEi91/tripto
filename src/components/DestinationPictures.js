import React, { Component } from 'react'
import { View, Image, ScrollView, Text } from 'react-native'
import { Card, CardItem } from 'native-base'

class DestinationPictures extends Component {
  constructor() {
    super()
    this.state = {
      pictures: []
    }
  }

  componentDidMount () {
    const self = this
    fetch('http://6f1a67c3.ngrok.io/cities')
      .then((response, err) => {
        if (err) throw err
        return response.json()
      })
      .then(data => {
        self.setState({
          pictures: data
        })
      })
  }

  render () {
    return (
      <View>
        <View style={styles.navbar}>
          <Text style={styles.navbarText}>Alun - Alun Bandung</Text>
        </View>
        <ScrollView>
          <View style={styles.content}>
            {this.state.pictures.map((item, index) => {
              return (
                <View key={index} style={{ flexDirection: 'row' }}>
                  <Card style={{ flex : 0, width: '100%'}} >
                    <CardItem>
                      <Image style={styles.picture} source={{ uri: item.urlImage }} />
                    </CardItem>
                  </Card>
                </View>
              )
            })}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  navbar: {
    height: '10%',
    width: '100%',
    padding: 10,
    backgroundColor: '#ff9900',
    flexDirection:'row',
  },
  navbarText:{
    color:'#ffffff',
    fontSize:20
  },
  picture: {
    height: 150,
    width:'100%',
    resizeMode:'cover',
  },
  content:{
    height: "90%",
    width: "100%",
    padding: 10,
  },
}

export default DestinationPictures
