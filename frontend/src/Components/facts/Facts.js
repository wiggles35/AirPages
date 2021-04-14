import React, { useEffect, useState } from "react";
import FactForm from "./FactForm.js";
import axios from 'axios';


const Facts = () => {
    const [user, setUser] = useState({
        email: "",
        firstname: "",
        lastname: "",
    });

    // flags in the state to watch for add/remove updates
    const [add, setAdd] = useState(false);

    // useEffect that run when changes are made to the state variable flags
    useEffect(() => {
        axios.post("ENDPOINT HERE", JSON.stringify({user}))
    }, [user, add]);

    const onChangeHandler = (e) => {
        e.preventDefault();
        const { name, value: newValue } = e.target;

        setUser({
            ...user,
            [name]: newValue
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setAdd(true);
    };


    return (
        <div>
            <FactForm
                user={user}
                onChange={onChangeHandler}
                onSubmit={onSubmitHandler}
            />
        </div>
    );
};

export default Facts;