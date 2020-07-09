import React from 'react';
import './App.css';
import nujabes from './nujabes.jpg'
import song from './bebop.mp3'
import gif from './cowboy.gif'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ReactAudioPlayer from 'react-audio-player';

const tabs = ["chillhop","bossa nova","anime"];

function Copyright() {
  return (
    <div className = "copyright">
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        lofi-drops.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </div>
  );
}

function App() {
  return (
    <html>
    <div className="App">
      <ReactAudioPlayer 
       src={song}
       autoPlay
       />
      <header className="App-header">
        <p>Now Playing : Insert song name </p>
        <p>Lofi drops coming soon!!!</p>
        
      </header>
      <Copyright />
    </div>
    </html>
  );
}

export default App;
