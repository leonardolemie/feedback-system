import React, { Component } from 'react';

class Header extends Component {
  render() {
<<<<<<< HEAD
    return(
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="left brand-logo">Emaily</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#">Login with Google</a></li>
        </ul>
      </div>
    </nav>)
    ;
=======
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Emaily</a>
          <ul className="right">
            <li>
              <a>Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
>>>>>>> 3e2e93a04e41b4dc66dea9d4eb661f59e096304c
  }
}

export default Header;
