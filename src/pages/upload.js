import React, { useState } from "react";
import styled from "styled-components";

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  margin-bottom: 40px;
  color: #333;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  resize: none;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;



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
        <UploadContainer>
            <FormContainer>
            <Heading>Welcome to Social Uploader</Heading>
                <Input 
                    type="file" 
                    className="file-input" 
                    id="file-input"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <TextArea 
                    className="caption-input" 
                    id="caption-input" 
                    placeholder="Caption"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                ></TextArea>
                <Button 
                    type="button"
                    className="upload-btn" 
                    id="upload-btn" 
                    onClick={handleUpload}
                >
                    Upload
                </Button>
            </FormContainer>
        </UploadContainer>
    );
};

export default Upload;