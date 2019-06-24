import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import HeaderMain from '../components/HeaderMain';
import ContentMain from '../components/ContentMain';

export default class MainScreen extends Component {
  render() {
    return (
      <Container>
        <HeaderMain navigation={this.props.navigation} />
        <ContentMain />
      </Container>
    );
  }
}
