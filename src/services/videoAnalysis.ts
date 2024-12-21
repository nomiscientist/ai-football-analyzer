import { VideoAnalysisResult } from '../types';

export const analyzeVideo = async (videoFile: File): Promise<VideoAnalysisResult> => {
    const formData = new FormData();
    formData.append('video', videoFile);

    const response = await fetch('/api/video-analysis', {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Video analysis failed');
    }

    const result: VideoAnalysisResult = await response.json();
    return result;
};

export const getPlayerScores = async (playerId: string): Promise<number[]> => {
    const response = await fetch(`/api/player-scores/${playerId}`);

    if (!response.ok) {
        throw new Error('Failed to fetch player scores');
    }

    const scores: number[] = await response.json();
    return scores;
};