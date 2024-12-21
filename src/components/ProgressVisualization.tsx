import React from 'react';
import './progressVisualization.css';

const ProgressVisualization: React.FC = () => {
    // Sample data for visualization
    const playerProgress = [
        { game: 'Game 1', score: 75 },
        { game: 'Game 2', score: 85 },
        { game: 'Game 3', score: 90 },
        { game: 'Game 4', score: 80 },
    ];

    return (
        <div className="progress-visualization">
            <h2>Player Progress Visualization</h2>
            <div className="progress-chart">
                {playerProgress.map((data, index) => (
                    <div key={index} className="progress-bar" style={{ width: `${data.score}%` }}>
                        <span>{data.game}: {data.score}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgressVisualization;