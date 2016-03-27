import React from 'react';
import Logo from '../logo.png';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={Logo} />
        <span>
          for the love of music,
          by <a href="https://darylchan.net">@dvrylc</a>
        </span>
      </div>
    );
  }
}

export default Header;
