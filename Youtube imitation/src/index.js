import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './Components/SearchBar';
import VideoList from './Components/VideoList';
import VideoDetails from './Components/VideoDetails';

const API_KEY = 'AIzaSyBf8YdqVoCHopNtUpeLRrmHyBhGUgpedGM';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: '',
      selectedVideo: null
    };
    this.videoSearch('marijuana');
  }
  videoSearch(term) {

    YTSearch({ key: API_KEY, term: term },
      (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      });
  }
  render() {
    if (!this.state.videos) {
      return (<div>Loading....</div>)
    }
      const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);

    return (
      <div>
        <SearchBar onSearchTerm={videoSearch} />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
        />
      </div>
    )
  }
}

ReactDOM.render(< App />, document.querySelector('.container'))
