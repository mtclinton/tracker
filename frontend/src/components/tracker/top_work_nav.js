import React from 'react';

function TopWorkNav(props) {

    const { match } = props;
    var active = {
        'work': false,
        'exercise': false,
        'nutrition': false,
        'vices': false,
    }

    switch (match.path){
        case '/':
            active['work'] = true
            break
        case '/work':
            active['work'] = true
            break
        case '/work/report':
            active['work'] = true
            break
        case '/work/notes':
            active['work'] = true
            break
        case '/exercise':
            active['exercise'] = true
            break
        case '/exercise/report':
            active['exercise'] = true
            break
        case '/food':
            active['food'] = true
            break
        case '/food/report':
            active['food'] = true
            break
        case '/vices':
            active['vices'] = true
            break
        case '/vices/report':
            active['vices'] = true
            break
        default:
            break
        }

    return (
        <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li className={`${active['work'] ? "is-active" : ""}`}><a href="/work">Work</a></li>
                <li className={`${active['exercise'] ? "is-active" : ""}`}><a href="/exercise">Exercise</a></li>
                <li className={`${active['food'] ? "is-active" : ""}`}><a href="/food">Nutrition</a></li>
                <li className={`${active['vices'] ? "is-active" : ""}`}><a href="/vices">Vices</a></li>
            </ul>
        </nav>
    )
}

export default TopWorkNav;