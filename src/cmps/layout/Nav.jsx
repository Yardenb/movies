import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import cn from 'classnames'
const Nav = (props) => {
    return (
        <nav className="nav-bar">
            <ul className="nav__list">
                <li> <Link className={cn("nav__link", { 'active': props.location.pathname === '/' })} to="/">Home</Link> </li>
                <li> <Link className={cn("nav__link", { 'active': props.location.pathname === '/about' })} to="/about">About</Link> </li>
            </ul>
        </nav>
    )
}

export default withRouter(Nav);