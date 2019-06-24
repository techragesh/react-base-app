import React, { Component } from 'react';
import {
  Header,
  Left,
  Body,
  Right,
  Title,
  Button,
  Icon,
  Text
} from 'native-base';
import { StyleSheet } from 'react-native';
export default class HeaderMain extends Component {
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
          <Title style={{ color: "#ffffff" }}>Dashboard</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64'
  }
});
