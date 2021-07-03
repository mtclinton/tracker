import React, { useEffect, useState } from 'react';

function Sidebar(props) {

    const { match } = props;
        var active = {
        'ask': false,
        'show': false,
        'new': false,
        'jobs': false,
        'best': false,
        'front': false,
        'starred': false,
        'deleted': false,

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
        case '/hackernews/starred':
            active['starred'] = true
            break
        case '/hackernews/deleted':
            active['deleted'] = true
            break
        case '/hackernews':
            active['front'] = true
            break
        default:
            break
        }

    return (
        <aside className="menu is-hidden-mobile" style={{marginTop : '50px'}}>
            <p className="menu-label">
                Types
            </p>
            <ul className="menu-list">
                <li><a href={"/hackernews"}  className={`${active['front'] ? "is-active" : ""}`}>Front</a></li>
                <li><a href={"/hackernews/new"}  className={`${active['new'] ? "is-active" : ""}`}>New</a></li>
                <li><a href={"/hackernews/best"}  className={`${active['best'] ? "is-active" : ""}`}>Best</a></li>
                <li><a href={"/hackernews/show"}  className={`${active['show'] ? "is-active" : ""}`}>Show</a></li>
                <li><a href={"/hackernews/jobs"}  className={`${active['jobs'] ? "is-active" : ""}`}>Jobs</a></li>
                <li><a href={"/hackernews/ask"}  className={`${active['ask'] ? "is-active" : ""}`}>Ask</a></li>
            </ul>
            <p className="menu-label">
                Saved
            </p>
            <ul className="menu-list">
                <li><a href={"/hackernews/starred"}  className={`${active['starred'] ? "is-active" : ""}`}>Starred</a></li>
                <li><a href={"/hackernews/deleted"}  className={`${active['deleted'] ? "is-active" : ""}`}>Deleted</a></li>
            </ul>
        </aside>
    )
}

export default Sidebar