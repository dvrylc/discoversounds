import React from 'react';

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
          links
        </div>
      </div>
    );
  }
}

export default ArtistRow;
