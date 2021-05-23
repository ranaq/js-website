import React, { Component,useState, useEffect, useRef  } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

import avatar from '../assets/images/logo_small.png';
import config from '../../config';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'About', href: 'about' },
        { content: 'Services', href: 'services' },
        { content: 'Experience', href: 'experience' },

        { content: 'Skills', href: 'skills' },
        { content: 'Contact', href: 'contact' },

      ],
      isCollapsed: true,
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.globalClickListener = this.globalClickListener.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.globalClickListener)
  }
  globalClickListener = (e) => {
    console.log('global click')
    this.setState({isCollapsed: true}, () => {
      document.removeEventListener('click', this.globalClickListener)
    })
  }
  toggleNavbar = (e) => {
    this.setState(prevState => ({isCollapsed: !prevState.isCollapsed}), () => {
      if (!this.state.isCollapsed) {
        console.log('state is collapsed')
        document.addEventListener('click', this.globalClickListener)
      }
    })
  }

  render() {
    const { tabs, isCollapsed } = this.state;
    return (

      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand" href="#page-top">
          {/* <span className="d-block d-lg-none">
            {config.firstName} {config.lastName}
          </span>  INSERT LOGO HERE*/}
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile square mx-auto mb-2"
              src={avatar}
              alt=""
            />
          </span>
        </a>
        <button
          className={`navbar-toggler navbar-toggler-right ${
            isCollapsed ? 'collapsed' : ''
            }`}
          type="button"
          data-toggle="collapse"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`}
          id="navbarSupportedContent">
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
            className="navbar-nav"
          >
            {tabs.map((tab, i) => {
              const { href, content } = tab;
              return (
                <li className="nav-item" key={href} >
                  <Scroll type="id" element={href}>
                    <a className="nav-link" href={`#${href}`}>
                      {content}
                    </a>
                  </Scroll>
                </li>
              );
            })}
          </Scrollspy>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
