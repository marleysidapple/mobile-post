import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Button extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<TouchableOpacity>
				<Text>This is button</Text>
			</TouchableOpacity>
		);
	}
}

export default Button;