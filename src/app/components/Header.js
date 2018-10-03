import React from 'react';
//import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';
import Media from 'react-media';
import styles from './Header.c.scss';

const Header = () => (
  <Headroom>
    <div className={styles.header_wrapper}>
      <header className={styles.header}>
        <a href="https://hackjunction.com">
          <img
            className={styles.junction_logo}
            src="https://staging.hackjunction.com/wp-content/uploads/2017/08/junction_logo-1.png"
            alt="Logo"
          />
        </a>

        <Media query="(min-width: 901px)">
          <nav className={styles.site_nav}>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/challenges">CHALLENGES</Link>
              </li>
              <li>
                <Link to="/partners">PARTNERS</Link>
              </li>
            </ul>
          </nav>
        </Media>
        <Media query="(min-width: 901px)">
          <a
            className={styles.mlh}
            href="https://mlh.io/seasons/eu-2019/events?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2019-season&utm_content=gray"
          >
            <img
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-gray.svg"
              alt="Major League Hacking 2017 Hackathon Season"
            />
          </a>
        </Media>
        <a href="https://apply.hackjunction.com" className={styles.applyLink}>
          <div className={styles.apply}>
            <h2 className={styles.apply2}>APPLY</h2>
          </div>
        </a>
        <Media query="(max-width: 900px)">
          <span className={styles.site_nav} onClick={window.openNavigationMenu}>
            <span>MENU</span>
          </span>
        </Media>
      </header>
    </div>
  </Headroom>
);

export default Header;
