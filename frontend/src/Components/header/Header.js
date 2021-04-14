import React from "react";
import HeaderButton from "./HeaderButton.js";
import { useHistory, Link} from "react-router-dom";

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
            <header class="headerBar title">
                <HeaderButton onClick={onClickHandler()}/>
            </header>
        </div>
    );
};

export default Header;