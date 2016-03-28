import React from 'react';

class ArtistLink extends React.Component {
  render() {
    var artist = encodeURIComponent(this.props.artist);
    
    switch(this.props.service) {
      case 'google':
        var link = `https://www.google.com.sg/search?q=${artist}`
        var comp = (
          <a href={link} target="_blank">
            <i className="fa fa-google" />
          </a>
        );
        break;
      
      case 'youtube':
        var link = `https://www.youtube.com/results?search_query=${artist}`
        var comp = (
          <a href={link} target="_blank">
            <i className="fa fa-youtube-play" />
          </a>
        );
        break;
      
      case 'spotify':
        var link = `spotify:search:${artist}`
        var comp = (
          <a href={link} target="_blank">
            <i className="fa fa-spotify" />
          </a>
        );
        break;
    }
    
    return comp;
  }
}

export default ArtistLink;
