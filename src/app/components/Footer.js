import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Block from './viewBlocks/Block';
import styles from './Footer.c.scss';

const Footer = () => (
  <Block className={styles.block} contentClassName={styles.blockContent}>
    <Row center="xs">
      <Col xs={12} md={4}>
        <h2>CONTACT</h2>
        <p className={styles.footer_email}>hello@hackjunction.com</p>
        <p className={styles.footer_email}>partnerships@hackjunction.com</p>
      </Col>
      <Col xs={12} md={4}>
        <h2>FOR MEDIA</h2>
        <a href="https://www.flickr.com/people/151708924@N07/" className={styles.footer_button}>
          OFFICIAL PHOTOS
        </a>
      </Col>
      <Col xs={12} md={4}>
        <h2>SOCIAL</h2>
        <Row center="xs">
          <Col xs={4}>
            <a href="https://www.instagram.com/hackjunction/">
              <img
                className={styles.footer_social_image}
                src="https://staging.hackjunction.com/wp-content/uploads/2018/06/glyph-logo_May2016.svg"
                alt="Instagram"
              />
            </a>
          </Col>
          <Col xs={4}>
            <a href="https://blog.hackjunction.com/">
              <img
                className={styles.footer_social_image}
                src="https://staging.hackjunction.com/wp-content/uploads/2018/06/Monogram.png"
                alt="Medium"
              />
            </a>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={4}>
            <a href="https://www.facebook.com/hackjunction">
              <img
                className={styles.footer_social_image}
                src="https://staging.hackjunction.com/wp-content/uploads/2018/06/flogo-HexRBG-Wht-58.svg"
                alt="Facebook"
              />
            </a>
          </Col>
          <Col xs={4}>
            <a href="https://www.twitter.com/hackjunction">
              <img
                className={styles.footer_social_image}
                src="https://staging.hackjunction.com/wp-content/uploads/2018/06/Twitter_Logo_WhiteOnImage.png"
                alt="Twitter"
              />
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row center="xs">
      <p>
        <a href="https://hackjunction.com/policy">Privacy Policy</a>
        <br />
        <a href="https://hackjunction.com/terms">Terms and Conditions</a>
        <br />
        <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a>
      </p>
    </Row>
    <Row center="xs" className={styles.base}>
      <p>
        Designed and developed with 💕 &amp; ☕ by the amazing Junction Team
        {/*        <br />
        Released as <a href="https://github.com/hackjunction/Synergy">Open Source project under the MIT License</a>. */}
      </p>
    </Row>
  </Block>
);

export default Footer;
