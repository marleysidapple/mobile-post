/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Header from './components/header';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Mobileblog extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header txt ="hello"/>
        <Text style={styles.welcome}>Hello World Over There</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Open Sans',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
  	color: '#FE9804',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Mobileblog;


AppRegistry.registerComponent('Mobileblog', () => Mobileblog);
