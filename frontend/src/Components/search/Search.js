import React, { useEffect, useState } from "react";
import ".././header/header.css"

import SearchForm from "./searchform";
import axios from "axios";

export function Search() {
    const [query, setQuery] = useState([]);
    const [add, setAdd] = useState(false);

    useEffect(() => {
        if (add){
            var url = "http://db.cse.nd.edu:5004/api/user/" + query + "/"
            axios.get(url).then((response) => {
                alert(JSON.stringify(response.data));
            }).catch ((error) => {
                alert(error)
            });
        }
        setAdd(false);
    }, [add, query]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setAdd(true);
    };

    const onChangeHandler = (e) => {
        setQuery(e.target.value)
    }

    return (
        <SearchForm onChange={onChangeHandler} onSubmit={onSubmitHandler}/>
    );


}

export default Search;