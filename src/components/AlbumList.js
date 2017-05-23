import React, { Component } from 'react';
import {
	View, 
	Text
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
		 return this.state.albums.map(alb => 
		 	<AlbumDetail key={alb.url} name={alb.title} artist={alb.artist}/>
		 	//<Text key={alb.url}>{alb.title}</Text>
		 );
	}


	render(){
		return (
			<View style={styles.listContainer}>
				{this.renderAlbums()}
			</View>
		);
	}
}


const styles = {
	listContainer : {
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		paddingTop: 20,
		//backgroundColor: '#c4bcbc'
	}
};


export default Albumlist;