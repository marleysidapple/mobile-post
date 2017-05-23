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
		return this.state.albums.map(
			album => <Text>{album.title}</Text>
		);
	}


	render(){
		console.log(this.state.albums);
		return (
			<View>
				<Text>This is album list</Text>
				{this.renderAlbums()}
			</View>
		);
	}
}

export default Albumlist;