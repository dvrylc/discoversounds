import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

import Header from './components/Header';
import SearchBox from './components/SearchBox';
import ArtistList from './components/ArtistList';

class App extends React.Component {
  constructor() {
    super();
    
    this.handleRelatedArtists = this.handleRelatedArtists.bind(this);
    
    this.state = {
      relatedArtists: []
    }
  }
  
  // Event listeners
  handleRelatedArtists(artists) {
    this.setState({
      relatedArtists: artists
    });
  }
  
  render() {
    return (
      <div id="app">
        <Header />
        <SearchBox handleRelatedArtists={this.handleRelatedArtists} />
        <ArtistList artists={this.state.relatedArtists} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app-container'));
