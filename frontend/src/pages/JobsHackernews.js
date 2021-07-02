import React from 'react';

import Sidebar from "../components/hackernews/sidebar";
import Nav from "../components/nav";
import TopWorkNav from "../components/hackernews/top_work_nav";


function JobsHackernews(props) {
    const { match } = props;

    return (
        <div>
            <Nav />
            <div class="container">
                <div class="columns">
                    <div className="column is-3 ">
                        <Sidebar match={match}/>
                    </div>

                    <div className="column is-9">
                        <TopWorkNav match={match}/>
                        <div className="columns">

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default JobsHackernews;