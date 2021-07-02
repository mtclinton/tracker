import React from 'react';

function Sidebar(props) {

    return (
        <aside className="menu is-hidden-mobile">
            <p className="menu-label">
                Work
            </p>
            <ul className="menu-list">
                <li><a className="is-active">Dashboard</a></li>
                <li><a>Reports</a></li>
                <li><a>Notes</a></li>
            </ul>
            <p className="menu-label">
                Exercise
            </p>
            <ul className="menu-list">
                <li><a>Dashboard</a></li>
                <li><a>Reports</a></li>
            </ul>
            <p className="menu-label">
                Nutrition
            </p>
            <ul className="menu-list">
                <li><a>Dashboard</a></li>
                <li><a>Reports</a></li>
            </ul>
            <p className="menu-label">
                Vices
            </p>
            <ul className="menu-list">
                <li><a>Dashboard</a></li>
                <li><a>Reports</a></li>
            </ul>
            <p className="menu-label">
                Editor
            </p>
            <ul className="menu-list">
                <li>
                    <a>Add Data</a>
                    <ul>
                        <li><a>Add Work</a></li>
                        <li><a>Add Exercise</a></li>
                        <li><a>Add Food</a></li>
                        <li><a>Add Vice</a></li>
                    </ul>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar