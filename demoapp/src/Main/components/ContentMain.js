import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, Text, Accordion, Icon, View } from 'native-base';


const dataArray = [
  { title: "HyperTrace", content: "This software will help you audit your documents metadata in our blockchain solution. Partners that are registered in the blockchain will be able to save, update and read the audit trail of documents, as well as view existing partners via a REST-interface. Partners need to generate an API-key first in order to authenticate themselves on the REST-interface." },
  { title: "HyperPort", content: "This software will help you audit your documents metadata in our blockchain solution. Partners that are registered in the blockchain will be able to save, update and read the audit trail of documents, as well as view existing partners via a REST-interface. Partners need to generate an API-key first in order to authenticate themselves on the REST-interface." },
  { title: "MAAPI", content: "My Accessable And Protected Identity" }
];
export default class ContentMain extends Component {

  _renderHeader(item, expanded) {
    return (
      <View style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        backgroundColor: "#cfd8dc"
      }}>
        <Text style={{ fontWeight: "600" }}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
          : <Icon style={{ fontSize: 18 }} name="add-circle" />}
      </View>
    );
  }

  _renderContent(item) {
    return (
      <Text
        style={{
          backgroundColor: "#eceff1",
          padding: 10,
          fontStyle: "italic",
        }}
      >
        {item.content}
      </Text>
    );
  }

  render() {
    return (
      <Content style={styles.mainWrapper}>
        <Accordion
          dataArray={dataArray}
          animation={true}
          expanded={true}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
        />
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: '#718792',
    flex: 1
  },
  mainContent: {
    fontSize: 14,
    color: '#ffffff'
  }
});
