import React, { useEffect, useState } from 'react';

function Sidebar(props) {

    const { match } = props;
    var active = {
        'work-dashboard': false,
        'work-report': false,
        'work-notes': false,
        'exercise-dashboard': false,
        'exercise-report': false,
        'nutrition-dashboard': false,
        'nutrition-report': false,
        'vices-dashboard': false,
        'vices-report': false,
        'add-work': false,
        'add-exercise': false,
        'add-food': false,
        'add-vice': false,
    }

    switch (match.path){
        case '/':
            active['work-dashboard'] = true
            break
        case '/work':
            active['work-dashboard'] = true
            break
        case '/work/report':
            active['work-dashboard'] = true
            break
        case '/work/notes':
            active['work-dashboard'] = true
            break
        case '/exercise':
            active['exercise-dashboard'] = true
            break
        case '/exercise/report':
            active['exercise-dashboard'] = true
            break
        case '/food':
            active['food-dashboard'] = true
            break
        case '/food/report':
            active['food-dashboard'] = true
            break
        case '/vices':
            active['vices-dashboard'] = true
            break
        case '/vices/report':
            active['vices-report'] = true
            break
        case '/add/work':
            active['add-work'] = true
            break
        case '/add/food':
            active['add-food'] = true
            break
        case '/add/exercise':
            active['add-exercise'] = true
            break
        case '/add/vice':
            active['add-vice'] = true
            break
        default:
            console.log('url error')
        }

    return (
        <aside className="menu is-hidden-mobile">
            <p className="menu-label">
                Work
            </p>
            <ul className="menu-list">
                <li><a className={`${active['work-dashboard'] ? "is-active" : ""}`}>Dashboard</a></li>
                <li><a className={`${active['work-report'] ? "is-active" : ""}`}>Reports</a></li>
                <li><a className={`${active['work-notes'] ? "is-active" : ""}`}>Notes</a></li>
            </ul>
            <p className="menu-label">
                Exercise
            </p>
            <ul className="menu-list">
                <li><a className={`${active['exercise-dashboard'] ? "is-active" : ""}`}>Dashboard</a></li>
                <li><a className={`${active['exercise-report'] ? "is-active" : ""}`}>Reports</a></li>
            </ul>
            <p className="menu-label">
                Nutrition
            </p>
            <ul className="menu-list">
                <li><a className={`${active['food-dashboard'] ? "is-active" : ""}`}>Dashboard</a></li>
                <li><a className={`${active['food-report'] ? "is-active" : ""}`}>Reports</a></li>
            </ul>
            <p className="menu-label">
                Vices
            </p>
            <ul className="menu-list">
                <li><a className={`${active['vices-dashboard'] ? "is-active" : ""}`}>Dashboard</a></li>
                <li><a className={`${active['vices-report'] ? "is-active" : ""}`}>Reports</a></li>
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