import React from 'react';

function TopWorkNav(props) {

    const { match } = props;
    var active = {
        'ask': false,
        'show': false,
        'hew': false,
        'jobs': false,
        'best': false,
        'front': false,
    }

    switch (match.path){
        case '/hackernews/ask':
            active['ask'] = true
            break
        case '/hackernews/show':
            active['show'] = true
            break
        case '/hackernews/hew':
            active['hew'] = true
            break
        case '/hackernews/jobs':
            active['jobs'] = true
            break
        case '/hackernews/best':
            active['best'] = true
            break
        case '/hackernews':
            active['front'] = true
            break
        default:
            break
        }

    return (
        <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li className={`${active['front'] ? "is-active" : ""}`}><a href="/hackernews">Front</a></li>
                <li className={`${active['new'] ? "is-active" : ""}`}><a href="/hackernews/new">New</a></li>
                <li className={`${active['best'] ? "is-active" : ""}`}><a href="/hackernews/best">Best</a></li>
                <li className={`${active['show'] ? "is-active" : ""}`}><a href="/hackernews/show">Show</a></li>
                <li className={`${active['jobs'] ? "is-active" : ""}`}><a href="/hackernews/jobs">Jobs</a></li>
                <li className={`${active['ask'] ? "is-active" : ""}`}><a href="/hackernews/ask">Ask</a></li>

            </ul>
        </nav>
    )
}

export default TopWorkNav;