import React from 'react';

import Imagelogo from '../../assets/images/book-LXP.svg';
import { links } from '../../assets/links/links';
import { Link } from 'react-router-dom';
import Image from '../../assets/images/image'

const NavbarItem = (props) => (
  <a className="navbar-item is-capitalized" href={`#${props.page}`}>
    {props.page}
  </a>
);

const NavbarBurger = (props) => (
  <button
    onClick={props.toggleMenu}
    className={`button navbar-burger ${props.active ? 'is-active' : ''}`}
  >
    <span />
    <span />
    <span />
  </button>
);

export default class Navbar extends React.Component {
  state = {
    activeMenu: false,
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      activeMenu: !prevState.activeMenu,
    }));
  };

  render() {
    
    const navbarItems = links.map((link) => (
      <li className="navbar-item" key={link.id}>
        <Link className="navbar-item" to={link.url}>
          {link.text}
        </Link>
      </li>
    ));

    return (
      <nav class="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-brand" to="/">
          <Image width={"50"} height={"50"} src={Imagelogo}></Image>
            <NavbarItem page="Learning Experience Platform" />
          </Link>
          
          <NavbarBurger
            active={this.state.activeMenu}
            toggleMenu={this.toggleMenu}
          />
        </div>
        <div
          className={`navbar-menu ${
            this.state.activeMenu ? 'is-active' : ''
          }`}
        >
          <div id="navbarExampleTransparentExample" className="navbar-end">{navbarItems}</div>
        </div>
      </nav>
    );
  }
}

