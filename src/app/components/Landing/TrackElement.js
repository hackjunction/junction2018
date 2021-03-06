import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { scroller, Element as ScrollElement } from 'react-scroll';
import Link from '../common/CustomLink';
import styles from './TrackElement.c.scss';

// import Challenge from './challenges/Challenge';

class TrackElement extends Component {
  render() {
    var track = this.props.track;
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
    var style = {};
    if (track.image) {
      style = {
        backgroundImage: `url(${track.image})`
      };
    }

    return track.open ? (
      <Col xs={12} md={12} className={styles.open_container}>
        <ScrollElement name={track.slug} />
        <Row className={styles.header}>
          <Col xs={12} md={5}>
            <h1>{track.title}</h1>
          </Col>
          <Col xs={12}>
            <div className={styles.text_content} dangerouslySetInnerHTML={{ __html: track.description }} />
          </Col>
        </Row>
        <Row className={styles.challenges}>
          <Col xs={12}>
            {track.challenges && track.challenges.length ? (
              <Row>
                <Col xs={8} md={2}>
                  <h3>Challenges</h3>
                </Col>
              </Row>
            ) : null}
            {track.challenges &&
              track.challenges
                .sort((challenge1, challenge2) => {
                  function getPartner(challenge, props) {
                    var cha = props.challenges.filter(cha => cha.id === challenge.id);
                    cha = cha.length > 0 && cha[0];
                    var partners;
                    if (cha.partners && props.partners[cha.year]) {
                      partners = cha.partners.map(partner => {
                        return props.partners[cha.year].filter(p => p.id === partner.id)[0];
                      });
                      return partners[0].name;
                    } else {
                      return null;
                    }
                  }
                  return getPartner(challenge1, this.props) > getPartner(challenge2, this.props);
                })
                .map((challenge, i) => {
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
          <Col xs={12}>
            {track.mentors && track.mentors.length ? (
              <Row>
                <Col xs={8} md={2}>
                  <h3>{track.mentor_label || 'Mentors'}</h3>
                </Col>
              </Row>
            ) : null}
            {track.mentors &&
              track.mentors.map((mentor, i) => {
                var ment = this.props.mentors.filter(ment => ment.id === mentor.id);
                ment = ment.length > 0 && ment[0];
                var partners;
                if (ment.partners && this.props.partners[ment.year]) {
                  partners = ment.partners.map(partner => {
                    return this.props.partners[ment.year].filter(p => p.id === partner.id)[0];
                  });
                } else {
                  partners = [];
                }
                return (
                  <div key={i}>
                    <Row className={styles.challenge}>
                      <Col xs={12} md={3} className={styles.challenge_partner}>
                        {partners.length > 0 && (
                          <a href={partners[0].url}>
                            <img className={styles.logo} alt={partners[0].name} src={partners[0].logo} />
                          </a>
                        )}
                      </Col>
                      <Col xs={12} md={9}>
                        <div className={styles.challenge_title} dangerouslySetInnerHTML={{ __html: mentor.title }} />
                        <div className={styles.challenge_content} dangerouslySetInnerHTML={{ __html: ment.content }} />
                        <Link to={'/mentors/' + ment.slug}>READ MORE</Link>
                      </Col>
                    </Row>
                  </div>
                );
              })}
          </Col>
        </Row>
        <Row className={styles.link} center="xs" onClick={toggle}>
          <Link to={'/tracks/' + track.slug}>READ MORE</Link>
        </Row>
        <Row center="xs" onClick={toggle} className={styles.arrow}>
          <div className="fa fa-chevron-up" />
        </Row>
      </Col>
    ) : (
      <div onClick={toggle}>
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
  challenges: PropTypes.array,
  mentors: PropTypes.array,
  partners: PropTypes.array,
  toggleTrack: PropTypes.func
};

function mapStateToProps(state) {
  return {
    challenges: state.challenges || [],
    mentors: state.mentors || [],
    partners: state.partners || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTrack(slug) {
      dispatch({ type: 'TRACK_TOGGLE', slug });
    },
    dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackElement);
