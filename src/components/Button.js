import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Button extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<TouchableOpacity style={styles.buttonStyle}>
				<Text style={styles.buttonText}>Click Me</Text>
			</TouchableOpacity>
		);
	}
}


const styles = {
	buttonStyle : {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5,
	},

	buttonText: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	}
};

export default Button;