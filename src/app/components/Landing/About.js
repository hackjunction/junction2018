import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';
import styles from './About.c.scss';

const About = () => (
  <Scroll.Element name="about">
    <Block className={styles.block}>
      <BlockHeader title="ABOUT" />
      <Row className="junction_about">
        <Col xs={12} className={styles.junctionDescription}>
          <br />
          Junction is a <span className="text-secondary">meeting point*</span> for thousands of developers, designers,
          and entrepreneurs from around the world.
          <br />
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="junction-description">
          {' '}
          <span className={styles.raise}>
            <br />
            <br />
            <br />* of people from 86 countries to be exact.
          </span>
        </Col>
      </Row>
    </Block>
  </Scroll.Element>
);

export default About;
