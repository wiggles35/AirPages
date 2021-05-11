import React from "react";
import HeaderButton from "./HeaderButton.js";
import { useHistory } from "react-router-dom";
import Search from "../search/Search.js"

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
        </div>
    );
};

export default Header;