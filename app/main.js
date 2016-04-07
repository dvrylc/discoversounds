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
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchError = this.handleSearchError.bind(this);
    this.handleNewSearch = this.handleNewSearch.bind(this);
    
    this.state = {
      error: false,
      errorMessage: '',
      initialArtist: '',
      relatedArtists: [],
      triggerNewSearch: false
    }
  }
  
  // Event listeners
  handleRelatedArtists(artists) {
    this.setState({
      error: false,
      errorMessage: '',
      relatedArtists: artists,
      triggerNewSearch: false
    });
  }
  
  handleSearchChange(artist) {
    this.setState({
      initialArtist: artist,
      triggerNewSearch: false
    });
  }
  
  handleSearchError(err) {
    this.setState({
      error: true,
      errorMessage: err,
      initialArtist: '',
      relatedArtists: [],
      triggerNewSearch: false
    });
  }
  
  handleNewSearch(artist) {
    this.setState({
      initialArtist: artist,
      triggerNewSearch: true
    });
  }
  
  render() {
    return (
      <div id="app">
        <Header />
        
        <SearchBox
          initialArtist={this.state.initialArtist}
          triggerNewSearch={this.state.triggerNewSearch}
          handleRelatedArtists={this.handleRelatedArtists}
          handleSearchChange={this.handleSearchChange}
          handleSearchError={this.handleSearchError}
        />
        
        <ArtistList
          error={this.state.error}
          errorMessage={this.state.errorMessage}
          artists={this.state.relatedArtists}
          handleNewSearch={this.handleNewSearch}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app-container'));
