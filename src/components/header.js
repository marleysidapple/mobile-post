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
		//get the props by doing {this.props.propname}
		return (
				<View style={styles.headerContainer}>
					<Text style={styles.links}>More</Text>
					<Text style={styles.welcome}>{this.props.title}</Text>
					<Text style={styles.links}>Back</Text>
				</View>
			);
	}

}

const styles = {
    headerContainer: {
    	flexDirection: 'row',
	  	backgroundColor: '#f8f8f8',
	  	//justifyContent: 'center',
	  	//alignItems: 'center',
	  	height: 60,
	  	paddingTop: 20,
	  	shadowColor: '#000',
	  	shadowOffset: {width: 0, height: 2},
	  	shadowOpacity: 0.2,
	  	elevation: 2,
	  	position: 'relative'
	  },
	welcome: {
		flex: 1,
	  	fontSize: 16,
	  	color: '#43536F',
	  	textAlign: 'center'
	  },

	links: {
		textAlign:'center',
    	width: 64,
    	color: '#43536F',
	}
};

export default Header;

//AppRegistry.registerComponent('header', () => Header);