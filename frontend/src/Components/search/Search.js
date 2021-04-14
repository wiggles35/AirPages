import React, { useEffect, useState } from "react";
import ".././header/header.css"

import SearchForm from "./searchform";
import axios from "axios";

export function Search() {
    const [query, setQuery] = useState([]);
    const [add, setAdd] = useState(false);

    useEffect(() => {
        var url = "ENDPOINT PATH HERE" + query
        axios.get(url).then((response) => {
            alert(response.data);
        });
    }, [query, add]);

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