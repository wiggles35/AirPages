import React from "react";
import "./homepage.css";
import FileUpload from "../../Common/Services/fileUpload.js"
import Facts from "../facts/Facts.js"

export function Homepage() {

    return (
        <main id="homepage" className="homepageContainer">
            <div className="pageFiles">
                <h1>Upload an image to AirPages</h1>
                <br />
                <FileUpload />
            </div>
            <div className="pageData">
                <h1>Enter Directory Information</h1>
                <Facts />
            </div>
        </main>
    );
}
export default Homepage;