import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import styles from './ChallengeElement.c.scss';

class ChallengeElement extends Component {
  componentWillMount() {
    if (!this.props.challenges[this.props.post_id]) {
      this.props.getChallenge(this.props.post_id);
    }
    if (!this.props.partners || Object.keys(this.props.partners).length === 0) {
      this.props.getPartners();
    }
  }
  // render
  render() {
    const { post_id } = this.props;
    var data = {};

    if (this.props.challenges[post_id]) {
      data = this.props.challenges[post_id];
    }
    var partners;
    if (data.partners && this.props.partners && this.props.partners[data.year]) {
      partners = data.partners.map(partner => {
        return this.props.partners[data.year].filter(p => p.id === partner.id)[0];
      });
    } else {
      partners = [];
    }

    return (
      <Col className={styles.chief + ' ' + styles.collage} xs={12}>
        <Row center="xs" middle="xs">
          <Col xs={8} md={4}>
            {partners.map((partner, i) => {
              return <img key={i} src={partner.logo} alt="" className={styles['partner-logo']} />;
            })}
          </Col>
          <Col xs={12} md={8}>
            <h2 className={styles.left}>
              {' '}
              <div dangerouslySetInnerHTML={{ __html: data.title }} />
            </h2>
            <div className={styles.left} dangerouslySetInnerHTML={{ __html: data.content }} />
          </Col>
        </Row>
        <Row className={styles.fullwidth}>
          <hr className={styles.fullwidth} />
        </Row>
        <Row className={styles.fullwidth}>
          <Col xs={12} md={3} lg={3}>
            {data.prize && (
              <div>
                <h3 className={styles.left}> Prize </h3>
                {data.prize.split('|').map(text => {
                  return (
                    <p className={styles.left} key={text}>
                      {' '}
                      {text}{' '}
                    </p>
                  );
                })}
              </div>
            )}
          </Col>
          <Col xs={12} md={6} lg={6}>
            {data.criteria && (
              <div>
                <h3 className={styles.left}> Criteria </h3>
                {data.criteria.split('|').map(text => {
                  return (
                    <p className={styles.left} key={text}>
                      {' '}
                      {text}{' '}
                    </p>
                  );
                })}
              </div>
            )}
          </Col>
          <Col xs={12} md={3} lg={3} className={styles.goToParent}>
            <Link to={`/challenges/${data.slug}`} key={data.id}>
              <button className={styles.goTo}>
                <FontAwesome name="arrow-right" size="2x" />
              </button>
            </Link>
          </Col>
        </Row>
      </Col>
    );
  }
}

// prop checks
ChallengeElement.propTypes = {
  post_id: PropTypes.number,
  challenges: PropTypes.array,
  partners: PropTypes.array,
  getChallenge: PropTypes.func,
  getPartners: PropTypes.func
};

function mapStateToProps(state) {
  return {
    challenges: state.challenges || [],
    partners: state.partners || []
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
)(ChallengeElement);
