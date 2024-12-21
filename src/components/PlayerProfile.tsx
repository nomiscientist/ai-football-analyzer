import React, { useState, ChangeEvent, FormEvent } from 'react';
import { PlayerInfo } from '../types';
import './styles/components.css';

interface ExtendedPlayerInfo extends PlayerInfo {
    bio: string;
}

const PlayerProfile: React.FC = () => {
    const [playerInfo, setPlayerInfo] = useState<ExtendedPlayerInfo>({
        name: '',
        age: 0,
        position: '',
        team: '',
        bio: ''
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPlayerInfo(prev => ({
            ...prev,
            [name]: name === 'age' ? Number(value) : value
        }));
    };

    const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPlayerInfo(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Logic to save player information goes here
        console.log('Player Info Submitted:', playerInfo);
    };

    return (
        <div className="component-container">
            <h2>Player Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={playerInfo.name}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={playerInfo.age}
                        onChange={handleInputChange}
                        className="form-control"
                        min="0"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Position:</label>
                    <input
                        type="text"
                        name="position"
                        value={playerInfo.position}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Team:</label>
                    <input
                        type="text"
                        name="team"
                        value={playerInfo.team}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Bio:</label>
                    <textarea
                        name="bio"
                        value={playerInfo.bio}
                        onChange={handleTextAreaChange}
                        className="form-control"
                        rows={4}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save Profile</button>
            </form>
        </div>
    );
};

export default PlayerProfile;