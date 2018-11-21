import React from 'react';
// import Scroll from 'react-scroll';
import Hero from './Hero';
import About from './About';
import Tracks from './Tracks';
import Partners from './Partners';
import HowToApply from './HowToApply';
import Faqs from './Faqs';
import PreEvents from './PreEvents';
import Stories from './Stories';
import Volunteer from './Volunteer';

class Landing extends React.Component {
  render() {
    //redirect to live site for now
    window.location.assign('https://live.hackjunction.com');
    return null;

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
          <Tracks year="2018" />
        </div>
        <div id="partners">
          <Partners />
        </div>
        <div id="how_to_apply">
          <HowToApply />
        </div>
        <div id="faq">
          <Faqs />
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
