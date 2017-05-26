import React, { Component } from 'react';
import {
	View, 
	Text,
	ScrollView
} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


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
		// or we can pass whole object
		
		/*
		 return this.state.albums.map(alb => 
		 	<AlbumDetail key={alb.url} name={alb.title} artist={alb.artist}/>
		 );
		*/

		//whenever there is scrollview, the parent view containing scrollview should have a style of flex: 1

		return this.state.albums.map(alb => 
		 	<AlbumDetail key={alb.url} allalbums = {alb}/>
		 );
	}


	render(){
		return (
					<ScrollView style={styles.listContainer}>
						{this.renderAlbums()}
					</ScrollView>
		);
	}
}


const styles = {
	listContainer : {
		//flex: 1,
		//alignItems: 'flex-start',
		//padding: 10

	}
};


export default Albumlist;