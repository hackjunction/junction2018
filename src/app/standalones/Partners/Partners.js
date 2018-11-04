import React, { Component } from 'react';
import Scroll from 'react-scroll';
import { connect } from 'react-redux';
import PartnerSection from '../../components/Landing/PartnerSection';

class Partners extends Component {
  render() {
    return (
      <Scroll.Element name="partners">
        <PartnerSection
          categories={[{ priority: 300, size_md: 4, size_xs: 6 }, { priority: 200, size_md: 3, size_xs: 4 }]}
          year="2018"
        />
      </Scroll.Element>
    );
  }
}

// export the connected class
function mapStateToProps() {
  //console.log('tracks', state.tracks);
  return {};
}

export default connect(mapStateToProps)(Partners);
