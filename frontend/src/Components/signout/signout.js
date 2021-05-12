import React from "react";
import { useHistory } from "react-router-dom";
import "./signout.css"

export const SignOut = () => {

    const history = useHistory();

    const onClickHandler = (e) => {
        e.preventDefault()
        localStorage.removeItem('user')
        alert('Signed Out Successfully')
        history.push('/')
    }

    return(
        <div>
            <button className="signoutButton" onClick={onClickHandler}>Sign Out</button>
        </div>
    )

};

