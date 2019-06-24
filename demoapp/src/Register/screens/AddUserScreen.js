import React, { Component } from 'react';
import { Container } from 'native-base';
import BackUser from '../components/BackUser';
import AddUser from '../components/AddUser';
import { StyleSheet } from 'react-native';
export default class AddUserScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <BackUser navigation={this.props.navigation} title="Add New User" />
        <AddUser navigation={this.props.navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64'
  }
});
