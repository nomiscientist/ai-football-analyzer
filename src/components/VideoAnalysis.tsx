import React, { useEffect, useState } from 'react';
import { analyzeVideo } from '../services/videoAnalysis';
import './videoAnalysis.css';

const VideoAnalysis: React.FC = () => {
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [analysisResult, setAnalysisResult] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setVideoFile(event.target.files[0]);
        }
    };

    const handleAnalyzeVideo = async () => {
        if (videoFile) {
            setLoading(true);
            const result = await analyzeVideo(videoFile);
            setAnalysisResult(result);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (analysisResult) {
            // Handle the analysis result (e.g., display it)
        }
    }, [analysisResult]);

    return (
        <div className="video-analysis">
            <h2>Video Analysis</h2>
            <input type="file" accept="video/*" onChange={handleVideoUpload} />
            <button onClick={handleAnalyzeVideo} disabled={!videoFile || loading}>
                {loading ? 'Analyzing...' : 'Analyze Video'}
            </button>
            {analysisResult && (
                <div className="analysis-results">
                    <h3>Analysis Results</h3>
                    {/* Render analysis results here */}
                </div>
            )}
        </div>
    );
};

export default VideoAnalysis;