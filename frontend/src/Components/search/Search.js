import React, { useEffect, useState } from "react";
import ".././header/header.css";
import { useHistory } from "react-router-dom";
import PopUp from "../../Common/Services/popup";

import SearchForm from "./searchform";
import axios from "axios";

export function Search() {
    const history = useHistory();

    const [query, setQuery] = useState([]);
    const [add, setAdd] = useState(false);
    const [userList, setUserList] = useState([]);
    const [userID, setUserID] = useState("");
    const [popup, setPopup] = useState(false);

    /*
    useEffect(() => {
        if (add){
            let path = `/profile/${userID}`;
            history.push({
                pathname: path
            });
        }
        setAdd(false);
    }, [add, query, history]);
    */

    const onSubmitHandler = (e) => {
        e.preventDefault();
        var searchURL = "http://Airpages-elb-1-895405985.us-east-1.elb.amazonaws.com:8000/api/user/" + query + "/"
        axios.get(searchURL).then((response) => {
            response.data.forEach((user) => {
                setUserList(userList => [...userList, user]);
            })
            setAdd(true);
            setPopup(true);
        })
    };

    const onChangeHandler = (e) => {
        setQuery(e.target.value)
    }

    return (
        <div>
            <SearchForm onChange={onChangeHandler} onSubmit={onSubmitHandler}/>
            {popup && <PopUp userList={userList}/>}
        </div>
    )


}

export default Search;