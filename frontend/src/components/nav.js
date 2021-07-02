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
                            <a className="navbar-item" href="/">
                                Home
                            </a>
                            <a className="navbar-item" href="/hackernews">
                                HackerNews
                            </a>
                            <a className="navbar-item" href="/4chan">
                                4Chan
                            </a>
                            <a className="navbar-item" href="/music">
                                Music
                            </a>
                            <a className="navbar-item" href="/books">
                                Books
                            </a>
                            <a className="navbar-item" href="/rss">
                                RSS
                            </a>
                            <a className="navbar-item" href="/finances">
                                Finances
                            </a>
                        </div>

                    </div>
                </div>
            </nav>
    )
}

export default Nav;