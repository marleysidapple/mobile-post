import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class AlbumDetail extends Component {
	constructor(props){
		super(props);
	}

	render(){

		const { title, artist, thumbnail_image, image } = this.props.allalbums;

		//we can enclose HTML in a normal <View> tag as well. 
		//we created a reusable component called <Card> and enclosed all the view code inside it
		return (
				<Card>
					<CardSection>
						<View style={styles.imageWrapper}>
							<Image style={styles.thumbnailStyle} source={{uri: this.props.allalbums.thumbnail_image}} />
						</View>

						<View style={styles.detailWrapper}>
							<Text style={styles.songTitle}>{title}</Text>
							<Text style={styles.songArtist}>{artist}</Text>
						</View>
					</CardSection>

					<CardSection>
						<Image style={styles.artWorkImage} source={{uri: image}} />
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
	},
	imageWrapper : {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	songTitle: {
		fontSize: 15,
		fontWeight: 'bold'
	},

	artWorkImage: {
		height: 300,
		flex: 1, //to stretch image from all the way from left to right
		width: null, ////to stretch image from all the way from left to right (same)
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5
	}
}

export default AlbumDetail;