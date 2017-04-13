import React, { Component } from 'react'
import { View, Image, ScrollView, Text } from 'react-native'
import { Card, CardItem } from 'native-base'

class DestinationPictures extends Component {
  constructor(props) {
    super(props)
    this.state = {
      TourName: [],
      pictures: []
    }
  }

  componentDidMount () {
    const self = this
    fetch('http://5f6fed4d.ngrok.io/cities/' + self.props.DestinationId)
      .then((response, err) => {
        if (err) throw err
        return response.json()
      })
      .then(dataTour => {
        self.setState({
          TourName: dataTour.tour[0],
          pictures: dataTour.tour[0].pictures
        })
      })
  }

  render () {
    return (
      <View>
        <View style={styles.navbar}>
          <Text style={styles.navbarText}>{this.state.TourName.title}</Text>
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
    height: '7%',
    width: '100%',
    padding: 10,
    backgroundColor: '#ff9900',
  },
  navbarText:{
    color:'#ffffff',
    fontSize:17,
    marginBottom: 5
  },
  picture: {
    height: 150,
    width:'100%',
    resizeMode:'cover',
  }
}

export default DestinationPictures
