import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import Media from 'react-media';
import styles from './MobileNav.c.scss';

class MobileNav extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false
    };
    window.openNavigationMenu = this.openMenu;
  }

  openMenu = () => {
    this.setState({ isMenuOpen: true });
  };

  menuStateChanged = menuState => {
    this.setState({ isMenuOpen: menuState.isOpen });
  };

  render() {
    return (
      <Media query="(max-width: 900px)">
        <Menu
          pageWrapId="junction_website"
          outerContainerId="app"
          right
          onStateChange={this.menuStateChanged}
          isOpen={this.state.isMenuOpen}
          className={styles.site_nav}
        >
          <nav className={styles.site_nav}>
            <ul center="xs">
              <li>
                <Link to="/challenges">CHALLENGES</Link>
              </li>
              <li>
                <Link to="/partners">PARTNERS</Link>
              </li>
              <li>
                <a href="https://apply.hackjunction.com">APPLY</a>
              </li>
            </ul>
          </nav>
        </Menu>
      </Media>
    );
  }
}

export default MobileNav;
