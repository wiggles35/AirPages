import React, {useState} from 'react';
import axios from 'axios';
import "./fileupload.css";

export function FileUpload(){
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSubmission = () => {
        const formData = new FormData();

        var url = "http://db.cse.nd.edu:5004/api/posting/"

        axios.post(
            url,
            {"user":"1","image_link":"https://images.idgesg.net/images/idge/imported/imageapi/2019/07/26/15/cloud_istock_harnnarong-100803439-large.jpg"},
            {
                headers:{'Content-Type': 'application/json'}
            }).then((response) => {
        }).catch((error) => {
            alert(JSON.stringify(error.response.data))
        });
    };

    return (
        <div>
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