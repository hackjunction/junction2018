import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { scroller, Element as ScrollElement } from 'react-scroll';
import styles from './TrackElement.c.scss';

// import Challenge from './challenges/Challenge';

class TrackElement extends Component {
  render() {
    var track = this.props.track;
    console.log(track);
    var toggle = function() {
      this.props.toggleTrack(track.slug);
      setTimeout(() => {
        scroller.scrollTo('tracks', {
          duration: 200,
          delay: 0,
          smooth: true,
          offset: -50
        });
      }, 1000);
    }.bind(this);

    return (
      <Col xs={12} md={12} className={styles.open_container}>
        <ScrollElement name={track.slug} />
        <Row className={styles.challenges}>
          <Col xs={12} md={5}>
            <h1>{track.title}</h1>
          </Col>
          <Col xs={12}>
            {track.challenges.map((challenge, i) => {
              var cha = this.props.challenges.filter(cha => cha.id === challenge.id);
              cha = cha.length > 0 && cha[0];
              var partners;
              if (cha.partners && this.props.partners[cha.year]) {
                partners = cha.partners.map(partner => {
                  return this.props.partners[cha.year].filter(p => p.id === partner.id)[0];
                });
              } else {
                partners = [];
              }
              return (
                <Row key={i} className={styles.challenge}>
                  <Col xs={12} md={3} className={styles.challenge_partner}>
                    {partners.length > 0 && (
                      <a href={partners[0].url}>
                        <img className={styles.logo} alt={partners[0].name} src={partners[0].logo} />
                      </a>
                    )}
                  </Col>
                  <Col xs={12} md={9}>
                    <div className={styles.challenge_title} dangerouslySetInnerHTML={{ __html: challenge.title }} />
                    <div className={styles.challenge_content} dangerouslySetInnerHTML={{ __html: cha.content }} />
                    <Link to={'/challenges/' + cha.slug}>READ MORE</Link>
                  </Col>
                </Row>
              );
            })}
          </Col>
        </Row>
        <Row xs={12} md={12} className={styles.bottom} center="xs" onClick={toggle}>
          <Link to={'/tracks/' + track.slug}>
            Read more <div className="fa fa-chevron-right" />
          </Link>
        </Row>
      </Col>
    );
  }
}

TrackElement.propTypes = {
  track: PropTypes.object,
  challenges: PropTypes.array,
  partners: PropTypes.array,
  toggleTrack: PropTypes.func
};

function mapStateToProps(state) {
  return {
    challenges: state.challenges || [],
    partners: state.partners || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTrack(slug) {
      console.log('dispatched');
      dispatch({ type: 'TRACK_TOGGLE', slug });
    },
    dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackElement);
