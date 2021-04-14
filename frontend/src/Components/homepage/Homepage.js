import React from "react";
import "./homepage.css";
import FileUpload from "../../Common/Services/fileUpload.js"

export function Homepage() {

    return (
        <main id="homepage" className="homepageContainer">
            <div className="pageFiles">
                <FileUpload />
            </div>
            <div className="pageData">
                <p>Form here</p>
            </div>
        </main>
    );
}
export default Homepage;