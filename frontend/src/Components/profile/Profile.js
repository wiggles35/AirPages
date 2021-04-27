import React, { useEffect, useState } from "react";
import axios from "axios";
import { downloadImage } from "../../Common/Services/AWS.js";

export function UserPage(props) {

    const [id, setID] = useState([]);
    const [first_name, setFirstName] = useState([]);
    const [last_name, setLastName] = useState([]);
    const [email, setEmail] = useState([]);
    const [address, setAddress] = useState([]);
    const [imageLink, setImageLink] = useState([]);
    const [awsImg, setAwsImg] = useState([]);


    var infoUrl = "http://Airpages-elb-1-895405985.us-east-1.elb.amazonaws.com:8000/api/user/" + props.match.params.id + "/"
    //var allPostsUrl = "http://Airpages-elb-1-895405985.us-east-1.elb.amazonaws.com:8000/api/user/" + props.match.params.id + "/posting"
    var allPostsUrl = "http://Airpages-elb-1-895405985.us-east-1.elb.amazonaws.com:8000/api/posting/13"

    useEffect(() => {
        axios.get(infoUrl).then((response) => {
            setID(response.data.id);
            setFirstName(response.data.first_name);
            setLastName(response.data.last_name);
            setEmail(response.data.email);
            setAddress(response.data.address);
        }).catch ((error) => {
            alert(error.response)
        });
    });

    useEffect(() => {
        axios.get(allPostsUrl).then((response) => {
            setImageLink(response.data.image_link);
        }).catch ((error) => {
            alert(error.response)
        });
    });

    useEffect(() => {
        downloadImage(1).then( function(data){
            const buffer = Buffer.from(data.Body)
            const base64ImageData = buffer.toString('base64');
            const imgSrc = "data:image/jpg;base64," + base64ImageData;
            setAwsImg(imgSrc)
        })
    }, [imageLink])

    return (
        <div>
            <h1>User Info:</h1>
            <h1>{id}</h1>
            <h1>{first_name}</h1>
            <h1>{last_name}</h1>
            <h1>{email}</h1>
            <h1>{address}</h1>
            {imageLink && <img src={awsImg} style={{height: 600, width: "auto"}}></img>}
        </div>
    );
}
export default UserPage;