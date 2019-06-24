import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Content, Button, Icon } from 'native-base';

export default class DrawerMenu extends Component {
  render() {
    return (
      <Content style={styles.menuWrapper}>
        <Button
          transparent
          iconLeft
          full
          onPress={() => this.props.navigation.navigate('Home')}
          style={styles.menuList}
        >
          <Icon type="FontAwesome" name="home" style={styles.menuIcon} />
          <Text style={styles.menuItem}>Dashboard</Text>
        </Button>
        <Button
          transparent
          iconLeft
          full
          onPress={() => this.props.navigation.navigate('Register')}
          style={styles.menuList}
        >
          <Icon type="FontAwesome" name="user" style={styles.menuIcon} />
          <Text style={styles.menuItem}>Register</Text>
        </Button>
        <Button
          transparent
          iconLeft
          full
          onPress={() => this.props.navigation.navigate('Login')}
          style={styles.menuList}
        >
          <Icon type="FontAwesome" name="user" style={styles.menuIcon} />
          <Text style={styles.menuItem}>SignOut</Text>
        </Button>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  menuWrapper: {
    marginTop: 30,
    backgroundColor: '#1c313a',
    color: '#1c313a'
  },
  menuList: {
    justifyContent: 'flex-start'
  },
  menuItem: {
    fontSize: 15,
    color: '#ffffff',
    flex: 0.95
  },
  menuIcon: {
    color: '#212121',
    flex: 0.15
  }
});
