import React, { useState } from 'react';
import './styles/components.css';

const VideoUpload: React.FC = () => {
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [uploadStatus, setUploadStatus] = useState<string>('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setVideoFile(file);
        }
    };

    const handleUpload = async () => {
        if (!videoFile) {
            setUploadStatus('Please select a video file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('video', videoFile);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setUploadStatus('Video uploaded successfully!');
            } else {
                setUploadStatus('Failed to upload video. Please try again.');
            }
        } catch (error) {
            setUploadStatus('An error occurred during upload.');
        }
    };

    return (
        <div className="video-upload-container">
            <h2>Upload Game Video</h2>
            <input type="file" accept="video/*" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {uploadStatus && <p>{uploadStatus}</p>}
        </div>
    );
};

export default VideoUpload;