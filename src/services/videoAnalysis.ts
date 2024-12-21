import { VideoAnalysisResult } from '../types';

export const analyzeVideo = async (videoFile: File): Promise<VideoAnalysisResult> => {
    const formData = new FormData();
    formData.append('video', videoFile);

    // Mock response for now - replace with actual API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: Math.random().toString(36).substr(2, 9),
                playerId: '123',
                timestamp: new Date().toISOString(),
                metrics: {
                    speed: Math.random() * 30,
                    accuracy: Math.random() * 100,
                    possession: Math.random() * 100
                },
                highlights: [
                    'Goal attempt at 2:15',
                    'Successful pass at 3:45',
                    'Sprint at 5:20'
                ]
            } as VideoAnalysisResult);
        }, 2000);
    });
};

export const getPlayerScores = async (playerId: string): Promise<number[]> => {
    const response = await fetch(`/api/player-scores/${playerId}`);

    if (!response.ok) {
        throw new Error('Failed to fetch player scores');
    }

    const scores: number[] = await response.json();
    return scores;
};