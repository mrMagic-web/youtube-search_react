import _ from 'lodash';
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyC4TRPijAFu59wzZnIKuyi2LACvNHa2ztg";
//Create a new component. It should produce some HTML


class App extends Component {
	constructor(props){
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};
		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		// JSON Call with use of YTSearch
		YTSearch({key: API_KEY, term: term}, (videos) => {
			//ES6 syntactic sugar, works like this.state ({ videos: videos });
			this.setState ({ 
				videos: videos, 
				selectedVideo: videos[0]
			});

		});
		
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		return (
		<div>  
			<SearchBar onSearchTermChange={videoSearch} />
			<VideoDetail video={this.state.selectedVideo}/>
			<VideoList 
			onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
			videos={this.state.videos} />
		</div>
		);
	}
}

//Needs to display this component
//It needs to be added to the DOM 
ReactDOM.render(<App />, document.querySelector('.container'));