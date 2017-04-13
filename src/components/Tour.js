import React, { Component } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Thumbnail, Body, ListItem } from 'native-base'
import { Actions } from 'react-native-router-flux'

class Tour extends Component{
  constructor (props) {
    super (props)
    this.state = {
      tour:[],
      cityName:[]
    }
  }

  componentDidMount () {
    const self = this
    fetch('http://5f6fed4d.ngrok.io/cities/' + self.props.cityId)
      .then((response, err) => {
        if (err) throw err
        return response.json()
      })
      .then(dataCity => {
        // console.log('Image Url',dataCity.tour.pictures[0].urlImage);
        console.log(dataCity.tour[0]);
        self.setState({
          cityName: dataCity,
          tour: dataCity.tour
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
          <Text style={styles.navbarText}>{this.state.cityName.city}</Text>
        </View>
        <ScrollView>
          <View style={styles.content}>
            {this.state.tour.map((item, index) => {
              return (
                <View key={index}>
                  <ListItem>
                    <Thumbnail size={80} source={{ uri: item.urlImage }} />
                  <TouchableOpacity style={{ flex : 0, width: '100%'}} onPress={() => Actions.DestinationPictures({ DestinationId: item.id })}>
                      <Body>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemContent}>{item.content}</Text>
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
    height: '10%',
    width: '100%',
    padding: 10 ,
    marginBottom: 5,
    backgroundColor: '#ff9900',
  },
  navbarText:{
    color:'#ffffff',
    fontSize:17
  },
  content:{
    height: "70%",
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
