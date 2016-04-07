import React from 'react';

import ArtistLink from './ArtistLink';

class ArtistRow extends React.Component {
  // Constructor
  constructor() {
    super();
    
    this.handleNewSearch = this.handleNewSearch.bind(this);
  }
  
  // Event listeners
  handleNewSearch(e) {
    this.props.handleNewSearch(e.target.innerHTML);
  }
  
  // Render
  render() {
    var artist = this.props.artist;
    var styles = {
      background: `url('${artist.images[artist.images.length - 1].url}')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
    
    return (
      <div className="artist-row">
        <div className="img" style={styles} />
        <span className="artist" onClick={this.handleNewSearch}>{artist.name}</span>
        <ArtistLink artist={artist.name} />
      </div>
    );
  }
}

export default ArtistRow;
