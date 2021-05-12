import React from "react";
import HeaderButton from "./HeaderButton.js";
import { useHistory } from "react-router-dom";
import Search from "../search/Search.js";
import profImg from "./userlogo.png";
import { Link } from "react-router-dom";

import "./header.css"

export function Header() {
    const history = useHistory();

    const onClickHandler = () => {
        let path = '/';
        history.push(path);
    };

    // Header bar with title
    return (
        <div id="HeaderBar">
            <header className="headerBar title">
                <HeaderButton onClick={onClickHandler()}/>
            </header>
            <Search className="headerBar searchComponent"/>
            <div className="headerBar profile">
                <figure>
                    <Link to="/login">
                        <img src={profImg} className="profile" alt="prof"/>
                    </Link>
                </figure>
            </div>
        </div>
    );
};

export default Header;