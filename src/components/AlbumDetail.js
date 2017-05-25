import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Card from './Card';

class AlbumDetail extends Component {
	constructor(props){
		super(props);
	}

	render(){
		//we can enclose HTML in a normal <View> tag as well. 
		//we created a reusable component called <Card> and enclosed all the view code inside it
		return (
				<Card>
					<Text style={styles.songTitle}>{this.props.name}</Text>
					<Text style={styles.artistName}>{this.props.artist}</Text>
				</Card>
		);
	}
}

const styles = {
	detailWrapper : {
		height: 40,
		alignItems: 'flex-start',
	},
}

export default AlbumDetail;