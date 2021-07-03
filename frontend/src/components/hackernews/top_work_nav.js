import React from 'react';

function TopWorkNav(props) {
    const { match } = props;
    console.log(match.url)
    var active = {
        'ask': false,
        'show': false,
        'new': false,
        'jobs': false,
        'best': false,
        'front': false,
    }

    switch (match.url){
        case '/hackernews/ask':
            active['ask'] = true
            break
        case '/hackernews/show':
            active['show'] = true
            break
        case '/hackernews/new':
            active['new'] = true
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
        <nav className="breadcrumb" aria-label="breadcrumbs" style={{marginTop : '20px'}}>
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