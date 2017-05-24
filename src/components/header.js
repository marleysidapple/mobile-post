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
				<View style={styles.topNavBarContainer}>
					<Text style={styles.navBarButtons}>More</Text>
					<Text style={styles.navBarTitle}>{this.props.title}</Text>
					<Text style={styles.navBarButtons}>Back</Text>
				</View>
			);
	}

}

const styles = {
    topNavBarContainer: {
    	flexDirection: 'row',
	  	backgroundColor: '#f8f8f8',
	  	//justifyContent: 'center',
	  	//alignItems: 'center',
	  	height: 64,
	  	paddingTop: 30,
	  	shadowColor: '#000',
	  	shadowOffset: {width: 0, height: 2},
	  	shadowOpacity: 0.2,
	  	elevation: 2,
	  	position: 'relative'
	  },
	navBarTitle: {
		flex: 1,
	  	//fontSize: 16,
	  	fontWeight: 'bold',
	  	color: '#43536F',
	  	textAlign: 'center'
	  },

	navBarButtons: {
		textAlign:'center',
    	width: 64,
    	color: '#43536F',
	}
};

export default Header;

//AppRegistry.registerComponent('header', () => Header);