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
import Hackernews from "./pages/Hackernews";
import AskHackernews from "./pages/AskHackernews";
import ShowHackernews from "./pages/ShowHackernews";
import JobsHackernews from "./pages/JobsHackernews";
import NewHackernews from "./pages/NewHackernews";
import BestHackernews from "./pages/BestHackernews";
import StarredHackernews from "./pages/StarredHackernews";
import DeletedHackernews from "./pages/DeletedHackernews";


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
                path="/hackernews/ask/:page(\d+)?"
                component={AskHackernews}
            />
            <Route
                path="/hackernews/show/:page(\d+)?"
                component={ShowHackernews}
            />
            <Route
                path="/hackernews/jobs/:page(\d+)?"
                component={JobsHackernews}
            />
            <Route
                path="/hackernews/new/:page(\d+)?"
                component={NewHackernews}
            />
            <Route
                path="/hackernews/best/:page(\d+)?"
                component={BestHackernews}
            />
            <Route
                path="/hackernews/starred/:page(\d+)?"
                component={StarredHackernews}
            />
            <Route
                path="/hackernews/deleted/:page(\d+)?"
                component={DeletedHackernews}
            />
            <Route
                path="/hackernews/:page(\d+)?"
                component={Hackernews}
            />
            <Route
                path="/4chan"
                component={FourChan}
            />
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