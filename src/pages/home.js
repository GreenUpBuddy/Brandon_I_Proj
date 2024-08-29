import React, { useState } from 'react';
import Link from 'next/link';
import './Home.module.css'

function Home() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        if (username === 'admin' && password === '1234') {
            <Link href="/upload">
                <a>Upload Page</a>
            </Link>
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div className='container'>
            <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default Home;