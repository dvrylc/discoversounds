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
        <div className="links">
          <ArtistLink service="google" artist={artist.name} />
          <ArtistLink service="youtube" artist={artist.name} />
          <ArtistLink service="spotify" artist={artist.name} />
        </div>
      </div>
    );
  }
}

export default ArtistRow;
