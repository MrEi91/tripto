import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Container, Content, Card, CardItem, Thumbnail, Left, Body } from 'native-base'

class Cities extends Component {
  render () {
    return (
      <Container>
        <Content>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Card style={{ flex : 0, width: '50%'}}>
                <CardItem>
                  <Body>
                    <Image style={{ resizeMode: 'cover', height: 150, width: '100%' }} source={{ uri:'http://www.kemendagri.go.id/media/article/images/2016/04/22/s/u/sukabumi_adipura_roundabout_00_3.jpg' }}/>
                    <Text style={{ fontWeight: 'bold' }}>SUKABUMI</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card style={{ flex : 0, width: '50%'}}>
                <CardItem>
                  <Body>
                    <Image style={{ resizeMode: 'cover', height: 150, width: '100%' }} source={{ uri:'https://simalesmandi.files.wordpress.com/2015/03/indonesia-tourismcom.jpg' }}/>
                  <Text style={{ fontWeight: 'bold' }}>BANDUNG</Text>
                  </Body>
                </CardItem>
              </Card>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Card style={{ flex : 0, width: '50%'}}>
                <CardItem>
                  <Body>
                    <Image style={{ resizeMode: 'cover', height: 150, width: '100%' }} source={{ uri:'https://chanailufar.files.wordpress.com/2011/11/bogoristana-ii.jpg' }}/>
                  <Text style={{ fontWeight: 'bold' }}>Bogor</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card style={{ flex : 0, width: '50%'}}>
                <CardItem>
                  <Body>
                    <Image style={{ resizeMode: 'cover', height: 150, width: '100%' }} source={{ uri:'http://archive.itoday.co.id/wp-content/uploads/2013/01/garut.jpg' }}/>
                  <Text style={{ fontWeight: 'bold' }}>Garut</Text>
                  </Body>
                </CardItem>
              </Card>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Card style={{ flex : 0, width: '50%'}}>
                <CardItem>
                  <Body>
                    <Image style={{ resizeMode: 'cover', height: 150, width: '100%' }} source={{ uri:'http://4.bp.blogspot.com/-HRSkwzjK33A/Vg3sa4ykcJI/AAAAAAAAAF4/k6BruqteE-Q/s1600/kota-cianjur.jpg' }}/>
                  <Text style={{ fontWeight: 'bold' }}>Cianjur</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card style={{ flex : 0, width: '50%'}}>
                <CardItem>
                  <Body>
                    <Image style={{ resizeMode: 'cover', height: 150, width: '100%' }} source={{ uri:'http://bali.panduanwisata.id/files/2011/10/air-panas-banjar3.jpg' }}/>
                  <Text style={{ fontWeight: 'bold' }}>Banjar</Text>
                  </Body>
                </CardItem>
              </Card>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

export default Cities
