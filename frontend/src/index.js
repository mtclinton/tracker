import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";

import history from './history';

import Home from "./pages/Home";

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
            {/*<Route*/}
            {/*    path="/addfood"*/}
            {/*    component={Home}*/}
            {/*/>*/}
            {/*<Route*/}
            {/*    path="/addexercise"*/}
            {/*    component={Home}*/}
            {/*/>*/}
            {/*<Route*/}
            {/*    path="/addwork"*/}
            {/*    component={Home}*/}
            {/*/>*/}
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