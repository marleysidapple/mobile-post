/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Header from './src/components/header';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Mobileblog extends Component {
  render() {
  	//in order to render text. Just wrap the content inside <Text></Text> tag. 
    return (
      <View>
        <Header title ={'Albums'}/>
      </View>

    );
  }
}


const styles = {
  baseText: {
    fontFamily: 'Open Sans',
  }
};


export default Mobileblog;


AppRegistry.registerComponent('Mobileblog', () => Mobileblog);
