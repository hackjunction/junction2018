import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Track.c.scss';
import TrackChallenges from './TrackChallenges';

class Track extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    if (this.props.tracks.length == 0) {
      this.props.getTracks();
    }
    if (!this.props.mentors || this.props.mentors.length === 0) {
      this.props.dispatch({ type: 'GET_MENTORS' });
    }
    if (!this.props.partners || !this.props.partners[2018]) {
      this.props.dispatch({ type: 'GET_PARTNERS', year: 2018 });
    }
  }

  render() {
    var match = this.props.match;
    if (!match.params || !match.params.track) return <Redirect to="/" />;
    if (this.props.tracks.length > 0) {
      var track = this.props.tracks.filter(track => track.slug === match.params.track);
      if (track.length === 0) return <Redirect to="/404" />;
      else track = track[0];
    } else track = {};

    var style = {
      backgroundImage: `url(${track.image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    };

    return (
      <div className={styles.track_page}>
        <Grid className={styles.hero} fluid>
          <Row style={style} className={styles.background_top}>
            <Col className={styles.track_name} xs={12} sm={12} md={12} lg={12} />
          </Row>
          <Row center="xs" className={styles.track_header}>
            <Col className={styles.track_name} xs={12} sm={12} md={12}>
              <h1 className={styles.h1}>{track.title}</h1>
            </Col>
            <Col className={styles.track_content} xs={12} sm={12} md={12}>
              <div dangerouslySetInnerHTML={{ __html: track.description }} />
            </Col>
            {track.mentors && track.mentors.length ? (
              <Col xs={12} md={12}>
                <h3>{track.mentor_label || 'Mentors'}</h3>
              </Col>
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
                var partnerSize = partners.length === 1 ? 12 : 6;
                return (
                  <div key={i}>
                    {partners.map(partner => {
                      return (
                        <Col
                          className={styles.challenge_partner_inline}
                          xs={partnerSize}
                          sm={partnerSize}
                          md={partnerSize}
                        >
                          <a href={partner.url}>
                            <img src={partner.logo} alt="" />
                          </a>
                        </Col>
                      );
                    })}
                  </div>
                );
              })}
            <TrackChallenges track={track} />
          </Row>
        </Grid>
      </div>
    );
  }
}

Track.propTypes = {
  tracks: PropTypes.array,
  getTracks: PropTypes.func,
  mentors: PropTypes.array,
  partners: PropTypes.array,
  match: PropTypes.object,
  dispatch: PropTypes.func
};

function mapStateToProps(state) {
  //console.log('tracks', state.tracks);
  return {
    tracks: state.tracks || [],
    challenges: state.challenges,
    mentors: state.mentors || [],
    partners: state.partners || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTracks() {
      dispatch({ type: 'GET_TRACKS' });
    },
    dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Track);
