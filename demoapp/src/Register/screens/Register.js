import React, { Component } from 'react';
import { Container } from 'native-base';
import { Text, StyleSheet } from 'react-native';
import HeaderUser from '../components/HeaderUser';
import ContentUser from '../components/ContentUser';

export default class Register extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <HeaderUser navigation={this.props.navigation} />
        <ContentUser navigation={this.props.navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#718792'
  }
});
