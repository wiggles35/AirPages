import React from "react";
import "./homepage.css";
import FileUpload from "../../Common/Services/fileUpload.js"

export function Homepage() {

    return (
        <main id="homepage" className="homepageContainer">
            <div className="pageFiles">
                <h1>Create a post on AirPages</h1>
                <FileUpload />
            </div>
        </main>
    );
}
export default Homepage;