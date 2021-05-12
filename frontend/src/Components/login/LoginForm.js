import React from "react";
import "./auth.css";
import { Link } from "react-router-dom";


const LoginForm = ({ user, onChange, onSubmit }) => {
    const Register = <Link to="/register">Register now</Link>;

    return (
        <div className="authForm">
            <br />
            <form onSubmit={onSubmit} autoComplete="off">
                <div className="form-group">
                    <label>Username</label>
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        id="username-input"
                        value={user.username}
                        onChange={onChange}
                        name="username"
                        required
                    />
                </div>{" "}
                <div className="form-group">
                    <label>Password</label>
                    <br />
                    <input
                        type="password"
                        className="form-control"
                        id="password-input"
                        value={user.password}
                        onChange={onChange}
                        name="password"
                        min="0"
                        required
                    />
                </div>
                <br />
                <div className="form-group">
                    <button type="submit" className="submitButton" onSubmit={onSubmit}>
                        Login
                    </button>
                </div>
            </form>
            <p>Don't have an account? {Register}</p>
        </div>
    );
};

export default LoginForm;