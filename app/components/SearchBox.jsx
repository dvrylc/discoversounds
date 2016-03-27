import React from 'react';
import SuperAgent from 'superagent/lib/client';

class SearchBox extends React.Component {
  // Constructor
  constructor() {
    super();
    
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    
    this.state = {
      initialArtist: ''
    }
  }
  
  // Functions
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
    this.setState({
      initialArtist: e.target.value
    });
  }
  
  handleKeyDown(e) {
    /*
      If user hits Enter and artist field is not blank,
      query for Spotify artist ID
      then query for related artists
      then update main app's state
    */
    if (e.key === 'Enter' && this.state.initialArtist) {
      this.getArtistID(this.state.initialArtist)
        .then(this.getRelatedArtists)
        .then(this.props.handleRelatedArtists)
        .catch(err => console.err(err));
    }
  }
  
  // Render
  render() {
    return (
      <input
        value={this.state.initialArtist}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        placeholder="Enter an artist"
      />
    );
  }
}

export default SearchBox;
