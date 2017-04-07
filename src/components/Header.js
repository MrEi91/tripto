import React from 'react'
import { View, Image, Text } from 'react-native'
import { Container, Content, Tab, Tabs, TabHeading, Icon } from 'native-base';
// import Tab1 from './tabOne';
// import Tab2 from './tabTwo';

const Header = () => {
  return (
    <Container>
    <Tabs>
      <Tab Tab heading={ <TabHeading><Icon name="home"/><Text> Home</Text></TabHeading> }>
          <Text>Cities</Text>
      </Tab>
      <Tab heading={ <TabHeading><Icon name="person"/><Text> Profile</Text></TabHeading> }>
          <Text>Login with facebook</Text>
      </Tab>
    </Tabs>
    </Container>
  );
}

export default Header
