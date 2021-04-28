import React, {useState} from 'react';
import axios from 'axios';
import "./fileupload.css";
import {uploadImage} from "./AWS";

export function FileUpload(){
    const [userID, setUserID] = useState();
    const [fact, setFact] = useState();
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const changeIDHandler = (event) => {
        setUserID(event.target.value);
    };

    const changeFactHandler = (event) => {
        setFact(event.target.value);
    };

    const handleSubmission = (event) => {
        event.preventDefault();
        var url = "http://Airpages-elb-1-895405985.us-east-1.elb.amazonaws.com:8000/api/posting/"

        //TODO: Login system to generate user ID?
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
    };

    return (
        <div>
            <div>
                <label>User ID</label>
                <br />
                <input onChange={changeIDHandler} id="userID" required/>
            </div>
            <br />
            <div>
                <textarea onChange={changeFactHandler} id="fact" placeholder="(Optional) Enter a description" required/>
            </div>
            <br />
            <input id="file" type="file" name="file" onChange={changeHandler} className="inputfile"/>
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
                <button className="button" onClick={handleSubmission}>Submit</button>
            </div>
        </div>
    );
}

export default FileUpload;