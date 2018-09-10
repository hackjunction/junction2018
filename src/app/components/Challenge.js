import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Challenge.c.scss';

class Challenge extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    var match = this.props.match;
    if (!match.params || !match.params.challenge) return;
    var id = match.params.challenge;

    if (!this.props.challenges[id]) {
      this.props.getChallenge(id);
    }
    if (!this.props.partners || Object.keys(this.props.partners).length === 0) {
      this.props.getPartners();
    }
  }

  render() {
    var match = this.props.match;
    console.log('match:', match);
    if (!match.params || !match.params.challenge) return <Redirect to="/" />;
    if (this.props.challenges.length > 0) {
      var challenge = this.props.challenges.filter(
        challenge => challenge.id == match.params.challenge || challenge.slug === match.params.challenge
      );
      challenge = challenge[0];
      if (challenge && challenge.status === 404) return <Redirect to="/404" />;
    } else challenge = {};
    if (challenge.slug && !isNaN(match.params.challenge)) {
      return <Redirect to={`/challenges/${challenge.slug}`} />;
    }

    var style = {
      backgroundImage: `url(${challenge.challenge_bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    };

    console.log('props partners, challenge partners', this.props.partners, challenge.partners);
    console.log(challenge);
    var partners;
    if (challenge.partners && this.props.partners && this.props.partners[challenge.year]) {
      console.log('we have partners');
      partners = challenge.partners.map(partner => {
        console.log(partner);
        return this.props.partners[challenge.year].filter(p => p.id === partner.id)[0];
      });
    } else {
      partners = [];
    }

    return (
      <div className={styles.track_page}>
        <Grid className={styles.hero} fluid>
          <Row style={style} className={styles.background_top} center="xs">
            <Col className={styles.track_name} xs={12} sm={12} md={12} lg={12} />
          </Row>

          <Row center="xs" className={styles.track_header}>
            <Col className={styles.track_name} xs={12} sm={12} md={12}>
              <h1>
                <div dangerouslySetInnerHTML={{ __html: challenge.title }} />
              </h1>
            </Col>
            <div>
              {partners.map(partner => {
                return (
                  <Col className={styles.challenge_partner_inline} xs={12} sm={12} md={12}>
                    <img src={partner.logo} alt="" />
                  </Col>
                );
              })}
            </div>
            <Col className={([styles.track_content], [styles.challenge_content])} xs={12} sm={12} md={12}>
              <div dangerouslySetInnerHTML={{ __html: challenge.text }} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

Challenge.propTypes = {
  challenges: PropTypes.array,
  partners: PropTypes.object,
  getChallenge: PropTypes.func,
  getPartners: PropTypes.func,
  match: PropTypes.object
};

function mapStateToProps(state) {
  //console.log('challenges', state.challenges);
  return {
    challenges: state.challenges || [],
    partners: state.partners || {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getChallenge(id) {
      dispatch({ type: 'GET_CHALLENGE', id });
    },
    getPartners() {
      dispatch({ type: 'GET_PARTNERS', year: 2018 });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Challenge);
