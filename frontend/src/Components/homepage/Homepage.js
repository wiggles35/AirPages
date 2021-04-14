import React from "react";
import "./homepage.css";
import FileUpload from "../../Common/Services/fileUpload.js"
import Facts from "../facts/Facts.js"

export function Homepage() {

    return (
        <main id="homepage" className="homepageContainer">
            <div className="pageFiles">
                <br />
                <FileUpload />
            </div>
            <div className="pageData">
                <Facts />
            </div>
        </main>
    );
}
export default Homepage;