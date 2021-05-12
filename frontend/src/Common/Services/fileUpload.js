import React, {useState} from 'react';
import axios from 'axios';
import "./fileupload.css";
import {uploadImage} from "./AWS";
import { useHistory } from "react-router-dom"

export function FileUpload(){
    const history = useHistory();
    const [fact, setFact] = useState();
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };


    const changeFactHandler = (event) => {
        setFact(event.target.value);
    };

    const handleSubmission = (event) => {
        event.preventDefault();
        var url = "http://Airpages-elb-1-895405985.us-east-1.elb.amazonaws.com:8000/api/posting/"
        const userID = localStorage.getItem("user")

        if (!userID){
            alert("Please sign in before posting")
            history.push("/login")
        }
        else{
            uploadImage(selectedFile).then( function(data){
                axios.post(
                    url,
                    {"user":userID,"image_link": data.Key,"fact": fact},
                    {
                        headers:{'Content-Type': 'application/json'}
                    }).then((response) => {
                    alert("Uploaded successfully!")
                }).catch((error) => {
                        alert(JSON.stringify(error.response.data))
                    }
                )}
            )
        }
    };

    return (
        <form onSubmit={handleSubmission}>
            <div>
                <textarea rows="8" cols="40" className="descEntry" onChange={changeFactHandler} id="fact" placeholder="Enter a description" required/>
            </div>
            <br />
            <input id="file" type="file" name="file" onChange={changeHandler} className="inputfile" required/>
            <label for="file">Upload a file</label>
            {isFilePicked ? (
                <div>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    <p>
                        lastModifiedDate:{' '}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p>
                </div>
            ) : (
                <p>Select a file to show details</p>
            )}
            <div>
                <button type="submit" className="button" onSubmit={handleSubmission}>Submit</button>
            </div>
        </form>
    );
}

export default FileUpload;