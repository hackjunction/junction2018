import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Mentor.c.scss';

class Mentor extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    var match = this.props.match;
    if (!match.params || !match.params.mentor) return;
    var id = match.params.mentor;

    if (!this.props.mentors[id]) {
      this.props.getMentor(id);
    }
    if (!this.props.partners || Object.keys(this.props.partners).length === 0) {
      this.props.getPartners();
    }
  }

  render() {
    var match = this.props.match;
    if (!match.params || !match.params.mentor) return <Redirect to="/" />;
    if (this.props.mentors.length > 0) {
      var mentor = this.props.mentors.filter(
        mentor => mentor.id == match.params.mentor || mentor.slug === match.params.mentor
      );
      mentor = mentor[0];
      if (mentor && mentor.status === 404) return <Redirect to="/404" />;
    } else mentor = {};
    if (mentor.slug && !isNaN(match.params.mentor)) {
      return <Redirect to={`/mentors/${mentor.slug}`} />;
    }

    console.log(mentor.mentor_bg);
    var style = {
      backgroundImage: `url(${mentor.mentor_bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    };
    console.log(style);

    var partners;
    console.log(this.props.partners, mentor);
    if (mentor.partners && this.props.partners && this.props.partners[mentor.year]) {
      partners = mentor.partners.map(partner => {
        return this.props.partners[mentor.year].filter(p => p.id === partner.id)[0];
      });
    } else {
      partners = [];
    }
    console.log(partners);
    var partnerSize = partners.length === 1 ? 12 : 6;

    return (
      <div className={styles.track_page}>
        <Grid className={styles.hero} fluid>
          <Row style={style} className={styles.background_top} center="xs">
            <Col className={styles.track_name} xs={12} sm={12} md={12} lg={12} />
          </Row>

          <Row center="xs" className={styles.track_header}>
            <Col className={styles.track_name} xs={12} sm={12} md={12}>
              <h1>
                <div dangerouslySetInnerHTML={{ __html: mentor.title }} />
              </h1>
            </Col>
            <div>
              {partners.map(partner => {
                return (
                  <Col className={styles.mentor_partner_inline} xs={partnerSize} sm={partnerSize} md={partnerSize}>
                    <img src={partner.logo} alt="" />
                  </Col>
                );
              })}
            </div>
            <Col className={([styles.track_content], [styles.mentor_content].join(' '))} xs={12} sm={12} md={12}>
              <div dangerouslySetInnerHTML={{ __html: mentor.text }} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

Mentor.propTypes = {
  mentors: PropTypes.array,
  partners: PropTypes.object,
  getMentor: PropTypes.func,
  getPartners: PropTypes.func,
  match: PropTypes.object
};

function mapStateToProps(state) {
  return {
    mentors: state.mentors || [],
    partners: state.partners || {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMentor(id) {
      dispatch({ type: 'GET_MENTOR', id });
    },
    getPartners() {
      dispatch({ type: 'GET_PARTNERS', year: 2018 });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mentor);
