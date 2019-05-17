import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

export default class Footer extends React.Component {
  
  render() {
    return (
      <div className="body">
        <footer>
            <center>
              <p className="f11">We are leaders in 10 countries:
                <a href="/Poland/">Poland</a>,
                <a href="/Turkey/">Turkey</a>,
                <a href="/Spain/">Spain</a>,
                <a href="/Italy/">Italy</a>,
                <a href="/Czech Republic/">Czech Republic</a>,
                <a href="/Mexico/">Mexico</a>,
                <a href="/Columbia/">Columbia</a>,
                <a href="/Brazil/">Brazil</a>,
                <a href="/Argentina/">Argentina</a>and
                <a href="/Chile/">Chile</a>.
                <br/>
                This site uses cookies to deliver services in accordance with this Privacy Policy. 
                You can specify the conditions for storing or accessing cookies on your browser.
                <br/>
                www.docplanner.com © 2018
              </p>
            </center>
    </footer>
      </div>
    );
  }
}