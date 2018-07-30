import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';
import styles from './Volunteer.c.scss';

const Volunteer = () => (
  <Scroll.Element name="volunteer">
    <Block className={styles.block}>
      <Row>
        <Col md={9} xs={12}>
          <BlockHeader title="WANT TO BUILD JUNCTION WITH US?">
            <p>
              Junction could not exist without our year-round volunteer team, which grows up to 300 people closer to the
              main event. Our volunteer applications are now open, join the family!
            </p>
            <a href="https://hackjunction.com/volunteer">
              <button className={styles.volunteer_button}>VOLUNTEER</button>
            </a>
          </BlockHeader>
        </Col>
        <Col md={3} xs={0}>
          <div className={styles.leafImage}>
            <img
              src="https://staging.hackjunction.com/wp-content/uploads/2018/06/junction2018_website_blob-01-02.png"
              className={styles.leafImage}
              alt="Junction Blob pic"
            />
          </div>
        </Col>
      </Row>
    </Block>
  </Scroll.Element>
);

export default Volunteer;
