import React from 'react';

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

    return (
        <div>
            <nav class="navbar is-white">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item brand-text" href="../index.html">
                  Bulma Admin
                </a>
                        <div class="navbar-burger burger" data-target="navMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div id="navMenu" class="navbar-menu">
                        <div class="navbar-start">
                            <a class="navbar-item" href="admin.html">
                    Home
                  </a>
                            <a class="navbar-item" href="admin.html">
                    Orders
                  </a>
                            <a class="navbar-item" href="admin.html">
                    Payments
                  </a>
                            <a class="navbar-item" href="admin.html">
                    Exceptions
                  </a>
                                         <a class="navbar-item" href="admin.html">
                    Reports
                  </a>
                        </div>

                    </div>
                </div>
            </nav>
            <div class="container">
                <div class="columns">
                    <div className="column is-3 ">
                        <aside className="menu is-hidden-mobile">
                            <p className="menu-label">
                                General
                            </p>
                            <ul className="menu-list">
                                <li><a className="is-active">Dashboard</a></li>
                                <li><a>Customers</a></li>
                                <li><a>Other</a></li>
                            </ul>
                            <p className="menu-label">
                                Administration
                            </p>
                            <ul className="menu-list">
                                <li><a>Team Settings</a></li>
                                <li>
                                    <a>Manage Your Team</a>
                                    <ul>
                                        <li><a>Members</a></li>
                                        <li><a>Plugins</a></li>
                                        <li><a>Add a member</a></li>
                                        <li><a>Remove a member</a></li>
                                    </ul>
                                </li>
                                <li><a>Invitations</a></li>
                                <li><a>Cloud Storage Environment Settings</a></li>
                                <li><a>Authentication</a></li>
                                <li><a>Payments</a></li>
                            </ul>
                            <p className="menu-label">
                                Transactions
                            </p>
                            <ul className="menu-list">
                                <li><a>Payments</a></li>
                                <li><a>Transfers</a></li>
                                <li><a>Balance</a></li>
                                <li><a>Reports</a></li>
                            </ul>
                        </aside>
                    </div>

                    <div className="column is-9">
                        <nav className="breadcrumb" aria-label="breadcrumbs">
                            <ul>
                                <li><a href="../">Bulma</a></li>
                                <li><a href="../">Templates</a></li>
                                <li><a href="../">Examples</a></li>
                                <li className="is-active"><a href="#" aria-current="page">Admin</a></li>
                            </ul>
                        </nav>
                        <section className="hero is-info welcome is-small">
                            <div className="hero-body">
                                <div className="container">
                                    <h1 className="title">
                                        Hello, Admin.
                                    </h1>
                                    <h2 className="subtitle">
                                        I hope you are having a great day!
                                    </h2>
                                </div>
                            </div>
                        </section>
                        <section className="info-tiles">
                            <div className="tile is-ancestor has-text-centered">
                                <div className="tile is-parent">
                                    <article className="tile is-child box">
                                        <p className="title">439k</p>
                                        <p className="subtitle">Users</p>
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box">
                                        <p className="title">59k</p>
                                        <p className="subtitle">Products</p>
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box">
                                        <p className="title">3.4k</p>
                                        <p className="subtitle">Open Orders</p>
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box">
                                        <p className="title">19</p>
                                        <p className="subtitle">Exceptions</p>
                                    </article>
                                </div>
                            </div>
                        </section>
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



            
            
            {/*Home*/}
            {/*<div>*/}
            

        </div>
    );
}

export default Home;