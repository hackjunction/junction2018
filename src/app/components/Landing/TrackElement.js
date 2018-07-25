import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { scroller, Element as ScrollElement } from 'react-scroll';
import styles from './TrackElement.c.scss';

// import Challenge from './challenges/Challenge';

class TrackElement extends Component {
  render() {
    var track = this.props.track;
    var toggle = function() {
      this.props.toggleTrack(track.slug);
      setTimeout(() => {
        scroller.scrollTo(track.slug, {
          duration: 500,
          delay: 100,
          smooth: true
        });
      }, 1000);
    }.bind(this);
    var style = {};
    console.log('event:', track);
    if (track.image) {
      style = {
        backgroundImage: `url(${track.image})`
      };
    }
    console.log('style:', style);
    return track.open ? (
      <Col xs={12} md={12} className={styles.open_container}>
        <ScrollElement name={track.slug} />
        <Row center="xs">
          <h1>{track.title}</h1>
        </Row>
        <Row center="xs">
          <div className={styles.text_content} dangerouslySetInnerHTML={{ __html: track.content }} />
        </Row>
        <Row center="xs" onClick={toggle} className={styles.arrow}>
          <div className="fa fa-chevron-up" />
        </Row>
      </Col>
    ) : (
      <div onClick={toggle}>
        <ScrollElement name={track.slug} />
        <div className={`responsive ${styles.trackCell}`} style={style}>
          <div className={styles.awesome_overlay}>
            <div className={styles.inside}>
              <h2 dangerouslySetInnerHTML={{ __html: track.title }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TrackElement.propTypes = {
  track: PropTypes.object,
  toggleTrack: PropTypes.func
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTrack(slug) {
      dispatch({ type: 'TRACK_TOGGLE', slug });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackElement);
