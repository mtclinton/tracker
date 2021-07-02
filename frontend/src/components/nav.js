import React from 'react';

function Nav(props) {
    return (
        <nav className="navbar is-white">
                <div className="container">
                    {/*<div className="navbar-brand">*/}
                    {/*    <a className="navbar-item brand-text" href="../index.html">*/}
                    {/*        Bulma Admin*/}
                    {/*    </a>*/}
                    {/*    <div className="navbar-burger burger" data-target="navMenu">*/}
                    {/*        <span></span>*/}
                    {/*        <span></span>*/}
                    {/*        <span></span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div id="navMenu" className="navbar-menu">
                        <div className="navbar-start">
                            <a className="navbar-item" href="admin.html">
                                Home
                            </a>
                            <a className="navbar-item" href="admin.html">
                                HackerNews
                            </a>
                            <a className="navbar-item" href="admin.html">
                                4Chan
                            </a>
                            <a className="navbar-item" href="admin.html">
                                Music
                            </a>
                            <a className="navbar-item" href="admin.html">
                                Books
                            </a>
                            <a className="navbar-item" href="admin.html">
                                RSS
                            </a>
                            <a className="navbar-item" href="admin.html">
                                Finances
                            </a>
                        </div>

                    </div>
                </div>
            </nav>
    )
}

export default Nav;