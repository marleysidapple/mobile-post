/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Header from './src/components/Header';
import Albumlist from './src/components/AlbumList';
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
      <View style = {styles.container}>
        <Header title ={'Albums'}/>
        <Albumlist/>
      </View>

    );
  }
}


const styles = {
  baseText: {
    fontFamily: 'Open Sans',
  },
  container: {
  	flex: 1
  }
};


export default Mobileblog;


AppRegistry.registerComponent('Mobileblog', () => Mobileblog);
