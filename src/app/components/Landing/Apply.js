import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';

import styles from './Apply.c.scss';

class Apply extends Component {
  componentWillMount() {}
  render() {
    return (
      <Scroll.Element name="tracks">
        <Block className={styles.block} contentClassName={styles.block}>
          <Row>
            <Col xs={12} md={6} className={styles.text_section}>
              <BlockHeader
                className={styles.title}
                titleStyle={styles.title}
                title="READY TO START YOUR JUNCTION JOURNEY?"
              >
                {
                  'Applications for Junction 2018 are now open! Junction 2018 will gather over 1300 developers, designers and techies under one roof for an awesome weekend of creating. Want to experience a hackathon like no other? Get applying!'
                }
              </BlockHeader>
              <div className={styles.appButton}>
                <a className={styles.apply_button} href="https://apply.hackjunction.com/">
                  {'APPLY NOW'}
                </a>
              </div>
            </Col>
            <Col
              xs={12}
              md={6}
              style={{
                'background-image':
                  'url(https://staging.hackjunction.com/wp-content/uploads/2018/06/junction2018_website_hands-01.svg)',
                'background-size': 'auto 100%',
                'background-repeat': 'no-repeat'
              }}
            />
          </Row>
        </Block>
      </Scroll.Element>
    );
  }
}

Apply.propTypes = {};

// export the connected class
function mapStateToProps() {
  //console.log('tracks', state.tracks);
  return {};
}

export default connect(mapStateToProps)(Apply);
