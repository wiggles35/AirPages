import React from "react";
import "./footer.css";
import { useHistory } from "react-router-dom";

export function Footer() {
    const history = useHistory();

    return (
        <div id="FooterBar">
            <footer class="FooterBar">
                <p>Brian Cariddi - Tyler Krasny - Ryan Wigglesworth</p>
            </footer>
        </div>
    );
}
export default Footer;