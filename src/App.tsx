import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PlayerProfile from './components/PlayerProfile';
import VideoUpload from './components/VideoUpload';
import VideoAnalysis from './components/VideoAnalysis';
import GameRecording from './components/GameRecording';
import ProgressVisualization from './components/ProgressVisualization';
import './styles/App.css';

const Navigation: React.FC = () => {
    const location = useLocation();

    return (
        <nav className="nav-container">
            <ul className="nav-list">
                <li>
                    <Link 
                        to="/" 
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    >
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/player-profile" 
                        className={`nav-link ${location.pathname === '/player-profile' ? 'active' : ''}`}
                    >
                        Player Profile
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/video-upload" 
                        className={`nav-link ${location.pathname === '/video-upload' ? 'active' : ''}`}
                    >
                        Upload Video
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/video-analysis" 
                        className={`nav-link ${location.pathname === '/video-analysis' ? 'active' : ''}`}
                    >
                        Analysis
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/game-recording" 
                        className={`nav-link ${location.pathname === '/game-recording' ? 'active' : ''}`}
                    >
                        Record Game
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/progress-visualization" 
                        className={`nav-link ${location.pathname === '/progress-visualization' ? 'active' : ''}`}
                    >
                        Progress
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

const App: React.FC = () => {
    return (
        <Router>
            <div className="app-container">
                <Navigation />
                <main>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/player-profile" element={<PlayerProfile />} />
                        <Route path="/video-upload" element={<VideoUpload />} />
                        <Route path="/video-analysis" element={<VideoAnalysis />} />
                        <Route path="/game-recording" element={<GameRecording />} />
                        <Route path="/progress-visualization" element={<ProgressVisualization />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;