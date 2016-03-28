import React from 'react';

class ArtistLink extends React.Component {
  render() {
    var artist = encodeURIComponent(this.props.artist);
    
    var link1 = `https://www.google.com.sg/search?q=${artist}`;
    var link2 = `https://www.youtube.com/results?search_query=${artist}`;
    var link3 = `spotify:search:${artist}`;
    
    return (
      <div className="links">
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
