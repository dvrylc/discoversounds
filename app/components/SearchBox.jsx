import React from 'react';
import SuperAgent from 'superagent/lib/client';

class SearchBox extends React.Component {
  // Constructor
  constructor() {
    super();
    
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  
  // Lifecycle
  componentDidUpdate() {
    if (this.props.triggerNewSearch) {
      this.triggerSearch();
    }
  }
  
  // Functions
  triggerSearch() {
    this.getArtistID(this.props.initialArtist)
      .then(this.getRelatedArtists)
      .then(this.props.handleRelatedArtists)
      .catch(this.props.handleSearchError);
  }
  
  getArtistID(initialArtist) {
    // Query for artist ID and return promise
    return new Promise((fulfill, reject) => {
      SuperAgent
        .get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(initialArtist)}&type=artist&limit=5`)
        .end((err, res) => {
          if (err) throw err;
          
          var matchingArtists = res.body.artists.items;
          
          matchingArtists.forEach(artist => {
            if (artist.name.toUpperCase() === initialArtist.toUpperCase()) {
              fulfill(artist.id);
            }
          });
          
          reject('Artist not found');
        });
    });
  }
  
  getRelatedArtists(artistID) {
    // Query for related artists and return promise
    return new Promise((fulfill, reject) => {
      SuperAgent
        .get(`https://api.spotify.com/v1/artists/${artistID}/related-artists`)
        .end((err, res) => {
          if (err) throw err;
          
          fulfill(res.body.artists);
        });
    });
  }
  
  // Event handlers
  handleChange(e) {
    this.props.handleSearchChange(e.target.value);
  }
  
  handleKeyDown(e) {
    /*
      If user hits Enter and artist field is not blank,
      query for Spotify artist ID
      then query for related artists
      then update main app's state
    */
    if (e.key === 'Enter' && this.props.initialArtist !== '') {
      // Blur the input
      e.target.blur();
      
      this.triggerSearch();
    }
  }
  
  // Render
  render() {
    return (
      <div className="search">
        <input
          value={this.props.initialArtist}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          placeholder="Enter an artist"
          autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
        />
      </div>
    );
  }
}

export default SearchBox;
