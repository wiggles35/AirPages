import React from "react";
import { useHistory } from "react-router-dom";

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
            <button onClick={onClickHandler}>Sign Out</button>
        </div>
    )

};

