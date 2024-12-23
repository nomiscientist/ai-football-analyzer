import axios from 'axios';
import { PlayerInfo } from '../types';

const API_BASE_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

export const registerPlayer = async (playerData: PlayerInfo): Promise<any> => {
    const response = await axios.post(`${API_BASE_URL}/players/register`, playerData);
    return response.data;
};

export const getPlayerProfile = async (playerId: string): Promise<any> => {
    const response = await axios.get(`${API_BASE_URL}/players/${playerId}`);
    return response.data;
};

export const updatePlayerProfile = async (playerId: string, updatedData: Partial<PlayerInfo>): Promise<any> => {
    const response = await axios.put(`${API_BASE_URL}/players/${playerId}`, updatedData);
    return response.data;
};

export const uploadVideo = async (playerId: string, videoFile: File): Promise<any> => {
    const formData = new FormData();
    formData.append('video', videoFile);

    const response = await axios.post(`${API_BASE_URL}/players/${playerId}/videos`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};

export const getPlayerVideos = async (playerId: string): Promise<any> => {
    const response = await axios.get(`${API_BASE_URL}/players/${playerId}/videos`);
    return response.data;
};