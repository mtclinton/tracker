import React from 'react';

function HomeNav(props) {
    return (
        <section className="info-tiles">
            <div className="tile is-ancestor has-text-centered">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <a href={'/work'}>
                            <i className="fad fa-user-hard-hat"></i>
                        </a>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <a href={'/exercise'}>
                            <i className="fad fa-dumbbell"></i>
                        </a>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <a href={'/food'}>
                            <i className="fad fa-apple-alt"></i>
                        </a>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <a href={'/vices'}>
                        <i className="fad fa-flask-poison"></i>
                        </a>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default HomeNav;