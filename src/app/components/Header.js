import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Headroom from 'react-headroom';
import styles from './Header.c.scss';
import { Link } from 'react-router-dom';
import Media from 'react-media';

const Header = () => (
  <Headroom>
    <div className={styles.header_wrapper}>
      <header className={styles.header}>
        <Link to="/">
          <img
            className={styles.junction_logo}
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/junction_logo-1.png"
            alt="Logo"
          />
        </Link>
        <Media query="(min-width: 901px)">
          <nav className={styles.site_nav}>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/team">CHALLENGES</Link>
              </li>
              <li>
                <Link to="/2017">PARTNERS</Link>
              </li>
            </ul>
          </nav>
        </Media>
        <Media query="(max-width: 900px)">
          <span onClick={window.openNavigationMenu}>MENU</span>
        </Media>
        {/*}<a
            className={styles.mlh}
            href="https://mlh.io/seasons/eu-2018/events?utm_source=na-2018&utm_medium=TrustBadge&utm_campaign=na-2018&utm_content=gray"
          >
            <img
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2018/gray.svg"
              alt="Major League Hacking 2017 Hackathon Season"
            />
          </a>*/}
      </header>
    </div>
  </Headroom>
);

export default Header;
