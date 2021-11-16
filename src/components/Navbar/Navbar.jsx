import { InlineIcon } from '@iconify/react';
import React from 'react';

const Navbar = () => {
    return (
        <nav id="navbar">
            <div className="container-fluid">
                <div className="navbar-item-container">
                    <div className="navbar-brand">Logo</div>
                    <div className="navbar-searchBar">
                        <div className="search-bar">
                            <span className="search-bar__icon">
                                <InlineIcon icon="carbon:search" style={{fontSize:"25px"}} />
                            </span>
                            <input type="text" placeholder="Search Your Items" />
                        </div>
                    </div>
                    <div className="navbar-items">
                        <li>
                            <a href="/">
                                <InlineIcon style={{ fontSize: "25px" }} icon="clarity:sun-line" />
                            </a>
                        </li>
                        <li>
                            <a href="/">FAQ</a>
                        </li>
                        <li>
                            <a href="/">Connect wallet</a>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;