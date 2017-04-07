import React from 'react'
import { View, Text } from 'react-native'
import { Container, Content, Tab, Tabs, TabHeading, Icon } from 'native-base';

import Cities from './Cities';
import Profile from './Profile';

const Header = () => {
  return (
    <Container>
      <Tabs>
        <Tab Tab heading={ <TabHeading><Icon name="home"/><Text style={styles.textMenu}> Home</Text></TabHeading> }>
          <Cities/>
        </Tab>
        <Tab heading={ <TabHeading><Icon name="person"/><Text style={styles.textMenu}>Profile</Text></TabHeading> }>
          <Profile />
        </Tab>
      </Tabs>
    </Container>
  );
}

const styles = {
  textMenu : {
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 15
  },
}

export default Header
