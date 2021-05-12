import React from "react";
import "./register.css"

const RegisterForm = ({ user, onChange, onSubmit }) => {
    return (
        <div className="registerForm">
            <form onSubmit={onSubmit} autoComplete="off">
                <div className="form-group">
                    <label>First Name</label>
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        id="first-name-input"
                        value={user.first_name}
                        onChange={onChange}
                        name="first_name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        id="last-name-input"
                        value={user.last_name}
                        onChange={onChange}
                        name="last_name"
                        required
                    />
                </div>{" "}
                <div className="form-group">
                    <label>Email</label>
                    <br />
                    <input
                        type="email"
                        className="form-control"
                        id="email-input"
                        value={user.email}
                        onChange={onChange}
                        name="email"
                        required
                    />
                </div>{" "}
                <div className="form-group">
                    <label>Address</label>
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        id="address-input"
                        value={user.address}
                        onChange={onChange}
                        name="address"
                        required
                    />
                </div>{" "}
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
                        required
                    />
                </div>{" "}
                <div className="form-group">
                    <br />
                    <button type="submit" className="button" onSubmit={onSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;