import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class AlbumDetail extends Component {
	constructor(props){
		super(props);
	}

	render(){
		//we can enclose HTML in a normal <View> tag as well. 
		//we created a reusable component called <Card> and enclosed all the view code inside it
		return (
				<Card>
					<CardSection>
						<View>
							<Text>For ims</Text>
						</View>

						<View>
							<Text>Title 1</Text>
							<Text>Title 2</Text>
						</View>

						<Text style={styles.songTitle}>{this.props.name}</Text>
						<Text style={styles.songTitle}>{this.props.name}</Text>
					</CardSection>
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