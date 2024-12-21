import React, { useState } from 'react';
import './playerProfile.css';

const PlayerProfile = () => {
    const [playerInfo, setPlayerInfo] = useState({
        name: '',
        age: '',
        position: '',
        team: '',
        bio: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlayerInfo({
            ...playerInfo,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to save player information goes here
        console.log('Player Info Submitted:', playerInfo);
    };

    return (
        <div className="player-profile">
            <h2>Player Profile</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={playerInfo.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" name="age" value={playerInfo.age} onChange={handleChange} required />
                </div>
                <div>
                    <label>Position:</label>
                    <input type="text" name="position" value={playerInfo.position} onChange={handleChange} required />
                </div>
                <div>
                    <label>Team:</label>
                    <input type="text" name="team" value={playerInfo.team} onChange={handleChange} required />
                </div>
                <div>
                    <label>Bio:</label>
                    <textarea name="bio" value={playerInfo.bio} onChange={handleChange}></textarea>
                </div>
                <button type="submit">Save Profile</button>
            </form>
        </div>
    );
};

export default PlayerProfile;