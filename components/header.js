import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Header extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
				<Text>Albums {this.props.txt}</Text>
			);
	}

}

export default Header;

//AppRegistry.registerComponent('header', () => Header);