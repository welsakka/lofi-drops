import React from 'react';
import './App.css';
import SimpleTabs from './Tabs.js';
import song from './assets/music/bebop.mp3';
import Copyright from './Copyright';
import ReactAudioPlayer from 'react-audio-player';
import Container from '@material-ui/core/Container';

const tabs = ["chillhop", "bossa nova", "anime"];

class App extends React.Component {

  render() {
    return (

      <div className="App">
        <Container>
          <ReactAudioPlayer
            src={song}
            
          />
          <SimpleTabs />
          <header className="App-header">
            <p>Now Playing : Insert song name </p>
            <p>Lofi drops coming soon!!!</p>

          </header>
          <Copyright />
        </Container>
      </div>
    );
  }
}


export default App;
