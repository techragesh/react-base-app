import React, { Component } from 'react';
import { Container } from 'native-base';
import BackUser from '../components/BackUser';
import EditUser from '../components/EditUser';

export default class EditUserScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.navigation.state.params
    };
  }

  render() {
    return (
      <Container>
        <BackUser navigation={this.props.navigation} title="Edit User" />
        <EditUser navigation={this.props.navigation} data={this.state.user} />
      </Container>
    );
  }
}
