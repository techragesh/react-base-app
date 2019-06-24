import React, { Component } from 'react';
import {
  Alert,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  FlatList
} from 'react-native';
import { Content, List, ListItem, Button, Icon, Body, Text } from 'native-base';
import axios from 'axios';
import { StackActions, NavigationActions } from 'react-navigation';

export default class ContentUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: [],
      page: 2,
      loading: false,
      refreshing: false
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const vm = this;

    this.setState({
      loading: true
    });

    axios
      .get('http://192.168.2.119:8088/user/all')
      .then(function (result) {
        console.log(JSON.stringify(result.data))
        vm.setState({
          page: 2,
          loading: false,
          refreshing: false,
          userList: result.data
        });
      })
      .catch(function (err) {
        alert(err);
      });
  };

  deleteUser = id => {
    var vm = this;

    axios
      .delete('http://192.168.2.119:8088/user/delete/' + id)
      .then(function (response) {
        const data = response.data;

        alert(data.msg);
        vm.getData();
      })
      .catch(function (err) {
        alert(err);
      });
  };

  showAlert = (id, name) => {
    const vm = this;

    Alert.alert(
      'Delete Confirmation',
      'Are you sure want to delete "' + name + '" from user?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Canceled'),
          style: 'cancel'
        },
        { text: 'Delete', onPress: () => this.deleteUser(id) }
      ]
    );
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          flex: 1,
          paddingVertical: 20,
          justifyContent: 'center',
          position: 'absolute'
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  dataRefresh = () => {
    this.setState(
      {
        refreshing: true
      },
      () => {
        this.getData();
      }
    );
  };

  render() {
    if (this.state.userList.length == 0) {
      return (
        <Content style={styles.contentWrapper}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 250
            }}
          >
            <Text style={styles.emptyText}>No Data Available</Text>
          </View>
        </Content>
      );
    } else {
      return (
        <List style={{ flex: 1 }}>
          <FlatList
            data={this.state.userList}
            keyExtractor={item => item.userId.toString()}
            renderItem={({ item }) => (
              <ListItem style={styles.listItem}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('EditUser', item)
                  }
                  onLongPress={() => this.showAlert(item.userId, item.userName)}
                  activeOpacity={0.5}
                >
                  <Body>
                    <Text>{item.userName}</Text>
                    <Text note numberOfLines={1}>
                      {item.phone}
                    </Text>
                  </Body>
                </TouchableOpacity>
              </ListItem>
            )}
            ListFooterComponent={this.renderFooter}
            onRefresh={this.dataRefresh}
            refreshing={this.state.refreshing}
          />
        </List>
      );
    }
  }
}

const styles = StyleSheet.create({
  contentWrapper: {
    padding: 10
  },
  emptyText: {
    fontSize: 15,
    color: '#ffffff'
  },
  listItem: {
    marginLeft: 0
  }
});
