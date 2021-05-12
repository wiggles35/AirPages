import React, { useEffect, useState } from "react";
import axios from "axios";
import { downloadImage } from "../../Common/Services/AWS.js";
import "./Profile.css"
import { SignOut } from "../signout/signout.js"

export function UserPage(props) {

    const [id, setID] = useState("");
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
            alert(JSON.stringify(error))
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
            alert(JSON.stringify(error))
        });

    }, [allPostsUrl]);

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
        <main>
            <div className="userinfo">
                <h1><span>{first_name} {last_name}   -   {email}   -   {address}</span></h1>
                <br />
                { (localStorage.getItem("user").toString() === id.toString()) &&
                    <SignOut />
                }
                <br />
                <hr className="divider"/>
                <h1 className="postingHeader">Posts:</h1>
                <hr className="divider"/>
            </div>
            {posts
                .sort(({ post_id: previousID }, {post_id: currentID}) => previousID - currentID)
                .map(post => {
                return ([
                    <div className="postList">
                        <div className="facts">
                            {post.fact ? <h2 className="postBody">{post.fact}</h2> : <h2 className="postBody">No description provided</h2>}
                        </div>
                        <img className="pictures" src={post.imgSrc} style={{height: 400, width: "auto"}}></img>
                    </div>,
                    <hr className="divider"/>
                ]);
            })}
        </main>
    );
}
export default UserPage;