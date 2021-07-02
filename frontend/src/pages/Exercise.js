import React from 'react';

import Sidebar from "../components/sidebar";
import Nav from "../components/nav";
import HomeNav from "../components/work_nav";
import Day from "../components/day";
import TopWorkNav from "../components/top_work_nav";


function Exercise(props) {

    return (
        <div>
            <Nav />
            <div class="container">
                <div class="columns">
                    <div className="column is-3 ">
                        <Sidebar />
                    </div>

                    <div className="column is-9">
                        <TopWorkNav />
                        <Day />
                        <HomeNav />
                        <div className="columns">
                            <div className="column is-6">
                                <div className="card events-card">
                                    <header className="card-header">
                                        <p className="card-header-title">
                                            Events
                                        </p>
                                        <a href="#" className="card-header-icon" aria-label="more options">
                                          <span className="icon">
                                            <i className="fa fa-angle-down" aria-hidden="true"/>
                                          </span>
                                        </a>
                                    </header>
                                    <div className="card-table">
                                        <div className="content">
                                            <table className="table is-fullwidth is-striped">
                                                <tbody>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-6">
                                <div className="card">

                                </div>
                                <div className="card">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Exercise;