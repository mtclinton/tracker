import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";

import history from './history';

import New from "./pages/Home";

function NotFound() {
    return (
        <div>
            <h1>That page was not found</h1>
        </div>
    );
}


ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
            <Route
                path="/"
                component={Home}
            />
            <Route path="" component={NotFound} />
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);