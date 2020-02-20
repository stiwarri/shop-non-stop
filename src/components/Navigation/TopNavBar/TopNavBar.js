import React from 'react';
import { NavLink } from 'react-router-dom';

const TopNavBar = () => {
    return (
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/shop'>Shop</NavLink>
            </li>
            <li>
                <NavLink to='/about-us'>About Us</NavLink>
            </li>
        </ul>
    )
}

export default TopNavBar;
