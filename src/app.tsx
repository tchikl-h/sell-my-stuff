import * as React from "react";
import * as ReactDOM from "react-dom";
import {Helmet} from 'react-helmet';
import './Font.scss';
import Menu from './Menu';
import Stuff from './Stuff';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
<div className="application">
  <Helmet>
    <style>{'body { background-color: #549493; overflow: hidden}'}</style>
  </Helmet>
  <Router >
    <div>
      <Route exact path='/' component={Menu}/>
      <Route path='/stuff' component={Stuff}/>
    </div>
  </Router >
</div>,
  document.getElementById("root")
);