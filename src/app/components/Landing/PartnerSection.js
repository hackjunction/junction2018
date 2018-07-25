import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import styles from './Partners.c.scss';

class PartnerSection extends Component {
  componentWillMount() {
    // the first time we load the app, we need that tracks list
    if (!this.props.partners || !this.props.partners[this.props.year]) {
      this.props.dispatch({ type: 'GET_PARTNERS', year: this.props.year });
    }
  }
  render() {
    console.log('render');
    console.log(this.props.partners, this.props.year);
    console.log(this.props.partners[this.props.year]);

    if (!this.props.partners[this.props.year]) return null;
    var partners = this.props.partners[this.props.year].sort((a, b) => b.priority - a.priority);
    var groups = new Map();
    partners.forEach(partner => {
      var prio = Math.floor(Number(partner.priority) / 100);
      if (groups.get(prio)) {
        groups.get(prio).push(partner);
      } else {
        groups.set(prio, [partner]);
      }
    });

    var elems = this.props.categories
      .map((category, i) => {
        var prio = Math.floor(Number(category.priority) / 100);
        var partners = groups.get(prio);
        if (!partners) return null;
        return [
          partners.map(partner => {
            return (
              <Col key={i} xs={category.size_xs} md={category.size_md}>
                <a href={partner.url}>
                  <img src={partner.logo} alt={partner.name} className={`responsive ${styles.partnerImage}`} />
                </a>
              </Col>
            );
          })
        ];
      })
      .flatten();
    return (
      <Row className="junction_partners" center="xs">
        {elems}
      </Row>
    );
  }
}

PartnerSection.propTypes = {
  dispatch: PropTypes.func,
  partners: PropTypes.array,
  year: PropTypes.string,
  categories: PropTypes.array
};

// export the connected class
function mapStateToProps(state) {
  //console.log('tracks', state.tracks);
  return {
    partners: state.partners || []
  };
}

export default connect(mapStateToProps)(PartnerSection);
