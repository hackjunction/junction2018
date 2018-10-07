import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import Block from '../viewBlocks/Block';
import styles from './Hero.c.scss';

const Hero = () => (
  <Scroll.Element name="hero">
    <Block className={styles.block}>
      <Row center="xs" className="junction_welcome">
        <Col xs={12} md={6}>
          <div>
            <img
              src="https://staging.hackjunction.com/wp-content/uploads/2018/10/jellysfish.png"
              alt="Junction Jellyfish pic"
              className={styles.pic}
            />
          </div>
        </Col>
        <Col xs={12} md={6} className={styles.junctionDescription}>
          <div>
            <div className={styles.cont}>
              <h1 className={styles.head}>JUNCTION 2018</h1>
              <div className={styles.parag}>
                Applications for Junction 2018 are closed! <br />
                Junction 2018 will gather over 1300 developers, designers and techies under one roof for an awesome
                weekend of creating. <br />
                <br />
                Stay posted for further updates! <br />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Block>
  </Scroll.Element>
);

export default Hero;
