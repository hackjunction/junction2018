import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Block from './viewBlocks/Block';
import styles from './Footer.c.scss';

const Footer = () => (
  <Block className={styles.block} contentClassName={styles.blockContent}>
    <Row center="xs">
      <Col sm={4}>
        <h2>CONTACT</h2>
        <p className={styles.footer_email}>hello@hackjunction.com</p>
        <p className={styles.footer_email}>partnerships@hackjunction.com</p>
      </Col>
      <Col sm={4}>
        <h2>FOR MEDIA</h2>
        <a href="https://drive.google.com/open?id=0B2AGGlwAtVYLYTdsSE9tZGtoTE0" className={styles.footer_button}>
          PRESSKIT
        </a>
        <a href="https://www.flickr.com/people/151708924@N07/" className={styles.footer_button}>
          OFFICIAL PHOTOS
        </a>
      </Col>
      <Col sm={4}>
        <h2>SOCIAL</h2>
        <Row center="xs">
          <Col xs={6}>
            <a href="https://www.instagram.com/hackjunction/">
              <img
                className={styles.footer_social_image}
                src="https://staging.hackjunction.com/wp-content/uploads/2017/08/ig.png"
                alt="Instagram"
              />
            </a>
          </Col>
          <Col xs={6}>
            <a href="https://blog.hackjunction.com/">
              <img
                className={styles.footer_social_image}
                src="https://staging.hackjunction.com/wp-content/uploads/2017/08/md.png"
                alt="Medium"
              />
            </a>
          </Col>
          <Col xs={6}>
            <a href="https://www.facebook.com/hackjunction">
              <img
                className={styles.footer_social_image}
                src="https://staging.hackjunction.com/wp-content/uploads/2017/08/fb.png"
                alt="Facebook"
              />
            </a>
          </Col>
          <Col xs={6}>
            <a href="https://www.twitter.com/hackjunction">
              <img
                className={styles.footer_social_image}
                src="https://staging.hackjunction.com/wp-content/uploads/2017/08/fb.png"
                alt="Twitter"
              />
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
    {/*    <Row center="xs" className={styles.base}>
      <p>
        <a href="https://staging.hackjunction.com/wp-content/uploads/2018/05/Junction-Oy-Privacy-Policy-24052018.pdf">
          Privacy Policy
        </a>
        <br />
        <a href="https://staging.hackjunction.com/wp-content/uploads/2018/05/Junction-Oy-Terms-of-Service-24052018.pdf">
          Terms of Service
        </a>
      </p>
    </Row> */}
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