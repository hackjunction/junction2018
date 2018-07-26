import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';
import CalendarGrid from '../common/CalendarGrid';

import styles from './PreEvents.c.scss';

class PreEvents extends Component {
  componentWillMount() {
    // the first time we load the app, we need that tracks list
    //this.props.dispatch({ type: 'GET_TRACKS' });
  }
  render() {
    return (
      <Scroll.Element name="pre_events">
        <Block className={styles.block}>
          <BlockHeader title="PRE-EVENTS" />
          <CalendarGrid categories={{ hacktour: true, techrace: true, hacktalks: true }} />
          <Row center="xs">
            <Col xs={12} md={12}>
              <a href="https://www.hackjunction.com/calendar">
                <button className={styles.apply_button}>SEE FULL CALENDAR</button>
              </a>
            </Col>
          </Row>
        </Block>
      </Scroll.Element>
    );
  }
}

PreEvents.propTypes = {};

// export the connected class
function mapStateToProps() {
  //console.log('tracks', state.tracks);
  return {};
}

export default connect(mapStateToProps)(PreEvents);
