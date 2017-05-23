import React, { Component } from 'react';
import {
	View, 
	Text
} from 'react-native';
import axios from 'axios';


class Albumlist extends Component {

	

	constructor(props){
		super(props);
		this.state = {
			albums: []
		}
	}


	componentWillMount(){
		axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(res => this.setState({albums: res.data}));
	}


	renderAlbums(){
		// return this.state.albums.map(
		// 	album => <Text>{album.title}</Text>
		// );
	
		//key must be unique. Since there are no id, so passing url as a unique key
		 return this.state.albums.map(alb => 
		 	<Text key={alb.url}>{alb.title}</Text>
		 );
	}


	render(){
		//console.log(this.state.albums);
		return (
			<View>
				<Text>This is album list</Text>
				{this.renderAlbums()}
			</View>
		);
	}
}

export default Albumlist;