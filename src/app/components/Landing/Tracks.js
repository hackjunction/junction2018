import React, { Component } from 'react';
import { Row } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TrackElement from './TrackElement';
import BlockHeader from '../viewBlocks/BlockHeader';
import Block from '../viewBlocks/Block';
import ElementGrid from '../common/ElementGrid';

import styles from './Tracks.c.scss';

class Tracks extends Component {
  componentWillMount() {
    // the first time we load the app, we need that tracks list
    this.props.dispatch({ type: 'GET_TRACKS' });
  }
  render() {
    var tracks = this.props.tracks.filter(track => {
      console.log(track);
      return track.year === '2018';
    });
    return (
      <Scroll.Element name="tracks">
        <Block className={styles.block}>
          <BlockHeader title="TRACKS" />
          <Row>{tracks.filter(track => track.open).map((track, i) => <TrackElement key={i} track={track} />)}</Row>
          <ElementGrid
            grid={[[4, 4, 4], [6, 6], [4, 4, 4], [6, 6], [4, 4, 4]]}
            elements={tracks.filter(track => !track.open).map((track, i) => <TrackElement key={i} track={track} />)}
          />
        </Block>
      </Scroll.Element>
    );
  }
}

Tracks.propTypes = {
  dispatch: PropTypes.func,
  tracks: PropTypes.array
};

// export the connected class
function mapStateToProps(state) {
  //console.log('tracks', state.tracks);
  return {
    tracks: state.tracks || []
  };
}

export default connect(mapStateToProps)(Tracks);
