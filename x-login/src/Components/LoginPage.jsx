import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [welcome, setWelcome] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "user" && password === "password") {
            setMessage("Welcome, user");
            setWelcome(true);
        } else {
            setMessage("Invalid username or password");
            setWelcome(false);
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            {welcome ? (
                <div>{message}</div>
            ) : (
                <div>
                    {message && <div>{message}</div>}
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">Username</label>
                            <span>:</span>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <span>:</span>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Login;
