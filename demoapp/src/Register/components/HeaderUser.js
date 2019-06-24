import React, { Component } from 'react';
import {
  Header,
  Left,
  Body,
  Right,
  Title,
  Button,
  Icon
} from 'native-base';
import { StyleSheet } from 'react-native';

export default class HeaderUser extends Component {
  render() {
    return (
      <Header style={styles.container}>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: "#ffffff" }}>Users List</Title>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate('AddUser')}
          >
            <Icon style={{ color: '#ffffff' }} name="add-circle" />
          </Button>
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64'
  }
});
