import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class AlbumDetail extends Component {
	constructor(props){
		super(props);
	}

	render(){

		const { title, artist, thumbnail_image } = this.props.allalbums;

		//we can enclose HTML in a normal <View> tag as well. 
		//we created a reusable component called <Card> and enclosed all the view code inside it
		return (
				<Card>
					<CardSection>
						<View>
							<Image style={styles.thumbnailStyle} source={{uri: this.props.allalbums.thumbnail_image}} />
						</View>

						<View style={styles.detailWrapper}>
							<Text style={styles.songTitle}>{artist}</Text>
							<Text style={styles.songTitle}>{title}</Text>
						</View>

						
					</CardSection>
				</Card>
		);
	}
}

const styles = {
	detailWrapper : {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},

	thumbnailStyle :{
		height: 50,
		width: 50,
		borderRadius: 10
	}
}

export default AlbumDetail;