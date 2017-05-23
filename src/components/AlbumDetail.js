import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AlbumDetail extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
				<View style={styles.detailWrapper}>
					<Text>{this.props.name}</Text>
					<Text>{this.props.artist}</Text>
				</View>
		);
	}
}

const styles = {
	detailWrapper : {
		height: 60,
		
	}
}

export default AlbumDetail;