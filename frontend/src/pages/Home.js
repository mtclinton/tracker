import React from 'react';

import Sidebar from "../components/tracker/sidebar";
import Nav from "../components/nav";
import HomeNav from "../components/tracker/work_nav";
import Day from "../components/tracker/day";
import TopWorkNav from "../components/tracker/top_work_nav";

// Convert time to a format of hours, minutes, seconds, and milliseconds

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);

  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

// Declare variables to use in our functions below

let startTime;
let elapsedTime = 0;
let timerInterval;

// Create function to modify innerHTML

function print(txt) {
  document.getElementById("display").innerHTML = txt;
}

// Create "start", "pause" and "reset" functions

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
  showButton("PAUSE");
}

function pause() {
  clearInterval(timerInterval);
  showButton("PLAY");
}

function reset() {
  clearInterval(timerInterval);
  print("00:00:00");
  elapsedTime = 0;
  showButton("PLAY");
}

// Create function to display buttons

function showButton(buttonKey) {
  const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
  const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
  buttonToShow.style.display = "block";
  buttonToHide.style.display = "none";
}


function Home(props) {
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
                                                <tr>
                                                    <td width="5%"><i className="fa fa-bell-o"/></td>
                                                    <td>Lorum ipsum dolem aire</td>
                                                    <td className="level-right"><a
                                                        className="button is-small is-primary" href="#">Action</a></td>
                                                </tr>
                                                <tr>
                                                    <td width="5%"><i className="fa fa-bell-o"/></td>
                                                    <td>Lorum ipsum dolem aire</td>
                                                    <td className="level-right"><a
                                                        className="button is-small is-primary" href="#">Action</a></td>
                                                </tr>
                                                <tr>
                                                    <td width="5%"><i className="fa fa-bell-o"/></td>
                                                    <td>Lorum ipsum dolem aire</td>
                                                    <td className="level-right"><a
                                                        className="button is-small is-primary" href="#">Action</a></td>
                                                </tr>
                                                <tr>
                                                    <td width="5%"><i className="fa fa-bell-o"/></td>
                                                    <td>Lorum ipsum dolem aire</td>
                                                    <td className="level-right"><a
                                                        className="button is-small is-primary" href="#">Action</a></td>
                                                </tr>
                                                <tr>
                                                    <td width="5%"><i className="fa fa-bell-o"/></td>
                                                    <td>Lorum ipsum dolem aire</td>
                                                    <td className="level-right"><a
                                                        className="button is-small is-primary" href="#">Action</a></td>
                                                </tr>
                                                <tr>
                                                    <td width="5%"><i className="fa fa-bell-o"/></td>
                                                    <td>Lorum ipsum dolem aire</td>
                                                    <td className="level-right"><a
                                                        className="button is-small is-primary" href="#">Action</a></td>
                                                </tr>
                                                <tr>
                                                    <td width="5%"><i className="fa fa-bell-o"/></td>
                                                    <td>Lorum ipsum dolem aire</td>
                                                    <td className="level-right"><a
                                                        className="button is-small is-primary" href="#">Action</a></td>
                                                </tr>
                                                <tr>
                                                    <td width="5%"><i className="fa fa-bell-o"/></td>
                                                    <td>Lorum ipsum dolem aire</td>
                                                    <td className="level-right"><a
                                                        className="button is-small is-primary" href="#">Action</a></td>
                                                </tr>
                                                <tr>
                                                    <td width="5%"><i className="fa fa-bell-o"/></td>
                                                    <td>Lorum ipsum dolem aire</td>
                                                    <td className="level-right"><a
                                                        className="button is-small is-primary" href="#">Action</a></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <footer className="card-footer">
                                        <a href="#" className="card-footer-item">View All</a>
                                    </footer>
                                </div>
                            </div>
                            <div className="column is-6">
                                <div className="card">
                                    <header className="card-header">
                                        <p className="card-header-title">
                                            Inventory Search
                                        </p>
                                        <a href="#" className="card-header-icon" aria-label="more options">
                  <span className="icon">
                    <i className="fa fa-angle-down" aria-hidden="true"/>
                  </span>
                                        </a>
                                    </header>
                                    <div className="card-content">
                                        <div className="content">
                                            <div className="control has-icons-left has-icons-right">
                                                <input className="input is-large" type="text" placeholder=""/>
                                                <span className="icon is-medium is-left">
                      <i className="fa fa-search"/>
                    </span>
                                                <span className="icon is-medium is-right">
                      <i className="fa fa-check"/>
                    </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <header className="card-header">
                                        <p className="card-header-title">
                                            User Search
                                        </p>
                                        <a href="#" className="card-header-icon" aria-label="more options">
                                          <span className="icon">
                                            <i className="fa fa-angle-down" aria-hidden="true"/>
                                          </span>
                                        </a>
                                    </header>
                                    <div className="card-content">
                                        <div className="content">
                                            <div className="control has-icons-left has-icons-right">
                                                <div className="stopwatch">
                                                    <div className="circle">
                                                        <span className="time" id="display">00:00:00</span>
                                                    </div>

                                                    <div className="controls">
                                                        <button className="buttonPlay">
                                                            <img id="playButton" onClick={start}
                                                                 src="https://res.cloudinary.com/https-tinloof-com/image/upload/v1593360448/blog/time-in-js/play-button_opkxmt.svg"/>

                                                            <img id="pauseButton" onClick={pause}
                                                                 src="https://res.cloudinary.com/https-tinloof-com/image/upload/v1593360448/blog/time-in-js/pause-button_pinhpy.svg"/>
                                                        </button>

                                                        <button className="buttonReset">
                                                            <img id="resetButton" onClick={reset}
                                                                 src="https://res.cloudinary.com/https-tinloof-com/image/upload/v1593360448/blog/time-in-js/reset-button_mdv6wf.svg"/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Home;