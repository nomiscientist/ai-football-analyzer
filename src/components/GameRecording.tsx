import React, { useState } from 'react';
import './styles/components.css';

const GameRecording: React.FC = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [recordedVideos, setRecordedVideos] = useState<string[]>([]);

    const startRecording = () => {
        setIsRecording(true);
        // Logic to start recording
    };

    const stopRecording = () => {
        setIsRecording(false);
        // Logic to stop recording and save video
        const newVideo = 'path/to/recorded/video'; // Replace with actual video path
        setRecordedVideos([...recordedVideos, newVideo]);
    };

    return (
        <div className="game-recording">
            <h2>Game Recording</h2>
            <button onClick={isRecording ? stopRecording : startRecording}>
                {isRecording ? 'Stop Recording' : 'Start Recording'}
            </button>
            <div className="recorded-videos">
                <h3>Recorded Videos</h3>
                <ul>
                    {recordedVideos.map((video, index) => (
                        <li key={index}>{video}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GameRecording;