import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AlbumDetail extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<View>
				<Text>{this.props.name}</Text>
				<Text>{this.props.artist}</Text>
			</View>
		);
	}
}

export default AlbumDetail;