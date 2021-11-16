import { InlineIcon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isDropdownShow, setIsDropdownShow] = useState(false);

    useEffect(() => {
        if (isDropdownShow) {
            window.addEventListener("click", (e) => {
                e.preventDefault();
                setIsDropdownShow(false);
            });
        }
    });

    return (
        <nav id="navbar">
            <div className="container-fluid">
                <div className="navbar-item-container">
                    <div className="navbar-brand">Logo</div>
                    <div className="navbar-searchBar">
                        <div className="search-bar">
                            <span className="search-bar__icon">
                                <InlineIcon icon="carbon:search" style={{ fontSize: "25px" }} />
                            </span>
                            <input type="text" placeholder="Search Your Items" />
                        </div>
                    </div>
                    <div className="navbar-items">
                        <li>
                            <Link to="/">
                                <InlineIcon style={{ fontSize: "25px" }} icon="clarity:sun-line" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">FAQ</Link>
                        </li>
                        <li>
                            <div style={{fontWeight:500,cursor:"pointer"}}>
                                <div onClick={(e) => {
                                    e.stopPropagation()
                                    setIsDropdownShow(!isDropdownShow);
                                }} className={`focus-dropdown  ${isDropdownShow ? "active" : ""}`}>
                                    <div className="focus-dropdown__label">Connect wallet</div>
                                    <div className="focus-dropdown__items">
                                        <div className="focus-dropdown__items-wrapper">
                                            <div className="focus-dropdown__item">
                                                <img src="https://alpha.art/icons/phantom.png" alt="" />
                                                <span>Phantom</span>
                                            </div>
                                            <div className="focus-dropdown__item">
                                                <img src="https://alpha.art/icons/sollet.svg" alt="" />
                                                <span>Sollet</span>
                                            </div>
                                            <div className="focus-dropdown__item">
                                                <img src="https://alpha.art/icons/solflare.svg" alt="" />
                                                <span>Solfiare</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
