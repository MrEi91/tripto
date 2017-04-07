import React from 'react'
import { View, Text } from 'react-native'
import { Container, Content, Tab, Tabs, TabHeading, Icon } from 'native-base';

import Cities from './Cities';
import Profile from './Profile';

const Header = () => {
  return (
    <Container>
      <Tabs>
        <Tab Tab heading={ <TabHeading><Icon name="home"/><Text> Home</Text></TabHeading> }>
          <Cities/>
        </Tab>
        <Tab heading={ <TabHeading><Icon name="person"/><Text> Profile</Text></TabHeading> }>
          <Profile />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Header
