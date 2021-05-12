import React, { useEffect, useState,  } from "react";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const history = useHistory();

    // flags in the state to watch for add/remove updates
    const [add, setAdd] = useState(false);

    // useEffect that run when changes are made to the state variable flags
    useEffect(() => {
        if (user && add) {
            var url = "http://Airpages-elb-1-895405985.us-east-1.elb.amazonaws.com:8000/api/login/"
            axios.post(
                url,
                JSON.stringify(user),{
                    headers:{'Content-Type': 'application/json'}
                }).then((response) => {
                localStorage.setItem('user', response.data.user_id)
                history.push(`/profile/${response.data.user_id}`)
            }).catch((error) => {
                alert('Sign in failed - try again')
            });
        }
    }, [user, add]);

    const onChangeHandler = (e) => {
        e.preventDefault();
        console.log(e.target);
        const { name, value: newValue } = e.target;
        console.log(newValue);

        setUser({
            ...user,
            [name]: newValue
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setAdd(true);
    };

    useEffect(() => {
        const userID = localStorage.getItem("user")

        if (userID){
            history.push(`profile/${userID}`)
        }
    }, [])

    return (
        <div>
            <LoginForm
                user={user}
                onChange={onChangeHandler}
                onSubmit={onSubmitHandler}
            />
        </div>
    );
};

export default Login;