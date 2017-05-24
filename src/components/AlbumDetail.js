import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AlbumDetail extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
				<View style={styles.detailWrapper}>
					<Text style={styles.songTitle}>{this.props.name}</Text>
					<Text style={styles.artistName}>{this.props.artist}</Text>
				</View>
		);
	}
}

const styles = {
	detailWrapper : {
		height: 40,
		alignItems: 'flex-start',
	},

	songTitle: {

	},

	artistName: {
		
	}
}

export default AlbumDetail;