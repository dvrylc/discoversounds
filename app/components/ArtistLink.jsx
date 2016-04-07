import React from 'react';

class ArtistLink extends React.Component {
  // Constructor
  constructor() {
    super();
    
    this.handleNewSearch = this.handleNewSearch.bind(this);
  }
  
  // Event listeners
  handleNewSearch(e) {
    this.props.handleNewSearch(this.props.artist);
  }
  
  // Render
  render() {
    var artist = encodeURIComponent(this.props.artist);
    
    var link1 = `https://www.google.com.sg/search?q=${artist}`;
    var link2 = `https://www.youtube.com/results?search_query=${artist}`;
    var link3 = `spotify:search:${artist}`;
    
    return (
      <div className="links">
        <a href="javascript:void(0)" target="_blank" onClick={this.handleNewSearch}>
          <i className="fa fa-refresh" />
        </a>
      
        <a href={link1} target="_blank">
          <i className="fa fa-google" />
        </a>
        
        <a href={link2} target="_blank">
          <i className="fa fa-youtube-play" />
        </a>
        
        <a href={link3} target="_blank">
          <i className="fa fa-spotify" />
        </a>
      </div>
    );
  }
}

export default ArtistLink;
