import React from 'react';
// import Scroll from 'react-scroll';
import Hero from './Hero';
import About from './About';
// import Apply from './Apply';
import Tracks from './Tracks';
import Partners from './Partners';
import FAQ from './FAQ';
import PreEvents from './PreEvents';
import Stories from './Stories';
import Volunteer from './Volunteer';

class Landing extends React.Component {
  render() {
    return (
      <div>
        {/*<nav className="junction_menu">
          <ul>
            <li>
              <Scroll.Link activeClass="active" to="hero" spy smooth duration={500}>
                Welcome
              </Scroll.Link>
            </li>
            <li>
              <Scroll.Link activeClass="active" to="about" spy smooth duration={500}>
                About
              </Scroll.Link>
            </li>
            <li>
              <Scroll.Link activeClass="active" to="apply" spy smooth duration={500}>
                Apply
              </Scroll.Link>
            </li>
            <li>
              <Scroll.Link activeClass="active" to="tracks" spy smooth duration={500}>
                Tracks
              </Scroll.Link>
            </li>
            <li>
              <Scroll.Link activeClass="active" to="partners" spy smooth duration={500}>
                Partners
              </Scroll.Link>
            </li>
            <li>
              <Scroll.Link activeClass="active" to="faq" spy smooth duration={500}>
                FAQ
              </Scroll.Link>
            </li>
            <li>
              <Scroll.Link activeClass="active" to="preevents" spy smooth duration={500}>
                Pre-Events
              </Scroll.Link>
            </li>
            <li>
              <Scroll.Link activeClass="active" to="stories" spy smooth duration={500}>
                Stories from the community
              </Scroll.Link>
            </li>
            <li>
              <Scroll.Link activeClass="active" to="volunteer" spy smooth duration={500}>
                Volunteer
              </Scroll.Link>
            </li>
          </ul>
        </nav>*/}
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="tracks">
          <Tracks />
        </div>
        <div id="partners">
          <Partners />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <div id="preevents">
          <PreEvents />
        </div>
        <div id="stories">
          <Stories />
        </div>
        <div id="volunteer">
          <Volunteer />
        </div>
      </div>
    );
  }
}

export default Landing;
