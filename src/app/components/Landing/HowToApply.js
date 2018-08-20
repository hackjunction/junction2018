import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';
import styles from './HowToApply.c.scss';

const HowToApply = () => (
  <Scroll.Element name="how_to_apply">
    <Block className={styles.block}>
      <BlockHeader title="HOW TO APPLY" />
      <Row className="">
        <Col xs={12} md={8}>
          <img
            className={styles.timeline}
            src="https://staging.hackjunction.com/wp-content/uploads/2018/08/application-process-02.png"
          />
        </Col>
      </Row>
    </Block>
  </Scroll.Element>
);

export default HowToApply;
