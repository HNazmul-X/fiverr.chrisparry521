import { InlineIcon } from "@iconify/react";
import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isDropdownShow, setIsDropdownShow] = useState(false);
    const [isMblSearchbarShow, setIsMblSearchbarShow] = useState(false);
    const [isDarkMode , setIsDarkMode] = useState(false)

    useEffect(()=> {
        const theme = localStorage.getItem("theme")
        if(theme==="dark"){
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark")
        }
    },[isDarkMode])
   

    const switchingTheme = () => {
        const theme = localStorage.getItem("theme")

        console.log(theme)
        
        if(theme==="light" || theme===null){
            localStorage.setItem("theme","dark")
            setIsDarkMode(true)
        }else{
            localStorage.setItem("theme","light")
            setIsDarkMode(false)
        }




    }


    return (
        <nav id="navbar">
            <div className="container-fluid">
                <div className="navbar-item-container">
                    <div className="navbar-brand">Logo</div>
                    <div className={`${isMblSearchbarShow ? "active" : ""} navbar-searchBar`}>
                        <div className="search-bar">
                            <span className="search-bar__icon">
                                {isMblSearchbarShow ? (
                                    <InlineIcon onClick={() => setIsMblSearchbarShow(!isMblSearchbarShow)} icon="la:times" style={{ fontSize: "25px" }} />
                                ) : (
                                    <InlineIcon icon="carbon:search" style={{ fontSize: "25px" }} />
                                )}
                            </span>
                            <input type="text" placeholder="Search Your Items" />
                        </div>
                    </div>
                    <div className="navbar-items">
                        <li onClick={() => setIsMblSearchbarShow(!isMblSearchbarShow)} className="d-block d-md-none">
                            <Link to="/">
                                <InlineIcon icon="carbon:search" style={{ fontSize: "25px" }} />
                            </Link>
                        </li>
                        <li onClick={switchingTheme}>
                            <div>{!isDarkMode ? <InlineIcon icon="bytesize:moon" style={{ fontSize: "25px" }} /> : <InlineIcon style={{ fontSize: "25px" }} icon="cil:sun" />}</div>
                        </li>
                        <li className="d-none d-md-block">
                            <Link to="/">FAQ</Link>
                        </li>
                        <li>
                            <div style={{ fontWeight: 500, cursor: "pointer" }}>
                                <div
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsDropdownShow(!isDropdownShow);
                                    }}
                                    className={`focus-dropdown  ${isDropdownShow ? "active" : ""}`}>
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
