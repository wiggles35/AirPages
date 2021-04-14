import React from "react";
import "./facts.css"

const FactForm = ({ user, onChange, onSubmit }) => {
    return (
        <div className="factForm">
            <form onSubmit={onSubmit} autoComplete="off">
                <div className="form-group">
                    <label>First Name</label>
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        id="first-name-input"
                        value={user.firstName}
                        onChange={onChange}
                        name="firstName"
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
                        value={user.lastName}
                        onChange={onChange}
                        name="lastName"
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
                    <br />
                    <button type="submit" className="button" onSubmit={onSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FactForm;