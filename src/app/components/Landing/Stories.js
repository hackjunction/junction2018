import React from 'react';
//import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
//import ElementGrid from '../common/ElementGrid';
//import NewsElement from '../common/NewsElement';
import Block from '../viewBlocks/Block';
import Mediumlist from '../common/MediumList';
import BlockHeader from '../viewBlocks/BlockHeader';
import styles from './Stories.c.scss';

const Stories = () => (
  <Scroll.Element name="media">
    <Block className={styles.block}>
      <BlockHeader title="THE LATEST FROM US" className={styles.blockHeader} />
      <Row className={styles.stories}>
        <Col xs>
          <Mediumlist />
        </Col>
      </Row>
    </Block>
  </Scroll.Element>
);

export default Stories;
