import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Container, Content, Card, CardItem, Body } from 'native-base'
import {Actions} from 'react-native-router-flux'

class Cities extends Component {
  constructor () {
    super()
    this.state = {
      cities:[]
    }
  }

  componentDidMount () {
    const self = this
    fetch('http://febd3618.ngrok.io/cities')
      .then((response, err) => {
        if (err) throw err
        return response.json()
      })
      .then(data => {
        self.setState({
          cities: data
        })
      })
  }

  render () {
    return (
      <Container>
        <Content>
          <View>
            {this.state.cities.length === 0 ? <ActivityIndicator animation={true}/> :
              this.state.cities.map((item, index) => {
                return (
                  <View key={index} style={{ flexDirection: 'row' }}>
                    <Card style={{ flex : 0, width: '100%'}}>
                      <CardItem>
                        <TouchableOpacity style={{ flex : 0, width: '100%'}} onPress={Actions.Tour}>
                          <Body>
                            <Image style={{ resizeMode: 'cover', height: 150, width: '100%' }} source={{ uri: item.urlImage }}><Text style={{color:'#ffffff', fontWeight: 'bold', fontSize:30, marginLeft: 5, marginTop: '25%'}}>{item.tour.length}</Text></Image>
                          <Text style={{ fontWeight: 'bold' }}>{item.city}</Text>
                          </Body>
                        </TouchableOpacity>
                      </CardItem>
                    </Card>
                  </View>
                )
              })
            }
          </View>
        </Content>
      </Container>
    )
  }
}

export default Cities
