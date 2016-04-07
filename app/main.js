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
    this.handleSearchError = this.handleSearchError.bind(this);
    
    this.state = {
      error: false,
      errorMessage: '',
      relatedArtists: []
    }
  }
  
  // Event listeners
  handleRelatedArtists(artists) {
    this.setState({
      error: false,
      errorMessage: '',
      relatedArtists: artists
    });
  }
  
  handleSearchError(err) {
    this.setState({
      error: true,
      errorMessage: err
    });
  }
  
  render() {
    return (
      <div id="app">
        <Header />
        
        <SearchBox
          handleRelatedArtists={this.handleRelatedArtists}
          handleSearchError={this.handleSearchError}
        />
        
        <ArtistList
          error={this.state.error}
          errorMessage={this.state.errorMessage}
          artists={this.state.relatedArtists}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app-container'));
