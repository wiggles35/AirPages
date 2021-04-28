import React, { useEffect, useState } from "react";
import axios from "axios";
import { downloadImage } from "../../Common/Services/AWS.js";

export function UserPage(props) {

    const [id, setID] = useState([]);
    const [first_name, setFirstName] = useState([]);
    const [last_name, setLastName] = useState([]);
    const [email, setEmail] = useState([]);
    const [address, setAddress] = useState([]);
    const [imageLinks, setImageLinks] = useState([]);
    const [awsImgs, setAwsImgs] = useState([]);


    var infoUrl = "http://Airpages-elb-1-895405985.us-east-1.elb.amazonaws.com:8000/api/user/" + props.match.params.id + "/"
    var allPostsUrl = "http://Airpages-elb-1-895405985.us-east-1.elb.amazonaws.com:8000/api/user/" + props.match.params.id + "/posting/"

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
            if (response.data){
                response.data.forEach((post) => {
                    loadImage(post.image_link)
                })
            }
        }).catch ((error) => {
            alert(error.response)
        });

    }, [allPostsUrl]);

    //TODO- will png work?
    const loadImage = function(imageLink){
        downloadImage(imageLink).then( function(data){
            const buffer = Buffer.from(data.Body)
            const base64ImageData = buffer.toString('base64');
            const imgSrc = "data:image/jpg;base64," + base64ImageData;
            setAwsImgs(awsImgs => [...awsImgs, imgSrc])
        })
    }

    return (
        <div>
            <h1>User Info:</h1>
            <h1>{id}</h1>
            <h1>{first_name}</h1>
            <h1>{last_name}</h1>
            <h1>{email}</h1>
            <h1>{address}</h1>
            {awsImgs.map(imgSrc => {
                return <img src={imgSrc} style={{height: 600, width: "auto"}}></img>
            })}
        </div>
    );
}
export default UserPage;