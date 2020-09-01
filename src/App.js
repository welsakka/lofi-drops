import React from 'react';
import './App.css';
import styles from './App.css'
import Channel from './Channel.js';
import Container from '@material-ui/core/Container';
import Copyright from './Copyright';
import { makeStyles } from '@material-ui/core/styles';

import song from './assets/music/chill/bebop.mp3';
import song2 from './assets/music/jazz/too_good_too_bad.mp3';
import gif1 from './assets/gifs/asian/anime.gif'
import gif2 from './assets/gifs/chill/anime.gif';
import SimpleTabs from './Tabs';

//This class holds all the data for the channels
class App extends React.Component {

    constructor() {
        super();
        this.state = {
            channels: [
                {
                    name: "Chill lofi",
                    cssName : "App-chill",
                    src: song,
                    gif: gif1,
                    isTunedIn: true,
                    isMuted: false
                },
                {
                    name: "Asian style",
                    cssName : "App-asian",
                    src: song2,
                    gif: gif2,
                    isTunedIn: false,
                    isMuted: true
                },
                {
                    name: "Jazz Hop",
                    cssName : "App-jazz",
                    src: song,
                    gif: gif2,
                    isTunedIn: false,
                    isMuted: true
                }
            ],
            activeChannel: 0
        }
        this.changeChannel = this.changeChannel.bind(this);
    }


    //Method that takes in array index number to identify which channel to tune into. Logic taken from :
    // https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react/43639228
    // Returns an array of objects
    changeChannel(i) {
        this.setState(prevState => {
            return {
                channels: prevState.channels.map((item, index) =>
                    index === i ? { ...item, isTunedIn: true, isMuted: false } : { ...item, isTunedIn: false, isMuted: true }
                ),
                activeChannel: i
            }
        })
    }

    render() {
        //array of Channel components
        const channels = this.state.channels.map(channel => <Channel station={channel}/>);
        //array of arrow functions for changeChannel method
        const changeChannels = this.state.channels.map( (channel, index) => {
            return( () => this.changeChannel(index) )        
        });

        return (
            //div className named dynamically to render the proper css 
            <div className={this.state.channels[this.state.activeChannel].cssName}>
                <Container>
                    <header>
                        <SimpleTabs changeChannelX={changeChannels} state={this.state} />
                    </header>

                    <body>
                        {channels}
                    </body>
                    
                    <Copyright />
                </Container>
            </div>
        )
    }
}

export default App;