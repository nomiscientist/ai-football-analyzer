import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/dashboard.css';
import './styles/playerProfile.css';
import './styles/videoUpload.css';
import './styles/videoAnalysis.css';
import './styles/gameRecording.css';
import './styles/progressVisualization.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);