import React, { useEffect, useState } from "react";
import FactForm from "./FactForm.js";
import axios from 'axios';


const Facts = () => {
    const [user, setUser] = useState({
        email: "",
        first_name: "",
        last_name: "",
        address: ""
    });

    // flags in the state to watch for add/remove updates
    const [add, setAdd] = useState(false);

    // useEffect that run when changes are made to the state variable flags
    useEffect(() => {
        if (add) {
            var url = "http://ec2-3-234-210-87.compute-1.amazonaws.com:8000/api/user/"
            axios.post(
                url,
                JSON.stringify(user),{
                    headers:{'Content-Type': 'application/json'}
                }).then((response) => {
            }).catch((error) => {
                alert(JSON.stringify(error.response.data))
            });
        }
        setAdd(false);
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