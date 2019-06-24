import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
  Text
} from 'native-base';
import axios from 'axios';
import { StackActions, NavigationActions } from 'react-navigation';

export default class AddUser extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      password: '',
      email: '',
      phone: ''
    };
  }

  validateEmail = email => {
    const regex = /^[a-z._-]+@[a-z.-]+\.[a-z]{2,4}$/;

    if (email == '') {
      return false;
    } else {
      return regex.test(email);
    }
  };

  validatePhone = phone => {
    const regex = /^\+?[0-9]*$/;

    if (phone == '') {
      return false;
    } else {
      return regex.test(phone);
    }
  };

  formSubmit = () => {
    const vm = this;

    if (this.state.name == '') {
      alert('Please enter user name!');
    } else if (this.validateEmail(this.state.email) == false) {
      alert('Please enter a valid email!');
    } else if (this.validatePhone(this.state.phone) == false) {
      alert('Please enter a valid phone number!');
    } else {
      axios
        .post('http://192.168.2.119:8088/user/create', vm.state)
        .then(function (response) {
          const data = response.data;
          console.log("AddUser Response --->" + data);
          alert("Added Successfully");
          vm.props.navigation.dispatch(vm.props.navigation.navigate("Register"));
        })
        .catch(function (err) {
          console.log("Add User Error-->" + err);
          alert(err);
        });
    }
  };

  render() {
    return (
      <Content style={styles.container}>
        <Form style={styles.formOuter}>
          <Item floatingLabel style={styles.formInput}>
            <Label style={styles.formLabel}>Name</Label>
            <Input
              onChangeText={userName => this.setState({ userName })}
              value={this.state.userName}
            />
          </Item>
          <Item floatingLabel style={styles.formInput}>
            <Label style={styles.formLabel}>Email</Label>
            <Input
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
          </Item>
          <Item floatingLabel style={styles.formInput}>
            <Label style={styles.formLabel}>Password</Label>
            <Input secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
          </Item>
          <Item floatingLabel style={styles.formInput}>
            <Label style={styles.formLabel}>Phone</Label>
            <Input
              onChangeText={phone => this.setState({ phone })}
              value={this.state.phone}
            />
          </Item>
          <Button
            block
            primary
            iconLeft
            style={styles.submitBtn}
            onPress={this.formSubmit.bind(this)}
          >
            <Icon name="add" />
            <Text>Add</Text>
          </Button>
        </Form>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  formOuter: {
    flex: 1,
    padding: 8
  },
  formInput: {
    marginLeft: 0
  },
  submitBtn: {
    marginTop: 20,
    backgroundColor: '#1c313a'
  },
  container: {
    backgroundColor: '#718792'
  },
  formLabel: {
    color: '#ffffff'
  }
});
