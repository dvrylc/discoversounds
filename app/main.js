import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

import Header from './components/Header';
import SearchBox from './components/SearchBox';

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
      <div>
        <Header />
        <SearchBox handleRelatedArtists={this.handleRelatedArtists} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
