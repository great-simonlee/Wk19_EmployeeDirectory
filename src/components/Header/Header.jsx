// @flow
import * as React from 'react';
import Logo from '../Logo/Logo.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import LineSeparator from '../LineSeparator/LineSeparator.jsx'
import './header.scss'

function Header() {
    return (
        <>
            <div className="header-container">
                <Logo />
                <NavBar />
            </div>
            <LineSeparator />
        </>
    );
};

export default Header;