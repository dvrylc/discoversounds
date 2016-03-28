import React from 'react';

import ArtistRow from './ArtistRow';

class ArtistList extends React.Component {
  render() {
    var artistRows = this.props.artists.map((artist, index) => {
      return <ArtistRow key={index} artist={artist} />
    });
    
    return (
      <div className="artist-list">
        {artistRows}
      </div>
    );
  }
}

export default ArtistList;
