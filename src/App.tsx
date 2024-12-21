import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PlayerProfile from './components/PlayerProfile';
import VideoUpload from './components/VideoUpload';
import VideoAnalysis from './components/VideoAnalysis';
import GameRecording from './components/GameRecording';
import ProgressVisualization from './components/ProgressVisualization';
import './styles/dashboard.css';
import './styles/playerProfile.css';
import './styles/videoUpload.css';
import './styles/videoAnalysis.css';
import './styles/gameRecording.css';
import './styles/progressVisualization.css';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/player-profile" component={PlayerProfile} />
                <Route path="/video-upload" component={VideoUpload} />
                <Route path="/video-analysis" component={VideoAnalysis} />
                <Route path="/game-recording" component={GameRecording} />
                <Route path="/progress-visualization" component={ProgressVisualization} />
            </Switch>
        </Router>
    );
};

export default App;