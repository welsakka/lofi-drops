import React from 'react';
import './App.css';
import SimpleTabs from './Tabs.js';
import Copyright from './Copyright';
import Container from '@material-ui/core/Container';
import Radio from './Radio';


const tabs = ["chillhop", "bossa nova", "anime"];


class App extends React.Component {

  render() {
    return (

      <div className="App">
        <Container>
          <header className="App-header">
            <p>Lofi drops coming soon!!!</p>
          </header>
          <body>
            <Radio />
          </body>
          <Copyright />
        </Container>
      </div>
    );
  }
}


export default App;
