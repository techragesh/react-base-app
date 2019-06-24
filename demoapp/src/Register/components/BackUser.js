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
export default class BackUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title
    };
  }

  render() {
    return (
      <Header style={styles.container}>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={{ alignItems: 'center', color: '#ffffff' }}>
            {this.state.title}
          </Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
