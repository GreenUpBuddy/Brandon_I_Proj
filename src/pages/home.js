import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Home.module.css';

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
        <div className={styles.home}>
            <div className={styles.container}>
                <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                    <label className={styles.usernameLabel}>Username</label><br />
                    <input
                        className={styles.username}
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <br />
                    <label className={styles.passwordLabel}>Password</label><br />
                    <input
                        className={styles.password}
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <br />
                    <button 
                        type="submit"
                        className={styles.SignInBtn}>Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default Home;
