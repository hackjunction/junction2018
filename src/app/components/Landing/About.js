import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';
import styles from './About.c.scss';

const About = () => (
  <Scroll.Element name="about">
    <Block className={styles.block}>
      <Row>
        <Col xs={12} className="bold text-secondary">
          <h4>ABOUT</h4>
        </Col>
      </Row>
      <BlockHeader title="JUNCTION?" />
      <Row className="junction_about">
        <Col xs={12} className="junction-description">
          Junction is a <span className="text-secondary">meeting point*</span> for thousands of developers, designers,
          and entrepreneurs from around the world.
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="junction-description">
          {' '}
          <span className="text-tetriary">* of people from 86 countries to be exact.</span>
        </Col>
      </Row>
    </Block>
  </Scroll.Element>
);

export default About;