import React, { useEffect, useState } from "react";
import axios from "axios";

export function UserPage(props) {

    const [id, setID] = useState([]);
    const [first_name, setFirstName] = useState([]);
    const [last_name, setLastName] = useState([]);
    const [email, setEmail] = useState([]);
    const [address, setAddress] = useState([]);

    var url = "http://Airpages-elb-1-895405985.us-east-1.elb.amazonaws.com:8000/api/user/" + props.match.params.id + "/"

    useEffect(() => {
        axios.get(url).then((response) => {
            setID(response.data.id);
            setFirstName(response.data.first_name);
            setLastName(response.data.last_name);
            setEmail(response.data.email);
            setAddress(response.data.address);
        }).catch ((error) => {
            alert(error.response)
        });
    });

    return (
        <div>
            <h1>User Info:</h1>
            <h1>{id}</h1>
            <h1>{first_name}</h1>
            <h1>{last_name}</h1>
            <h1>{email}</h1>
            <h1>{address}</h1>
        </div>
    );
}
export default UserPage;