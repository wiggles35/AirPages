import React, { useEffect, useState } from "react";
import axios from "axios";
import { downloadImage } from "../../Common/Services/AWS.js";
import "./Profile.css"

export function UserPage(props) {

    const [id, setID] = useState([]);
    const [first_name, setFirstName] = useState([]);
    const [last_name, setLastName] = useState([]);
    const [email, setEmail] = useState([]);
    const [address, setAddress] = useState([]);
    const [posts, setPosts] = useState([]);


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
                    loadImage(post.image_link, post.id, post.fact)
                })
            }
        }).catch ((error) => {
            alert(error.response)
        });

    }, [allPostsUrl]);

    //TODO- will png work?
    const loadImage = function(imageLink, id, fact){
        downloadImage(imageLink).then( function(data){
            const buffer = Buffer.from(data.Body)
            const base64ImageData = buffer.toString('base64');
            const imgSrc = "data:image/jpg;base64," + base64ImageData;
            const postObject = {
                imgSrc: imgSrc,
                post_id: id,
                fact: fact
            }
            setPosts(posts => [...posts, postObject])
        })
    }

    return (
        <div>
            <div className="userinfo">
                <h1>User ID: {id}</h1>
                {first_name && <h1>First Name: {first_name}</h1> }
                {last_name && <h1>Last Name: {last_name}</h1>}
                {email && <h1>Email: {email}</h1>}
                {address && <h1>Address: {address}</h1>}
                <h1>Postings:</h1>
            </div>
            {posts
                .sort(({ post_id: previousID }, {post_id: currentID}) => previousID - currentID)
                .map(post => {
                return ([
                    <div className="postList">
                        <div className="facts">
                            <h1>Post ID: {post.post_id}</h1>
                            {post.fact && <h1>Post Description: {post.fact}</h1>}
                        </div>
                        <img className="pictures" src={post.imgSrc} style={{height: 600, width: "auto"}}></img>
                    </div>
                ]);
            })}
        </div>
    );
}
export default UserPage;