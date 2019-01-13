import * as React from "react";
import * as ReactDOM from "react-dom";
import {Helmet} from 'react-helmet';
import Menu from './Menu';
import Stuff from './Stuff';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Bio from './Bio';

ReactDOM.render(
<div className="application">
  <Helmet>
    <style>{'body { background-color: #549493; overflow: hidden}'}</style>
  </Helmet>
  <NavBar/>
  <Router >
    <div>
      <Route exact path='/' component={Menu}/>
      <Route path='/stuff' component={Stuff}/>
      <Route path='/bio' component={Bio}/>
    </div>
  </Router >
</div>,
  document.getElementById("root")
);