import React, { useEffect, useState } from "react";
import RegisterForm from "./RegisterForm.js";
import {useHistory} from "react-router-dom";
import axios from "axios";

const AuthRegister = () => {
    const [user, setUser] = useState({
        email: "",
        first_name: "",
        last_name: "",
        address: "",
        username: "",
        password: ""
    });

    const history = useHistory();

    // flags in the state to watch for add/remove updates
    const [add, setAdd] = useState(false);

    // useEffect that run when changes are made to the state variable flags
    useEffect(() => {
        if (add) {
            var url = "http://Airpages-elb-1-895405985.us-east-1.elb.amazonaws.com:8000/api/user/"
            axios.post(
                url,
                JSON.stringify(user),{
                    headers:{'Content-Type': 'application/json'}
                }).then((response) => {
                localStorage.setItem('user', response.data.user_id)
                alert("Account created successfully")
                history.push('/')
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

    //Check if signed in?

    return (
        <div>
            <RegisterForm
                user={user}
                onChange={onChangeHandler}
                onSubmit={onSubmitHandler}
            />
        </div>
    );
};

export default AuthRegister;