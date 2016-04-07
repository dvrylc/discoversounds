import React from 'react';

import ArtistRow from './ArtistRow';

class ArtistList extends React.Component {
  render() {
    if (this.props.error) {
      return (
        <div className="artist-list">
          <span className="error-message">{this.props.errorMessage}</span>
        </div>
      );
    } else {
      var artistRows = this.props.artists.map((artist, index) => {
        return <ArtistRow key={index} artist={artist} handleNewSearch={this.props.handleNewSearch}/>
      });
      
      return (
        <div className="artist-list">
          {artistRows}
        </div>
      );
    }
  }
}

export default ArtistList;
