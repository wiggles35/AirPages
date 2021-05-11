import React from "react";

import "./popup.css";
import { Link } from "react-router-dom";

export function PopUp(props) {

    const onClick = () => {
        const modal = document.querySelector(".modal")
        modal.style.display = "none";
    };

    return (
        <div>
            <div className="modal modalBox">
                <button className="Close" onClick={onClick}>Close</button>
                <div className="content">
                    <h1>Select a user page</h1>
                    {
                        props.userList.map(user => {
                            return([
                                <div>
                                    <Link to={`/profile/${user.id}`} >{user.username}</Link>
                                </div>
                            ])
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PopUp
