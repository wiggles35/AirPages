import React from "react";
import Header from "./header/Header.js";
import Homepage from "./homepage/Homepage.js";
import Footer from "./footer/Footer.js";
import UserPage from "./profile/Profile.js";
import "../index.css";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const Components = () => {
    return (
        <Router>
            <div id="app">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route>
                        <Route path="/profile/:id" render={(props) => <UserPage {... props} />} />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default Components;