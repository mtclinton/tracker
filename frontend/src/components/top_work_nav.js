import React from 'react';

function TopWorkNav(props) {
    return (
        <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><a href="../">Work</a></li>
                <li><a href="../">Exercise</a></li>
                <li><a href="../">Nutrition</a></li>
                <li className="is-active"><a href="#" aria-current="page">Vices</a></li>
            </ul>
        </nav>
    )
}

export default TopWorkNav;