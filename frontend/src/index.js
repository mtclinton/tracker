import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";

import history from './history';

import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import Vices from "./pages/Vices";
import Food from "./pages/Food";
import Work from "./pages/Work";

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
                path="/vices"
                component={Vices}
            />
            <Route
                path="/exercise"
                component={Exercise}
            />
            <Route
                path="/food"
                component={Food}
            />
            <Route
                path="/work"
                component={Work}
            />
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