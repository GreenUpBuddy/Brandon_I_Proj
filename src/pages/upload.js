import React, { useState } from 'react';
import styles from './Upload.module.css'; // Import the CSS module

const Upload = () => {
    const [file, setFile] = useState(null);
    const [caption, setCaption] = useState('');

    const handleUpload = () => {
        if (file && caption) {
            console.log('File:', file);
            console.log('Caption:', caption);
            alert('File uploaded successfully!');
        } else {
            alert('Please select a file and enter a caption.');
        }
    };

    return (
        <div className={styles.upload}>
            <div className={styles.container}>
                <h1>Welcome to Social Uploader</h1>
                <input
                    type="file"
                    className={styles.input}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <textarea
                    placeholder="Caption"
                    className={styles.input}
                    onChange={(e) => setCaption(e.target.value)}
                ></textarea>
                <button className={styles.button} onClick={handleUpload}>
                    Upload
                </button>
            </div>
        </div>
    );
};

export default Upload;
