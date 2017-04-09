import React, { Component } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Thumbnail, Body, ListItem } from 'native-base'
import { Actions } from 'react-native-router-flux'

class Tour extends Component{

  constructor () {
    super ()
    this.state = {
      tour:[]
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
          tour: data
        })
      })
  }

  render () {
    return (
      <View>
        <View style={styles.Header}>
          <Image style={styles.imageHeader} source={{uri:"https://alidesta.files.wordpress.com/2015/04/bandung.jpg"}}/>
        </View>
        <View style={styles.navbar}>
          <Text style={styles.navbarText}>Bandung</Text>
        </View>
        <ScrollView>
          <View style={styles.content}>
            {this.state.tour.map((item, index) => {
              return (
                <View key={index}>
                  <ListItem>
                    <Thumbnail size={80} source={{ uri: item.urlImage }} />
                    <TouchableOpacity style={{ flex : 0, width: '100%'}} onPress={Actions.DestinationPictures}>
                      <Body>
                        <Text style={styles.itemTitle}>{item.tour[0].title}</Text>
                        <Text style={styles.itemContent}>{item.tour[0].content}</Text>
                      </Body>
                    </TouchableOpacity>
                  </ListItem>
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
  Header: {
    height: '20%',
    width: '100%',
  },
  imageHeader: {
    height: '100%',
    width:'100%',
    resizeMode:'cover',
  },
  navbar: {
    height: '7%',
    width: '100%',
    padding: 10 ,
    backgroundColor: '#ff9900',
    flexDirection:'row',
  },
  navbarText:{
    color:'#ffffff',
    fontSize:20
  },
  content:{
    height: "73%",
    width: "100%",
    padding: 10,
  },
  itemTitle:{
    fontSize: 17,
    marginLeft: 10
  },
  itemContent:{
    fontSize: 13,
    marginLeft: 10
  }
}

export default Tour
