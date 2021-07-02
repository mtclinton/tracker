import React from 'react';

function Day(props) {

    var date = new Date().toDateString();

    return (
        <section className="hero is-info welcome is-small">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        {date}
                    </h1>
                    <h2 className="subtitle">
                        I hope you are having a great day!
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Day;