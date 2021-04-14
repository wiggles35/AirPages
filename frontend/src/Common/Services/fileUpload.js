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

        formData.append('File', selectedFile);
        alert("HERE")
        axios.post("ENDPOINT HERE", formData)
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