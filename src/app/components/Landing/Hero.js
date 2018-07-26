import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import Block from '../viewBlocks/Block';
import styles from './Hero.c.scss';

const Hero = () => (
  <Scroll.Element name="hero">
    <Block className={styles.block}>
      <Row center="xs" className="junction_welcome">
        <Col xs={12}>
          <div>
            <img
              src="https://staging.hackjunction.com/wp-content/uploads/2018/07/junction2018_website_blob-jee.svg"
              alt="Junction Blob pic"
            />
          </div>
          <br />
        </Col>
      </Row>
    </Block>
  </Scroll.Element>
);

export default Hero;
