import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import CookieConsent from 'react-cookie-consent';
import Landing from './Landing';
import Challenges from './Challenges';
import Challenge from './Challenge';
import AllPartners from './Partners';
import NotFound from './NotFound';
import MobileNav from './MobileNav';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  statistics() {
    //google tag manager
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-WL9HBHS');

    //hotjar
    (function(h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function() {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 889102, hjsv: 6 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script');
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  }
  componentDidMount() {
    if (document.cookie.indexOf('consentAccepted') !== -1) {
      this.statistics();
    }
  }
  render() {
    return (
      <div>
        <MobileNav />
        <div className="junction_website" id="junction_website">
          <link href="https://fonts.googleapis.com/css?family=Montserrat:300,700,900" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet" />
          <div>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/challenges" component={Challenges} />
              <Route path="/challenges/:challenge" component={Challenge} />
              <Route path="/partners" component={AllPartners} />
              <Route path="/404" component={NotFound} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <div id="footer">
            <Footer />
          </div>
        </div>
        <CookieConsent
          buttonText="OK"
          style={{
            background: '#232323',
            color: '#fbfbfb',
            textAlign: 'center'
          }}
          cookieName="consentAccepted"
          buttonStyle={{
            color: '#fbfbfb',
            background: '#35E2DF',
            fontSize: '20px',
            textAlign: 'center',
            margin: 'auto',
            position: 'relative',
            right: 'initial',
            padding: '5px',
            width: '100px',
            'margin-top': '10px'
          }}
          onAccept={this.statistics}
        >
          <Row>
            <Col xs={12}>
              <div
                style={{
                  maxWidth: '80%',
                  margin: 'auto'
                }}
              >
                We use cookies from external service providers in order to collect statistics about the usage of the
                site. This information is anonymized, and cannot be connected to individual users.
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div
                style={{
                  maxWidth: '80%',
                  margin: 'auto'
                }}
              >
                View our updated{' '}
                <a
                  style={{ color: '#35E2DF' }}
                  href="https://staging.hackjunction.com/wp-content/uploads/2018/05/Junction-Oy-Privacy-Policy-24052018.pdf"
                >
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a
                  style={{ color: '#35E2DF' }}
                  href="https://staging.hackjunction.com/wp-content/uploads/2018/05/Junction-Oy-Terms-of-Service-24052018.pdf"
                >
                  Terms of Service
                </a>{' '}
              </div>
            </Col>
          </Row>
        </CookieConsent>
      </div>
    );
  }
}

export default App;
