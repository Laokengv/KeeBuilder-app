import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';

import Cases from '../BuilderPages/Cases';
import Switches from '../BuilderPages/Switches';
import Stabilizers from '../BuilderPages/Stabilizers';
import Keycaps from '../BuilderPages/Keycaps';

function BuilderPage() {
  return (
    <>
      <Router>
        <div className='BuilderPage'>
          <Route exact path="/cases">
            <Cases />
          </Route>
          <Route exact path="/switches">
            <Switches />
          </Route>
          <Route exact path="/stabilizers">
            <Stabilizers />
          </Route>
          <Route exact path="/keycaps">
            <Keycaps />
          </Route>
        </div>
      </Router>
    </>
  );
}

export default BuilderPage;