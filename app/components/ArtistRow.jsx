import React from 'react';

import ArtistLink from './ArtistLink';

class ArtistRow extends React.Component {
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
        <span className="artist">{artist.name}</span>
        <ArtistLink artist={artist.name} handleNewSearch={this.props.handleNewSearch} />
      </div>
    );
  }
}

export default ArtistRow;
