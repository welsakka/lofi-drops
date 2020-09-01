import React from 'react';
import './App.css';
import styles from './App.css'
import Channel from './Channel.js';
import Container from '@material-ui/core/Container';
import Copyright from './Copyright';
import { makeStyles } from '@material-ui/core/styles';

import song from './assets/music/bebop.mp3';
import song2 from './assets/music/too_good_too_bad.mp3';
import gif1 from './assets/gifs/anime.gif';
import gif2 from './assets/gifs/cowboy.gif';
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
                    name: "Anime style",
                    cssName : "App-anime",
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

        const channels = this.state.channels.map(channel => <Channel station={channel}/>);
        
        return (
            <div className={this.state.channels[this.state.activeChannel].cssName}>
                <Container>
                    <header>
                        {/*SimpleTabs logic obtained from https://stackoverflow.com/questions/57106772/how-to-call-parent-function-with-usestate-hook-in-react */}
                        <SimpleTabs 
                            onChannelChange0={() => this.changeChannel(0)}
                            onChannelChange1={() => this.changeChannel(1)}
                            onChannelChange2={() => this.changeChannel(2)}
                            state={this.state} />
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